import IPlayers = IStoreState.IPlayers;
import {
  Faction,
  HeroSize,
  ICard,
  ICardAssets,
  IHeroAssets,
  IHeroBattlefield, IHeroBattlefieldState,
  IHeroCharacteristics,
  IPlayer, SkillIconType
} from "../core/models";
import { IStoreState } from "../types";
import { cardsIds } from "./cardsIds";
import { heroesIds } from "./heroesIds";

export const fakePlayers: IPlayers = {
  ["firstPlayer"]: {
    heroes: {
      [heroesIds.aragorn]: {
        assets: {
          battlefieldPath: {
            path: require("../assets/heroesBattlefield/aragorn.png"),
            height: 50,
            width: 50
          },
          miniaturePath: {
            path: require("../assets/heroesMiniatures/aragorn.png"),
            height: 50,
            width: 50
          },
          tokenInitPath: {
            path: require("../assets/heroesTokensInit/aragorn.png"),
            height: 50,
            width: 50
          },
          tokenPath: {
            path: require("../assets/heroesTokens/aragorn.png"),
            height: 50,
            width: 50
          }
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
        skills: [
          {
            name: "Anduril",
            iconType: SkillIconType.specialAttack
          },
          {
            name: "For Frodo",
            iconType: SkillIconType.specialMagic
          }
        ],
        unique: true,
        tileX: 0,
        tileY: 0,
        playerId: "firstPlayer",
        selected: false,
        points: {
          currentLifePoints: 10,
          currentMagicPoints: 0,
          currentArmorPoints: 7
        },
        state: IHeroBattlefieldState.idle
      } as IHeroBattlefield,
      [heroesIds.arwen]: {
        assets: {
          tokenPath: {
            path: require("../assets/heroesTokens/arwen.png"),
            height: 50,
            width: 50
          },
          tokenInitPath: {
            path: require("../assets/heroesTokensInit/arwen.png"),
            height: 50,
            width: 50
          },
          miniaturePath: {
            path: require("../assets/heroesMiniatures/arwen.png"),
            height: 50,
            width: 50
          },
          battlefieldPath: {
            path: require("../assets/heroesBattlefield/arwen.png"),
            height: 50,
            width: 27
          }
        } as IHeroAssets,
        characteristics: {
          agility: 8,
          armor: 5,
          attack: 5,
          attackArmor: 1,
          initiative: 7,
          lifePoints: 7,
          magic: 8,
          magicPoints: 8,
          mental: 8,
          range: 0,
          rangedAttack: 0,
          size: HeroSize.medium,
          speed: 7,
          stamina: 6,
          strength: 5
        } as IHeroCharacteristics,
        cost: 75,
        description: "Arwen was the Half-Elven daughter of Elrond and Celebrían.",
        id: heroesIds.arwen,
        skills: [
          {
            name: "Hadhafang",
            iconType: SkillIconType.specialAttack
          },
          {
            name: "Athelas",
            iconType: SkillIconType.specialMagic
          }
        ],
        unique: true,
        tileX: 0,
        tileY: 1,
        playerId: "firstPlayer",
        selected: false,
        points: {
          currentLifePoints: 7,
          currentMagicPoints: 8,
          currentArmorPoints: 5
        },
        state: IHeroBattlefieldState.idle
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
          normalPath: require("../assets/cardsBig/arwen_big.png"),
          miniaturePath: require("../assets/cardsSmall/arwen_small.png")
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
      [heroesIds.bombadil]: {
        id: heroesIds.bombadil,
        characteristics: {
          agility: 3,
          armor: 2,
          attack: 1,
          attackArmor: 1,
          initiative: 10,
          lifePoints: 8,
          magic: 20,
          magicPoints: 20,
          mental: 20,
          range: 0,
          rangedAttack: 0,
          size: HeroSize.medium,
          speed: 6,
          stamina: 6,
          strength: 3
        } as IHeroCharacteristics,
        cost: 130,
        unique: true,
        skills: [
          {
            name: "Resurrect",
            iconType: SkillIconType.specialAttack
          },
          {
            name: "Untouch by evil",
            iconType: SkillIconType.specialMagic
          }
        ],
        description:
          "Tom Bombadil was an enigmatic figure that lived throughout the history of Arda.",
        tileX: 15,
        tileY: 0,
        playerId: "secondPlayer",
        selected: false,
        points: {
          currentLifePoints: 8,
          currentMagicPoints: 20,
          currentArmorPoints: 2
        },
        state: IHeroBattlefieldState.idle,
        assets: {
          tokenPath: {
            path: require("../assets/heroesTokens/bombadil.png"),
            height: 50,
            width: 50
          },
          miniaturePath: {
            path: require("../assets/heroesMiniatures/bombadil.png"),
            height: 50,
            width: 50
          },
          tokenInitPath: {
            path: require("../assets/heroesTokensInit/bombadil.png"),
            height: 50,
            width: 50
          },
          battlefieldPath: {
            path: require("../assets/heroesBattlefield/bombadil.png"),
            height: 50,
            width: 37
          }
        } as IHeroAssets
      } as IHeroBattlefield,
      [heroesIds.boromir]: {
        id: heroesIds.boromir,
        characteristics: {
          agility: 6,
          armor: 9,
          attack: 8,
          attackArmor: 2,
          initiative: 6,
          lifePoints: 12,
          magic: 0,
          magicPoints: 0,
          mental: 6,
          range: 0,
          rangedAttack: 0,
          size: HeroSize.medium,
          speed: 6,
          stamina: 9,
          strength: 8
        } as IHeroCharacteristics,
        cost: 95,
        unique: true,
        skills: [
          {
            name: "Horn of Gondor",
            iconType: SkillIconType.specialAttack
          },
          {
            name: "Sacrifice",
            iconType: SkillIconType.specialMagic
          }
        ],
        description:
          "Boromir was the eldest son of Denethor II, older brother of Faramir.",
        tileX: 15,
        tileY: 1,
        playerId: "secondPlayer",
        selected: false,
        points: {
          currentLifePoints: 12,
          currentMagicPoints: 0,
          currentArmorPoints: 9
        },
        state: IHeroBattlefieldState.idle,
        assets: {
          tokenPath: {
            path: require("../assets/heroesTokens/boromir.png"),
            height: 50,
            width: 50
          },
          miniaturePath: {
            path: require("../assets/heroesMiniatures/boromir.png"),
            height: 50,
            width: 50
          },
          tokenInitPath: {
            path: require("../assets/heroesTokensInit/boromir.png"),
            height: 50,
            width: 50
          },
          battlefieldPath: {
            path: require("../assets/heroesBattlefield/boromir.png"),
            height: 50,
            width: 58
          }
        } as IHeroAssets
      } as IHeroBattlefield,
      [heroesIds.caveTroll]: {
        id: heroesIds.caveTroll,
        characteristics: {
          agility: 4,
          armor: 9,
          attack: 10,
          attackArmor: 3,
          initiative: 5,
          lifePoints: 25,
          magic: 0,
          magicPoints: 0,
          mental: 3,
          range: 0,
          rangedAttack: 0,
          size: HeroSize.large,
          speed: 4,
          stamina: 8,
          strength: 10
        } as IHeroCharacteristics,
        cost: 150,
        unique: false,
        skills: [
          {
            name: "Spear",
            iconType: SkillIconType.specialAttack
          },
          {
            name: "Hard skin",
            iconType: SkillIconType.specialMagic
          }
        ],
        description:
          "Cave-trolls are a race of trolls found within the caves of the Misty Mountains.",
        tileX: 15,
        tileY: 2,
        playerId: "secondPlayer",
        selected: false,
        points: {
          currentLifePoints: 25,
          currentMagicPoints: 0,
          currentArmorPoints: 9
        },
        state: IHeroBattlefieldState.idle,
        assets: {
          tokenPath: {
            path: require("../assets/heroesTokens/cave_troll.png"),
            height: 50,
            width: 50
          },
          miniaturePath: {
            path: require("../assets/heroesMiniatures/cave_troll.png"),
            height: 50,
            width: 50
          },
          tokenInitPath: {
            path: require("../assets/heroesTokensInit/cave_troll.png"),
            height: 50,
            width: 50
          },
          battlefieldPath: {
            path: require("../assets/heroesBattlefield/cave_troll.png"),
            height: 50,
            width: 50
          }
        } as IHeroAssets
      } as IHeroBattlefield,
    },
    cards: {
      [cardsIds.fellRider]: {
        id: cardsIds.fellRider,
        cost: 6,
        effect: "Cannot have non-Morgul attachments.",
        description: "Nazgul",
        assets: {
          normalPath: require("../assets/cardsBig/fellrider_big.png"),
          miniaturePath: require("../assets/cardsSmall/fellrider_small.png")
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
          normalPath: require("../assets/cardsBig/frodo_big.png"),
          miniaturePath: require("../assets/cardsSmall/frodo_small.png")
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
