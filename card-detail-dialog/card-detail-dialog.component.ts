import {Component, Inject, Input, OnInit, Output} from '@angular/core';
import {CardModel} from '../../models/card.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PlayerComponent} from '../player/player.component';
import {Subject} from 'rxjs';
import {EngineService} from '../../service/engine.service';

@Component({
  selector: 'app-card-detail-dialog',
  templateUrl: './card-detail-dialog.component.html',
  styleUrls: ['./card-detail-dialog.component.scss']
})
export class CardDetailDialogComponent implements OnInit {

  card: CardModel;
  player: PlayerComponent;
  amount: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<number>,
              private engineService: EngineService) {
    this.card = data.card;
    this.player = data.player;
    console.log(this.player);
    this.amount = data.amount;
  }

  buyFunction(): void {
    const amountToBuy = 1;
    this.engineService.buy(this.card, this.player);

    this.dialogRef.close({
      data: amountToBuy
    });
  }

  ngOnInit(): void {
  }

}
