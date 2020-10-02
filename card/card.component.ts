import {Component, Input, OnInit} from '@angular/core';
import {CardModel} from '../../models/card.model';
import {MatDialog} from '@angular/material/dialog';
import {CardDetailDialogComponent} from '../card-detail-dialog/card-detail-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: CardModel;
  @Input() player: string;
  @Input() amount: number;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openCardDetailDialog(): void {
    const dialogRef = this.dialog.open(CardDetailDialogComponent, {
      data: {
        card: this.card,
        player: this.player,
        amount: this.amount
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.amount = this.amount - result.data;
    });
  }
}
