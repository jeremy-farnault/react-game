import IPlayers = IStoreState.IPlayers;
import {
  Faction,
  HeroSize,
  ICard,
  ICardAssets,
  IHeroAssets,
  IHeroBattlefield,
  IHeroCharacteristics,
  IPlayer
} from "../core/models";
import { IStoreState } from "../types";
import { constants } from "../utils/constants";
import { cardsIds } from "./cardsIds";
import { heroesIds } from "./heroesIds";

export const fakePlayers: IPlayers = {
  ["firstPlayer"]: {
    heroes: {
      [heroesIds.aragorn]: {
        assets: {
          battlefieldPath: require('../assets/heroesBattlefield/aragorn.png'),
          miniaturePath: require('../assets/heroesMiniatures/aragorn.png'),
          tokenInitPath: require('../assets/heroesTokensInit/aragorn.png'),
          tokenPath: require('../assets/heroesTokens/aragorn.png')
        } as IHeroAssets,
        characteristics: {
          agility: 7,
          armor: 7,
          attack: 8,
          attackArmor: 2,
          initiative: 10,
          lifePoints: 10,
          magic: 0,
          magicPoints: 0,
          mental: 7,
          range: 8,
          rangedAttack: 6,
          size: HeroSize.medium,
          speed: 7,
          stamina: 8,
          strength: 7
        } as IHeroCharacteristics,
        cost: 100,
        description:
          "Aragorn II, son of Arathorn was a Ranger of the North, first introduced with the name Strider at Bree.",
        id: heroesIds.aragorn,
        skills: ["Anduril", "For Frodo"],
        unique: true,
        tileX: 0,
        tileY: 0,
        posX: constants.tileSize,
        posY: constants.tileSize,
        playerId: 'firstPlayer'
      } as IHeroBattlefield,
      [heroesIds.arwen]: {
        assets: {
          tokenPath: require('../assets/heroesTokens/arwen.png'),
          tokenInitPath: require('../assets/heroesTokensInit/arwen.png'),
          miniaturePath: require('../assets/heroesMiniatures/arwen.png'),
          battlefieldPath: require('../assets/heroesBattlefield/arwen.png')
        } as IHeroAssets,
        characteristics: {
          speed: 7,
          initiative: 7,
          lifePoints: 7,
          magicPoints: 8,
          armor: 5,
          range: 0,
          size: HeroSize.medium,
          agility: 8,
          stamina: 6,
          strength: 5,
          magic: 8,
          mental: 8,
          attack: 5,
          rangedAttack: 0,
          attackArmor: 1
        } as IHeroCharacteristics,
        cost: 75,
        description: "Arwen was the Half-Elven daughter of Elrond and Celebrían.",
        id: heroesIds.arwen,
        skills: ["Hadhafang", "Athelas"],
        unique: true,
        tileX: 0,
        tileY: 1,
        posX: constants.tileSize,
        posY: constants.tileSize * 2,
        playerId: 'firstPlayer'
      } as IHeroBattlefield
    },
    cards: {
      [cardsIds.aragorn]: {
        id: cardsIds.aragorn,
        cost: 5,
        effect: "Reduce your threat to your starting threat level.",
        description: "Sentinel",
        assets: {
          miniaturePath: "assets/cardsSmall/aragorn_small.png",
          normalPath: "assets/cardsBig/aragorn_big.png"
        } as ICardAssets,
        faction: Faction.good,
        linkedTo: [heroesIds.aragorn],
        available: 1,
        limitedTo: 1
      } as ICard,
      [cardsIds.arwen]: {
        id: cardsIds.arwen,
        cost: 3,
        effect: "Discard a card.",
        description: "Noble",
        assets: {
          normalPath: require('../assets/cardsBig/arwen_big.png'),
          miniaturePath: require('../assets/cardsSmall/arwen_small.png')
        } as ICardAssets,
        faction: Faction.good,
        linkedTo: [heroesIds.arwen],
        available: 2,
        limitedTo: 10
      } as ICard
    },
    id: "firstPlayer"
  } as IPlayer,
  ["secondPlayer"]: {
    heroes: {
      [heroesIds.gothmog]: {
        id: heroesIds.gothmog,
        characteristics: {
          speed: 5,
          initiative: 5,
          lifePoints: 9,
          magicPoints: 0,
          armor: 8,
          range: 0,
          size: HeroSize.medium,
          agility: 5,
          stamina: 7,
          strength: 9,
          magic: 0,
          mental: 5,
          attack: 9,
          rangedAttack: 0,
          attackArmor: 2
        } as IHeroCharacteristics,
        cost: 90,
        unique: true,
        tileX: 15,
        tileY: 0,
        posX: constants.tileSize * 16,
        posY: constants.tileSize,
        playerId: 'secondPlayer',
        skills: ["Mace", "Time of the Orc"],
        description:
          "Gothmog was the lieutenant of the Witch-king in the Third Age, from Minas Morgul, notably at the Battle of the Pelennor Fields.",
        assets: {
          tokenPath: require('../assets/heroesTokens/gothmog.png'),
          miniaturePath: require('../assets/heroesMiniatures/gothmog.png'),
          tokenInitPath: require('../assets/heroesTokensInit/gothmog.png'),
          battlefieldPath: require('../assets/heroesBattlefield/gothmog.png')
        } as IHeroAssets
      } as IHeroBattlefield,
      [heroesIds.grima]: {
        id: heroesIds.grima,
        characteristics: {
          speed: 3,
          initiative: 4,
          lifePoints: 5,
          magicPoints: 0,
          armor: 2,
          range: 0,
          size: HeroSize.medium,
          agility: 4,
          stamina: 4,
          strength: 3,
          magic: 0,
          mental: 4,
          attack: 4,
          rangedAttack: 0,
          attackArmor: 1
        } as IHeroCharacteristics,
        cost: 25,
        tileX: 15,
        tileY: 1,
        posX: constants.tileSize * 16,
        posY: constants.tileSize * 2,
        unique: true,
        playerId: 'secondPlayer',
        skills: ["Switch sides", "Ill advisor"],
        description:
          "Gríma Wormtongue was the chief advisor to King Théoden of Rohan. He was the son of Gálmód.",
        assets: {
          tokenPath: require('../assets/heroesTokens/grima.png'),
          miniaturePath: require('../assets/heroesMiniatures/grima.png'),
          tokenInitPath: require('../assets/heroesTokensInit/grima.png'),
          battlefieldPath: require('../assets/heroesBattlefield/grima.png')
        } as IHeroAssets
      } as IHeroBattlefield,
      [heroesIds.grishnakh]: {
        id: heroesIds.grishnakh,
        characteristics: {
          speed: 6,
          initiative: 6,
          lifePoints: 5,
          magicPoints: 0,
          armor: 5,
          range: 0,
          size: HeroSize.small,
          agility: 5,
          stamina: 5,
          strength: 5,
          magic: 0,
          mental: 5,
          attack: 4,
          rangedAttack: 0,
          attackArmor: 1
        } as IHeroCharacteristics,
        cost: 45,
        unique: true,
        tileX: 15,
        tileY: 2,
        posX: constants.tileSize * 16,
        posY: constants.tileSize * 3,
        playerId: 'secondPlayer',
        skills: ["Long arms", "Back to Lugburz"],
        description: "Grishnákh was a captain of Orcs from Mordor.",
        assets: {
          tokenPath: require('../assets/heroesTokens/grishnakh.png'),
          miniaturePath: require('../assets/heroesMiniatures/grishnakh.png'),
          tokenInitPath: require('../assets/heroesTokensInit/grishnakh.png'),
          battlefieldPath: require('../assets/heroesBattlefield/grishnakh.png')
        } as IHeroAssets
      } as IHeroBattlefield
    },
    cards: {
      [cardsIds.fellRider]: {
        id: cardsIds.fellRider,
        cost: 6,
        effect: "Cannot have non-Morgul attachments.",
        description: "Nazgul",
        assets: {
          normalPath: require('../assets/cardsBig/fellrider_big.png'),
          miniaturePath: require('../assets/cardsSmall/fellrider_small.png')
        } as ICardAssets,
        faction: Faction.evil,
        linkedTo: ["Hero X", "Hero Y"],
        available: 1,
        limitedTo: 10
      } as ICard,
      [cardsIds.frodo]: {
        id: cardsIds.frodo,
        cost: 2,
        effect: "Exhaust the One Ring and spend 1 resource.",
        description: "Hobbit",
        assets: {
          normalPath: require('../assets/cardsBig/frodo_big.png'),
          miniaturePath: require('../assets/cardsSmall/frodo_small.png')
        } as ICardAssets,
        faction: Faction.good,
        linkedTo: ["Hero X", "Hero Y"],
        available: 2,
        limitedTo: 10
      } as ICard
    },
    id: "secondPlayer"
  } as IPlayer
};
