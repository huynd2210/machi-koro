import {Component, Input, OnInit, Output} from '@angular/core';
import {GameService} from '../../service/game.service';
import {EngineService} from '../../service/engine.service';
import {Subject} from 'rxjs';
import {PlayerModel} from '../../models/player.model';
import {InitBakeryCard, InitWheatFieldCard, WheatFieldCard} from '../../models/card-list.model';
import {CardModel} from '../../models/card.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Output() diceRolled: Subject<number> = new Subject<number>();
  @Input() isActive: boolean;
  @Input() id: string;
  player: PlayerModel;
  isUser: boolean;

  constructor(private gameService: GameService,
              private engineService: EngineService) {
  }

  ngOnInit(): void {
    this.player = this.gameService.initPlayer(this.id);
  }

  roll1Dice(): void {
    const rollNumber = this.rollDice();
    this.isActive = false;
    this.diceRolled.next(rollNumber);
  }

  roll2Dice(): number {
    return this.rollDice() + this.rollDice();
  }

  private rollDice(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  getCardAmountInHand(cardName: any): number {
    let count = 0;
    for (const card of this.player.handCards) {
      if (card.constructor.name === cardName) {
        count++;
      }
    }
    return count;
  }

  getAmountOfCoins(): number {
    return this.player.coins;
  }

  addCoins(amount: number): void {
    this.player.coins += amount;
  }

  addCard(card: CardModel): void {
    this.player.handCards.push(card);
  }
}
