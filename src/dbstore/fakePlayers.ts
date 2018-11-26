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
        currentActionPoints: 3,
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
        currentActionPoints: 3,
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
          miniaturePath: require("../assets/cardsSmall/aragorn_small.png"),
          normalPath: require("../assets/cardsBig/aragorn_big.png")
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
      } as ICard,
      [cardsIds.barlimanButterbur]: {
        id: cardsIds.barlimanButterbur,
        cost: 3,
        effect: "Damage may be assigned to Barliman.",
        description: "Hobbit",
        assets: {
          normalPath: require("../assets/cardsBig/barlimanbutterbur_big.png"),
          miniaturePath: require("../assets/cardsSmall/barlimanbutterbur_small.png")
        } as ICardAssets,
        faction: Faction.good,
        linkedTo: [],
        available: 3,
        limitedTo: 10
      } as ICard,
      [cardsIds.beregond]: {
        id: cardsIds.beregond,
        cost: 4,
        effect: "Lower the cost of weapons by 2.",
        description: "Gondor",
        assets: {
          normalPath: require("../assets/cardsBig/beregond_big.png"),
          miniaturePath: require("../assets/cardsSmall/beregond_small.png")
        } as ICardAssets,
        faction: Faction.good,
        linkedTo: [],
        available: 1,
        limitedTo: 10
      } as ICard,
      [cardsIds.bilbo]: {
        id: cardsIds.bilbo,
        cost: 3,
        effect: "The first player gains control of Bilbo.",
        description: "Hobbit",
        assets: {
          normalPath: require("../assets/cardsBig/bilbo_big.png"),
          miniaturePath: require("../assets/cardsSmall/bilbo_small.png")
        } as ICardAssets,
        faction: Faction.good,
        linkedTo: ["Hero X", "Hero Y"],
        available: 4,
        limitedTo: 10
      } as ICard,
      [cardsIds.billFerny]: {
        id: cardsIds.billFerny,
        cost: 5,
        effect: "Raise threat by 1 for each non hero.",
        description: "Bree",
        assets: {
          normalPath: require("../assets/cardsBig/billferny_big.png"),
          miniaturePath: require("../assets/cardsSmall/billferny_small.png")
        } as ICardAssets,
        faction: Faction.evil,
        linkedTo: [],
        available: 1,
        limitedTo: 10
      } as ICard,
      [cardsIds.billThePony]: {
        id: cardsIds.billThePony,
        cost: 2,
        effect: "Each hobbit gets +1 hit point.",
        description: "Pony",
        assets: {
          normalPath: require("../assets/cardsBig/billpony_big.png"),
          miniaturePath: require("../assets/cardsSmall/billpony_small.png")
        } as ICardAssets,
        faction: Faction.good,
        linkedTo: [],
        available: 2,
        limitedTo: 10
      } as ICard,
      [cardsIds.boromir]: {
        id: cardsIds.boromir,
        cost: 5,
        effect: "Gondor allies get +1 hit point.",
        description: "Warrior",
        assets: {
          normalPath: require("../assets/cardsBig/boromir_big.png"),
          miniaturePath: require("../assets/cardsSmall/boromir_small.png")
        } as ICardAssets,
        faction: Faction.good,
        linkedTo: ["Hero X", "Hero Y"],
        available: 3,
        limitedTo: 2
      } as ICard,
      [cardsIds.captainOfHarad]: {
        id: cardsIds.captainOfHarad,
        cost: 5,
        effect: "Each Harad enemy gets +1 hit points.",
        description: "Harad",
        assets: {
          normalPath: require("../assets/cardsBig/haradcaptain_big.png"),
          miniaturePath: require("../assets/cardsSmall/haradcaptain_small.png")
        } as ICardAssets,
        faction: Faction.evil,
        linkedTo: ["Hero X", "Hero Y"],
        available: 1,
        limitedTo: 10
      } as ICard,
      [cardsIds.caveTroll]: {
        id: cardsIds.caveTroll,
        cost: 7,
        effect: "You must damage another character you control.",
        description: "Troll",
        assets: {
          normalPath: require("../assets/cardsBig/cavetroll_big.png"),
          miniaturePath: require("../assets/cardsSmall/cavetroll_small.png")
        } as ICardAssets,
        faction: Faction.evil,
        linkedTo: [],
        available: 1,
        limitedTo: 1
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
        currentActionPoints: 3,
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
        currentActionPoints: 3,
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
        currentActionPoints: 3,
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
      } as IHeroBattlefield
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
      } as ICard,
      [cardsIds.umbarAssassin]: {
        id: cardsIds.umbarAssassin,
        cost: 5,
        effect: "Archery 2. Player must deal 3 damage to a hero.",
        description: "Brigand",
        assets: {
          normalPath: require("../assets/cardsBig/umbarassassin_big.png"),
          miniaturePath: require("../assets/cardsSmall/umbarassassin_small.png")
        } as ICardAssets,
        faction: Faction.evil,
        linkedTo: ["Hero X", "Hero Y"],
        available: 1,
        limitedTo: 10
      } as ICard,
      [cardsIds.umbarCaptain]: {
        id: cardsIds.umbarCaptain,
        cost: 5,
        effect: "Characters you control cannot attack Ship ennemies.",
        description: "Corsair",
        assets: {
          normalPath: require("../assets/cardsBig/umbarcaptain_big.png"),
          miniaturePath: require("../assets/cardsSmall/umbarcaptain_small.png")
        } as ICardAssets,
        faction: Faction.evil,
        linkedTo: ["Hero X", "Hero Y"],
        available: 1,
        limitedTo: 2
      } as ICard,
      [cardsIds.umbarRaider]: {
        id: cardsIds.umbarRaider,
        cost: 4,
        effect: "Gets +1 hit points for each resource on it.",
        description: "Corsair",
        assets: {
          normalPath: require("../assets/cardsBig/umbarraider_big.png"),
          miniaturePath: require("../assets/cardsSmall/umbarraider_small.png")
        } as ICardAssets,
        faction: Faction.evil,
        linkedTo: [],
        available: 1,
        limitedTo: 2
      } as ICard,
      [cardsIds.urukHaiFighter]: {
        id: cardsIds.urukHaiFighter,
        cost: 3,
        effect: "Toughness 2. Returns it to the staging area.",
        description: "Uruk-hai",
        assets: {
          normalPath: require("../assets/cardsBig/urukhaifighter_big.png"),
          miniaturePath: require("../assets/cardsSmall/urukhaifighter_small.png")
        } as ICardAssets,
        faction: Faction.evil,
        linkedTo: ["Hero X", "Hero Y"],
        available: 3,
        limitedTo: 10
      } as ICard,
      [cardsIds.urukLieutenant]: {
        id: cardsIds.urukLieutenant,
        cost: 3,
        effect: "Add an Orc ennemy to the staging area.",
        description: "Uruk",
        assets: {
          normalPath: require("../assets/cardsBig/uruklieutenant_big.png"),
          miniaturePath: require("../assets/cardsSmall/uruklieutenant_small.png")
        } as ICardAssets,
        faction: Faction.evil,
        linkedTo: ["Hero X", "Hero Y"],
        available: 2,
        limitedTo: 10
      } as ICard,
      [cardsIds.urukSoldier]: {
        id: cardsIds.urukSoldier,
        cost: 2,
        effect: "Destroys a character.",
        description: "Uruk-hai",
        assets: {
          normalPath: require("../assets/cardsBig/uruksoldier_big.png"),
          miniaturePath: require("../assets/cardsSmall/uruksoldier_small.png")
        } as ICardAssets,
        faction: Faction.evil,
        linkedTo: ["Hero X", "Hero Y"],
        available: 2,
        limitedTo: 2
      } as ICard,
      [cardsIds.wargs]: {
        id: cardsIds.wargs,
        cost: 3,
        effect: "Return Wargs to the staging area after it attacks.",
        description: "Creature",
        assets: {
          normalPath: require("../assets/cardsBig/wargs_big.png"),
          miniaturePath: require("../assets/cardsSmall/wargs_small.png")
        } as ICardAssets,
        faction: Faction.evil,
        linkedTo: [],
        available: 3,
        limitedTo: 10
      } as ICard,
      [cardsIds.witchKing]: {
        id: cardsIds.witchKing,
        cost: 11,
        effect: "Player cannot play attachments on the Witch-King.",
        description: "Nazgul",
        assets: {
          normalPath: require("../assets/cardsBig/witchking_big.png"),
          miniaturePath: require("../assets/cardsSmall/witchking_small.png")
        } as ICardAssets,
        faction: Faction.evil,
        linkedTo: ["Hero X", "Hero Y"],
        available: 1,
        limitedTo: 1
      } as ICard
    },
    id: "secondPlayer"
  } as IPlayer
};
