import {Component, OnInit} from '@angular/core';
import {GameService} from '../../../service/game.service';
import {CardModel} from '../../../models/card.model';
import {
  AppleOrchardCard,
  BakeryCard, BusinessCenterCard, CafeCard, CheeseFactoryCard,
  ConvenienceStoreCard, FamilyRestaurantCard,
  ForestCard, FruitAndVegetableMarketCard, FurnitureFactoryCard,
  MineCard,
  RanchCard, StadiumCard, TVStationCard,
  WheatFieldCard
} from '../../../models/card-list.model';

@Component({
  selector: 'app-tabl',
  templateUrl: './tabl.component.html',
  styleUrls: ['./tabl.component.scss']
})
export class TablComponent implements OnInit {

  tableCards: CardModel[];
  cardDisplay: CardModel[];
  remainingWheatField: number;
  remainingBakery: number;
  remainingRanch: number;
  remainingForest: number;
  remainingMine: number;
  remainingAppleOrchard: number;
  remainingConvenienceStore: number;
  remainingCheeseFactory: number;
  remainingFurnitureFactory: number;
  remainingFruitVegMarket: number;
  remainingCafe: number;
  remainingFamilyRestaurant: number;
  remainingStadium: number;
  remainingTVStation: number;
  remainingBusinessCenter: number;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.tableCards = this.gameService.initTableCards();
    this.cardDisplay = this.gameService.initCardDisplay();
    this.remainingWheatField = this.getCardAmount(WheatFieldCard.name);
    this.remainingBakery = this.getCardAmount(BakeryCard.name);
    this.remainingRanch = this.getCardAmount(RanchCard.name);
    this.remainingForest = this.getCardAmount(ForestCard.name);
    this.remainingMine = this.getCardAmount(MineCard.name);
    this.remainingAppleOrchard = this.getCardAmount(AppleOrchardCard.name);
    this.remainingConvenienceStore = this.getCardAmount(ConvenienceStoreCard.name);
    this.remainingCheeseFactory = this.getCardAmount(CheeseFactoryCard.name);
    this.remainingFurnitureFactory = this.getCardAmount(FurnitureFactoryCard.name);
    this.remainingFruitVegMarket = this.getCardAmount(FruitAndVegetableMarketCard.name);
    this.remainingCafe = this.getCardAmount(CafeCard.name);
    this.remainingFamilyRestaurant = this.getCardAmount(FamilyRestaurantCard.name);
    this.remainingStadium = this.getCardAmount(StadiumCard.name);
    this.remainingTVStation = this.getCardAmount(TVStationCard.name);
    this.remainingBusinessCenter = this.getCardAmount(BusinessCenterCard.name);
  }

  getRemainingAmount(card): number{
    if (card.name === 'Wheat Field'){
      return this.remainingWheatField;
    }else if (card.name === 'Bakery'){
      return this.remainingBakery;
    }else if (card.name === 'Ranch'){
      return this.remainingRanch;
    }else if (card.name === 'Forest'){
      return this.remainingForest;
    }else if (card.name === 'Mine'){
      return this.remainingMine;
    }else if (card.name === 'Apple Orchard'){
      return this.remainingAppleOrchard;
    }else if (card.name === 'Convenience Store'){
      return this.remainingConvenienceStore;
    }else if (card.name === 'Cheese Factory'){
      return this.remainingCheeseFactory;
    }else if (card.name === 'Furniture Factory'){
      return this.remainingFurnitureFactory;
    }else if (card.name === 'Fruit and Vegetable Market'){
      return this.remainingFruitVegMarket;
    }else if (card.name === 'Cafe'){
      return this.remainingCafe;
    }else if (card.name === 'Family Restaurant'){
      return this.remainingFamilyRestaurant;
    }else if (card.name === 'Stadium'){
      return this.remainingStadium;
    }else if (card.name === 'TV Station'){
      return this.remainingTVStation;
    }else if (card.name === 'Business Center'){
      return this.remainingBusinessCenter;
    }else{
      return -1000;
    }
  }

  getCardAmount(instance: any): number {
    let count = 0;
    for (const card of this.tableCards) {
      if (card.constructor.name === instance) {
        count++;
      }
    }
    return count;
  }

}
