import {
  HeroSize,
  IHero,
  IHeroAssets,
  IHeroCharacteristics,
  IHeroes,
  SkillIconType
} from "../core/models";
import { heroesIds } from "./heroesIds";

export const heroes: IHeroes = {
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
      attackRange: 1,
      initiative: 10,
      lifePoints: 10,
      magic: 0,
      magicPoints: 0,
      magicRange: 0,
      mental: 7,
      range: 8,
      rangedAttack: 6,
      rangedAttackRange: 8,
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
    unique: true
  } as IHero,
  // [heroesIds.arwen]: {
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/arwen.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/arwen.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/arwen.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/arwen.png"),
  //       height: 50,
  //       width: 27
  //     }
  //   } as IHeroAssets,
  //   characteristics: {
  //     speed: 7,
  //     initiative: 7,
  //     lifePoints: 7,
  //     magicPoints: 8,
  //     armor: 5,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 8,
  //     stamina: 6,
  //     strength: 5,
  //     magic: 8,
  //     mental: 8,
  //     attack: 5,
  //     rangedAttack: 0,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 75,
  //   description: "Arwen was the Half-Elven daughter of Elrond and Celebrían.",
  //   id: heroesIds.arwen,
  //   skills: ["Hadhafang", "Athelas"],
  //   skills: [
  //     {
  //       name: "Hadhafang",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   unique: true
  // } as IHero,
  // [heroesIds.balrog]: {
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/balrog.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/balrog.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/balrog.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/balrog.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets,
  //   characteristics: {
  //     speed: 5,
  //     initiative: 5,
  //     lifePoints: 30,
  //     magicPoints: 10,
  //     armor: 10,
  //     range: 0,
  //     size: HeroSize.large,
  //     agility: 4,
  //     stamina: 10,
  //     strength: 10,
  //     magic: 8,
  //     mental: 7,
  //     attack: 12,
  //     rangedAttack: 10,
  //     attackArmor: 4
  //   } as IHeroCharacteristics,
  //   cost: 200,
  //   description:
  //     "The Balrogs were Maiar corrupted by Morgoth during the creation of Arda, who cloaked themselves in shadow and flame.",
  //   id: heroesIds.balrog,
  //   skills: ["Fire whip", "Fire blade"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   unique: false
  // } as IHero,
  // [heroesIds.barrowWight]: {
  //   id: heroesIds.barrowWight,
  //   characteristics: {
  //     speed: 3,
  //     initiative: 3,
  //     lifePoints: 6,
  //     magicPoints: 7,
  //     armor: 3,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 3,
  //     stamina: 4,
  //     strength: 5,
  //     magic: 8,
  //     mental: 8,
  //     attack: 5,
  //     rangedAttack: 0,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 40,
  //   unique: false,
  //   skills: ["Dead hand", "Sleep trap"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "The Barrow-wights were a kind of undead-like creatures, dead bones animated by evil spirits.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/barrow_wight.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/barrow_wight.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/barrow_wight.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/barrow_wight.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.beregond]: {
  //   id: heroesIds.beregond,
  //   characteristics: {
  //     speed: 5,
  //     initiative: 6,
  //     lifePoints: 7,
  //     magicPoints: 0,
  //     armor: 6,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 6,
  //     stamina: 7,
  //     strength: 6,
  //     magic: 0,
  //     mental: 5,
  //     attack: 6,
  //     rangedAttack: 0,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 60,
  //   unique: true,
  //   skills: ["Steward of Gondor", "Sea captain"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description: "Beregond was the twentieth Ruling Steward of Gondor.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/beregond.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/beregond.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/beregond.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/beregond.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.berserker]: {
  //   id: heroesIds.berserker,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 5,
  //     lifePoints: 7,
  //     magicPoints: 0,
  //     armor: 3,
  //     range: 5,
  //     size: HeroSize.medium,
  //     agility: 5,
  //     stamina: 6,
  //     strength: 6,
  //     magic: 0,
  //     mental: 4,
  //     attack: 8,
  //     rangedAttack: 5,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 45,
  //   unique: false,
  //   skills: ["Berserker blade", "Blood rage"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Berserkers of Isengard were of the most powerful Uruk-hai ever to come out of Saruman's pits.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/berserker.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/berserker.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/berserker.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/berserker.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.bilbo]: {
  //   id: heroesIds.bilbo,
  //   characteristics: {
  //     speed: 4,
  //     initiative: 4,
  //     lifePoints: 6,
  //     magicPoints: 0,
  //     armor: 5,
  //     range: 7,
  //     size: HeroSize.small,
  //     agility: 5,
  //     stamina: 5,
  //     strength: 4,
  //     magic: 0,
  //     mental: 7,
  //     attack: 3,
  //     rangedAttack: 3,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 35,
  //   unique: true,
  //   skills: ["Elves friend", "Dwarves friend"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Bilbo was the first Hobbit to become famous in the world at large and one of the few to visit the The Undying Lands.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/bilbo.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/bilbo.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/bilbo.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/bilbo.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.bombadil]: {
  //   id: heroesIds.bombadil,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 10,
  //     lifePoints: 8,
  //     magicPoints: 20,
  //     armor: 2,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 3,
  //     stamina: 6,
  //     strength: 3,
  //     magic: 20,
  //     mental: 20,
  //     attack: 1,
  //     rangedAttack: 0,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 130,
  //   unique: true,
  //   skills: ["Resurrect", "Untouch by evil"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Tom Bombadil was an enigmatic figure that lived throughout the history of Arda.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/bombadil.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/bombadil.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/bombadil.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/bombadil.png"),
  //       height: 50,
  //       width: 37
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.boromir]: {
  //   id: heroesIds.boromir,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 6,
  //     lifePoints: 12,
  //     magicPoints: 0,
  //     armor: 9,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 6,
  //     stamina: 9,
  //     strength: 8,
  //     magic: 0,
  //     mental: 6,
  //     attack: 8,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 95,
  //   unique: true,
  //   skills: ["Horn of Gondor", "Sacrifice"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Boromir was the eldest son of Denethor II, older brother of Faramir.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/boromir.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/boromir.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/boromir.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/boromir.png"),
  //       height: 50,
  //       width: 58
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.caveTroll]: {
  //   id: heroesIds.caveTroll,
  //   characteristics: {
  //     speed: 4,
  //     initiative: 5,
  //     lifePoints: 25,
  //     magicPoints: 0,
  //     armor: 9,
  //     range: 0,
  //     size: HeroSize.large,
  //     agility: 4,
  //     stamina: 8,
  //     strength: 10,
  //     magic: 0,
  //     mental: 3,
  //     attack: 10,
  //     rangedAttack: 0,
  //     attackArmor: 3
  //   } as IHeroCharacteristics,
  //   cost: 150,
  //   unique: false,
  //   skills: ["Spear", "Hard skin"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Cave-trolls are a race of trolls found within the caves of the Misty Mountains.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/cave_troll.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/cave_troll.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/cave_troll.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/cave_troll.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.celeborn]: {
  //   id: heroesIds.celeborn,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 7,
  //     lifePoints: 10,
  //     magicPoints: 9,
  //     armor: 5,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 7,
  //     stamina: 6,
  //     strength: 6,
  //     magic: 9,
  //     mental: 13,
  //     attack: 5,
  //     rangedAttack: 0,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 100,
  //   unique: true,
  //   skills: ["Wisest of all", "Lord of the Galadhrim"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Celeborn was the Lord of Lothlórien. His wife was Galadriel. Celeborn was said to be one of the wisest Elves in Middle-earth.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/celeborn.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/celeborn.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/celeborn.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/celeborn.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.corsairOfUmbar]: {
  //   id: heroesIds.corsairOfUmbar,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 5,
  //     lifePoints: 4,
  //     magicPoints: 0,
  //     armor: 4,
  //     range: 7,
  //     size: HeroSize.medium,
  //     agility: 6,
  //     stamina: 5,
  //     strength: 4,
  //     magic: 0,
  //     mental: 3,
  //     attack: 6,
  //     rangedAttack: 5,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 40,
  //   unique: false,
  //   skills: ["Pirate bow", "Pirate daggers"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "The Corsairs of Umbar were sea-raiders and pirates of the Haven of Umbar.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/corsair_of_umbar.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/corsair_of_umbar.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/corsair_of_umbar.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/corsair_of_umbar.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.denethor]: {
  //   id: heroesIds.denethor,
  //   characteristics: {
  //     speed: 5,
  //     initiative: 5,
  //     lifePoints: 8,
  //     magicPoints: 0,
  //     armor: 8,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 6,
  //     stamina: 7,
  //     strength: 6,
  //     magic: 0,
  //     mental: 5,
  //     attack: 7,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 80,
  //   unique: true,
  //   skills: ["Palantir", "Call of Power"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Denethor II was the twenty-sixth Ruling Steward of Gondor, and father of the War of the Ring heroes Boromir and Faramir.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/denethor.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/denethor.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/denethor.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/denethor.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.easterling]: {
  //   id: heroesIds.easterling,
  //   characteristics: {
  //     speed: 5,
  //     initiative: 5,
  //     lifePoints: 7,
  //     magicPoints: 0,
  //     armor: 5,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 5,
  //     stamina: 5,
  //     strength: 5,
  //     magic: 0,
  //     mental: 4,
  //     attack: 6,
  //     rangedAttack: 0,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 35,
  //   unique: false,
  //   skills: ["Rhûn halberd", "Rhûn armor"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Easterlings were a race of Men who lived in the vast and uncharted lands of Rhûn, east of Mordor and the Sea of Rhûn.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/easterling.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/easterling.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/easterling.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/easterling.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.elendil]: {
  //   id: heroesIds.elendil,
  //   characteristics: {
  //     speed: 7,
  //     initiative: 7,
  //     lifePoints: 9,
  //     magicPoints: 0,
  //     armor: 7,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 6,
  //     stamina: 7,
  //     strength: 6,
  //     magic: 0,
  //     mental: 6,
  //     attack: 7,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 85,
  //   unique: true,
  //   skills: ["Narsil", "Founder of Gondor"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Elendil was the father of Isildur and Anárion, and the first High King of Gondor and Arnor and first King of all the Dúnedain.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/elendil.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/elendil.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/elendil.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/elendil.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.elrond]: {
  //   id: heroesIds.elrond,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 6,
  //     lifePoints: 10,
  //     magicPoints: 8,
  //     armor: 5,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 8,
  //     stamina: 7,
  //     strength: 5,
  //     magic: 8,
  //     mental: 8,
  //     attack: 5,
  //     rangedAttack: 0,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 80,
  //   unique: true,
  //   skills: ["Water horses", "Science of healing"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Elrond was the Lord of Rivendell and keeper of the great elven ring Vilya.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/elrond.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/elrond.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/elrond.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/elrond.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.eomer]: {
  //   id: heroesIds.eomer,
  //   characteristics: {
  //     speed: 7,
  //     initiative: 6,
  //     lifePoints: 9,
  //     magicPoints: 0,
  //     armor: 7,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 7,
  //     stamina: 7,
  //     strength: 8,
  //     magic: 0,
  //     mental: 6,
  //     attack: 7,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 90,
  //   unique: true,
  //   skills: ["Master of horses", "We ride north"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Éomer Éadig, of the House of Eorl, was the eighteenth King of Rohan, and first of the Third Line.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/eomer.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/eomer.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/eomer.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/eomer.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.eowyn]: {
  //   id: heroesIds.eowyn,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 7,
  //     lifePoints: 7,
  //     magicPoints: 0,
  //     armor: 6,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 7,
  //     stamina: 6,
  //     strength: 7,
  //     magic: 0,
  //     mental: 6,
  //     attack: 7,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 65,
  //   unique: true,
  //   skills: ["Lady of Rohan", "For my king"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Éowyn, the Lady of Rohan, was also known as the Lady of the Shield-arm, the White Lady of Rohan, and Lady of Ithilien.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/eowyn.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/eowyn.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/eowyn.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/eowyn.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.faramir]: {
  //   id: heroesIds.faramir,
  //   characteristics: {
  //     speed: 7,
  //     initiative: 7,
  //     lifePoints: 8,
  //     magicPoints: 0,
  //     armor: 6,
  //     range: 8,
  //     size: HeroSize.medium,
  //     agility: 7,
  //     stamina: 7,
  //     strength: 7,
  //     magic: 0,
  //     mental: 7,
  //     attack: 7,
  //     rangedAttack: 6,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 85,
  //   unique: true,
  //   skills: ["Ranger leader", "Righteous"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Faramir was the last Ruling Steward of Gondor and the first Prince of Ithilien. The second of Denethor's two sons.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/faramir.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/faramir.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/faramir.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/faramir.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.frodo]: {
  //   id: heroesIds.frodo,
  //   characteristics: {
  //     speed: 4,
  //     initiative: 4,
  //     lifePoints: 5,
  //     magicPoints: 0,
  //     armor: 7,
  //     range: 5,
  //     size: HeroSize.small,
  //     agility: 8,
  //     stamina: 5,
  //     strength: 4,
  //     magic: 0,
  //     mental: 7,
  //     attack: 5,
  //     rangedAttack: 3,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 40,
  //   unique: true,
  //   skills: ["Light of Earendil", "Invisibility"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Frodo Baggins was a hobbit of the Third Age, the most famous of all Hobbits in the histories for his leading role in the Quest of the Ring.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/frodo.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/frodo.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/frodo.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/frodo.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.galadriel]: {
  //   id: heroesIds.galadriel,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 7,
  //     lifePoints: 10,
  //     magicPoints: 10,
  //     armor: 5,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 7,
  //     stamina: 6,
  //     strength: 6,
  //     magic: 10,
  //     mental: 9,
  //     attack: 5,
  //     rangedAttack: 0,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 110,
  //   unique: true,
  //   skills: ["Dark queen", "Nenya"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Galadriel was a Noldo, one of the Calaquendi, and arguably the most famous and powerful elf of the Third Age.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/galadriel.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/galadriel.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/galadriel.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/galadriel.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.gandalf]: {
  //   id: heroesIds.gandalf,
  //   characteristics: {
  //     speed: 8,
  //     initiative: 8,
  //     lifePoints: 15,
  //     magicPoints: 15,
  //     armor: 5,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 5,
  //     stamina: 8,
  //     strength: 7,
  //     magic: 15,
  //     mental: 12,
  //     attack: 8,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 160,
  //   unique: true,
  //   skills: ["You shall not pass", "Shock Wave"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Gandalf was one of the five Istari sent to Middle-earth by the Valar in the Third Age. In Valinor he was known as Olórin.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/gandalf.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/gandalf.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/gandalf.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/gandalf.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.gilGalad]: {
  //   id: heroesIds.gilGalad,
  //   characteristics: {
  //     speed: 12,
  //     initiative: 12,
  //     lifePoints: 16,
  //     magicPoints: 10,
  //     armor: 8,
  //     range: 2,
  //     size: HeroSize.medium,
  //     agility: 12,
  //     stamina: 8,
  //     strength: 8,
  //     magic: 8,
  //     mental: 7,
  //     attack: 10,
  //     rangedAttack: 10,
  //     attackArmor: 3
  //   } as IHeroCharacteristics,
  //   cost: 200,
  //   unique: true,
  //   skills: ["Aeglos", "Narya and Vilya"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Gil-galad was a Ñoldorin Elf, last High King of the Ñoldor in Middle-earth and bore many titles.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/gil-galad.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/gil-galad.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/gil-galad.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/gil-galad.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.gimli]: {
  //   id: heroesIds.gimli,
  //   characteristics: {
  //     speed: 3,
  //     initiative: 4,
  //     lifePoints: 20,
  //     magicPoints: 0,
  //     armor: 15,
  //     range: 3,
  //     size: HeroSize.small,
  //     agility: 2,
  //     stamina: 9,
  //     strength: 8,
  //     magic: 0,
  //     mental: 4,
  //     attack: 8,
  //     rangedAttack: 6,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 90,
  //   unique: true,
  //   skills: ["Wall of steel", "Not the beard"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Gimli was a dwarf of Durin's Folk, a direct descendant of Durin the Deathless.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/gimli.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/gimli.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/gimli.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/gimli.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.gloin]: {
  //   id: heroesIds.gloin,
  //   characteristics: {
  //     speed: 3,
  //     initiative: 4,
  //     lifePoints: 18,
  //     magicPoints: 0,
  //     armor: 13,
  //     range: 0,
  //     size: HeroSize.small,
  //     agility: 2,
  //     stamina: 8,
  //     strength: 8,
  //     magic: 0,
  //     mental: 4,
  //     attack: 7,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 80,
  //   unique: true,
  //   skills: ["", ""],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Glóin was one of the dwarves of Thorin II Oakenshield's company and was the father of Gimli",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/gloin.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/gloin.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/gloin.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/gloin.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.glorfindel]: {
  //   id: heroesIds.glorfindel,
  //   characteristics: {
  //     speed: 11,
  //     initiative: 11,
  //     lifePoints: 12,
  //     magicPoints: 0,
  //     armor: 8,
  //     range: 10,
  //     size: HeroSize.medium,
  //     agility: 10,
  //     stamina: 8,
  //     strength: 6,
  //     magic: 0,
  //     mental: 6,
  //     attack: 8,
  //     rangedAttack: 8,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 150,
  //   unique: true,
  //   skills: ["Balrog killer", "Firstborn"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Glorfindel was one of the mighty of the Firstborn, and the Lord of the House of the Golden Flower in Gondolin.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/glorfindel.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/glorfindel.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/glorfindel.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/glorfindel.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.gollum]: {
  //   id: heroesIds.gollum,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 6,
  //     lifePoints: 6,
  //     magicPoints: 0,
  //     armor: 3,
  //     range: 0,
  //     size: HeroSize.small,
  //     agility: 6,
  //     stamina: 4,
  //     strength: 6,
  //     magic: 0,
  //     mental: 4,
  //     attack: 7,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 40,
  //   unique: true,
  //   skills: ["My precious", "Filthy little Hobbitses"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Gollum, also known as Sméagol, was a creature who bore the One Ring. He lived in the Misty Mountains for most of his life.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/gollum.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/gollum.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/gollum.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/gollum.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.gondorianRanger]: {
  //   id: heroesIds.gondorianRanger,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 6,
  //     lifePoints: 7,
  //     magicPoints: 0,
  //     armor: 6,
  //     range: 6,
  //     size: HeroSize.medium,
  //     agility: 5,
  //     stamina: 5,
  //     strength: 5,
  //     magic: 0,
  //     mental: 4,
  //     attack: 6,
  //     rangedAttack: 6,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 45,
  //   unique: false,
  //   skills: ["Gondorian bow", "Gondorian blade"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "The Rangers of Ithilien were a military group whose purpose was to defend Ithilien, the gate to Minas Tirith.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/gondorian_ranger.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/gondorian_ranger.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/gondorian_ranger.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/gondorian_ranger.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.gondorianSoldier]: {
  //   id: heroesIds.gondorianSoldier,
  //   characteristics: {
  //     speed: 5,
  //     initiative: 5,
  //     lifePoints: 8,
  //     magicPoints: 0,
  //     armor: 7,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 5,
  //     stamina: 6,
  //     strength: 6,
  //     magic: 0,
  //     mental: 5,
  //     attack: 6,
  //     rangedAttack: 0,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 45,
  //   unique: false,
  //   skills: ["Gondorian blade", "Gondorian armor"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description: "Gondorians were descended from the Númenórean colonists.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/gondorian_soldier.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/gondorian_soldier.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/gondorian_soldier.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/gondorian_soldier.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.gothmog]: {
  //   id: heroesIds.gothmog,
  //   characteristics: {
  //     speed: 5,
  //     initiative: 5,
  //     lifePoints: 9,
  //     magicPoints: 0,
  //     armor: 8,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 5,
  //     stamina: 7,
  //     strength: 9,
  //     magic: 0,
  //     mental: 5,
  //     attack: 9,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 90,
  //   unique: true,
  //   skills: ["Mace", "Time of the Orc"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Gothmog was the lieutenant of the Witch-king in the Third Age, from Minas Morgul, notably at the Battle of the Pelennor Fields.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/gothmog.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/gothmog.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/gothmog.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/gothmog.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.grima]: {
  //   id: heroesIds.grima,
  //   characteristics: {
  //     speed: 3,
  //     initiative: 4,
  //     lifePoints: 5,
  //     magicPoints: 0,
  //     armor: 2,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 4,
  //     stamina: 4,
  //     strength: 3,
  //     magic: 0,
  //     mental: 4,
  //     attack: 4,
  //     rangedAttack: 0,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 25,
  //   unique: true,
  //   skills: ["Switch sides", "Ill advisor"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Gríma Wormtongue was the chief advisor to King Théoden of Rohan. He was the son of Gálmód.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/grima.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/grima.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/grima.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/grima.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.grishnakh]: {
  //   id: heroesIds.grishnakh,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 6,
  //     lifePoints: 5,
  //     magicPoints: 0,
  //     armor: 5,
  //     range: 0,
  //     size: HeroSize.small,
  //     agility: 5,
  //     stamina: 5,
  //     strength: 5,
  //     magic: 0,
  //     mental: 5,
  //     attack: 4,
  //     rangedAttack: 0,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 45,
  //   unique: true,
  //   skills: ["Long arms", "Back to Lugburz"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description: "Grishnákh was a captain of Orcs from Mordor.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/grishnakh.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/grishnakh.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/grishnakh.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/grishnakh.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.guardOfTheCitadel]: {
  //   id: heroesIds.guardOfTheCitadel,
  //   characteristics: {
  //     speed: 5,
  //     initiative: 5,
  //     lifePoints: 8,
  //     magicPoints: 0,
  //     armor: 8,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 5,
  //     stamina: 6,
  //     strength: 6,
  //     magic: 0,
  //     mental: 5,
  //     attack: 7,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 55,
  //   unique: false,
  //   skills: ["Gondorian spear", "Black steel armor"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "The Guards of the Citadel, sometimes referred to as The Tower Guards, were an elite unit of soldiers in Gondor.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/citadel_guard.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/citadel_guard.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/citadel_guard.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/citadel_guard.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.hama]: {
  //   id: heroesIds.hama,
  //   characteristics: {
  //     speed: 7,
  //     initiative: 6,
  //     lifePoints: 7,
  //     magicPoints: 0,
  //     armor: 6,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 6,
  //     stamina: 7,
  //     strength: 6,
  //     magic: 0,
  //     mental: 5,
  //     attack: 7,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 55,
  //   unique: true,
  //   skills: ["Doorwald", "Captain of the Guard"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Háma was a Man of Rohan and the doorward of the Meduseld and captain of Théoden's guard.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/hama.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/hama.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/hama.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/hama.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.haldir]: {
  //   id: heroesIds.haldir,
  //   characteristics: {
  //     speed: 7,
  //     initiative: 7,
  //     lifePoints: 7,
  //     magicPoints: 0,
  //     armor: 6,
  //     range: 8,
  //     size: HeroSize.medium,
  //     agility: 7,
  //     stamina: 6,
  //     strength: 6,
  //     magic: 0,
  //     mental: 6,
  //     attack: 7,
  //     rangedAttack: 7,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 70,
  //   unique: true,
  //   skills: ["Rapid fire", "Watcher"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Haldir was an Elf of Lothlórien, probably a Silvan Elf, and a marchwarden who guarded the forest's northern borders.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/haldir.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/haldir.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/haldir.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/haldir.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.haradrimWarrior]: {
  //   id: heroesIds.haradrimWarrior,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 4,
  //     lifePoints: 6,
  //     magicPoints: 0,
  //     armor: 5,
  //     range: 6,
  //     size: HeroSize.medium,
  //     agility: 5,
  //     stamina: 6,
  //     strength: 6,
  //     magic: 0,
  //     mental: 5,
  //     attack: 5,
  //     rangedAttack: 5,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 35,
  //   unique: false,
  //   skills: ["Harad bow", "Mumakil teamer"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "The Haradrim or the Southrons were the proud and warlike people of the Harad, in the south of Middle-earth.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/haradrim_warrior.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/haradrim_warrior.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/haradrim_warrior.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/haradrim_warrior.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.imrahil]: {
  //   id: heroesIds.imrahil,
  //   characteristics: {
  //     speed: 5,
  //     initiative: 5,
  //     lifePoints: 7,
  //     magicPoints: 0,
  //     armor: 7,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 5,
  //     stamina: 7,
  //     strength: 7,
  //     magic: 0,
  //     mental: 5,
  //     attack: 7,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 75,
  //   unique: true,
  //   skills: ["Desperate Charge", "Prince Imrahil"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Imrahil, also known as Prince Imrahil, was the twenty-second Prince of Dol Amroth.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/imrahil.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/imrahil.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/imrahil.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/imrahil.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.isildur]: {
  //   id: heroesIds.isildur,
  //   characteristics: {
  //     speed: 7,
  //     initiative: 7,
  //     lifePoints: 8,
  //     magicPoints: 0,
  //     armor: 7,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 6,
  //     stamina: 7,
  //     strength: 7,
  //     magic: 0,
  //     mental: 4,
  //     attack: 8,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 90,
  //   unique: true,
  //   skills: ["Shards of Narsil", "Corruption of the Ring"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Isildur was the son of Elendil and the High King of Gondor and Arnor",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/isildur.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/isildur.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/isildur.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/isildur.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.kingOfTheDead]: {
  //   id: heroesIds.kingOfTheDead,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 5,
  //     lifePoints: 10,
  //     magicPoints: 0,
  //     armor: 7,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 6,
  //     stamina: 6,
  //     strength: 5,
  //     magic: 0,
  //     mental: 6,
  //     attack: 7,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 60,
  //   unique: true,
  //   skills: ["Oathbreaker", "Swarm"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "The King of the Mountains, or later, the King of the Dead, was the ruler of the Oathbreakers.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/king_of_the_dead.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/king_of_the_dead.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/king_of_the_dead.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/king_of_the_dead.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.legolas]: {
  //   id: heroesIds.legolas,
  //   characteristics: {
  //     speed: 9,
  //     initiative: 9,
  //     lifePoints: 7,
  //     magicPoints: 0,
  //     armor: 6,
  //     range: 10,
  //     size: HeroSize.medium,
  //     agility: 9,
  //     stamina: 8,
  //     strength: 5,
  //     magic: 0,
  //     mental: 6,
  //     attack: 8,
  //     rangedAttack: 9,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 120,
  //   unique: true,
  //   skills: ["Double Arrow", "Mortal knife dance"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Legolas was an elf of the Woodland Realm of Mirkwood. He was of Sindarin heritage, being the only recorded son of King Thranduil.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/legolas.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/legolas.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/legolas.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/legolas.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.lothlorienElf]: {
  //   id: heroesIds.lothlorienElf,
  //   characteristics: {
  //     speed: 7,
  //     initiative: 6,
  //     lifePoints: 6,
  //     magicPoints: 0,
  //     armor: 6,
  //     range: 7,
  //     size: HeroSize.medium,
  //     agility: 7,
  //     stamina: 5,
  //     strength: 5,
  //     magic: 0,
  //     mental: 5,
  //     attack: 6,
  //     rangedAttack: 5,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 60,
  //   unique: false,
  //   skills: ["Elven bow", "Elven blade"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Lothlórien was a forest located next to the lower Misty Mountains.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/lothlorien_elf.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/lothlorien_elf.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/lothlorien_elf.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/lothlorien_elf.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.lurtz]: {
  //   id: heroesIds.lurtz,
  //   characteristics: {
  //     speed: 7,
  //     initiative: 7,
  //     lifePoints: 8,
  //     magicPoints: 0,
  //     armor: 7,
  //     range: 8,
  //     size: HeroSize.medium,
  //     agility: 7,
  //     stamina: 7,
  //     strength: 7,
  //     magic: 0,
  //     mental: 5,
  //     attack: 8,
  //     rangedAttack: 8,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 95,
  //   unique: true,
  //   skills: ["Isengard bow", "Born in blood"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Lurtz was the first of Saruman's Uruk-hai to be bred, and led them into battle against the Fellowship of the Ring at Amon Hen.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/lurtz.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/lurtz.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/lurtz.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/lurtz.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.meriadoc]: {
  //   id: heroesIds.meriadoc,
  //   characteristics: {
  //     speed: 4,
  //     initiative: 6,
  //     lifePoints: 5,
  //     magicPoints: 0,
  //     armor: 3,
  //     range: 6,
  //     size: HeroSize.small,
  //     agility: 6,
  //     stamina: 5,
  //     strength: 5,
  //     magic: 0,
  //     mental: 6,
  //     attack: 6,
  //     rangedAttack: 3,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 35,
  //   unique: true,
  //   skills: ["Rock Throwing", "Esquire of Rohan"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Meriadoc Brandybuck, called The Magnificent, was a Hobbit, the son of Saradoc Brandybuck. Merry was the heir of the Brandybucks to Brandy Hall.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/meriadoc.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/meriadoc.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/meriadoc.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/meriadoc.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.mordorOrc]: {
  //   id: heroesIds.mordorOrc,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 4,
  //     lifePoints: 4,
  //     magicPoints: 0,
  //     armor: 4,
  //     range: 0,
  //     size: HeroSize.small,
  //     agility: 5,
  //     stamina: 4,
  //     strength: 4,
  //     magic: 0,
  //     mental: 4,
  //     attack: 4,
  //     rangedAttack: 0,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 30,
  //   unique: false,
  //   skills: ["Mordor blade", "Mordor armor"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Many Orcs survived in the deep caves, pits, chambers, and tunnels of Melkor's great underground fortresses of Utumno and Angband.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/mordor_orc.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/mordor_orc.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/mordor_orc.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/mordor_orc.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.moriaOrc]: {
  //   id: heroesIds.moriaOrc,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 6,
  //     lifePoints: 4,
  //     magicPoints: 0,
  //     armor: 3,
  //     range: 6,
  //     size: HeroSize.small,
  //     agility: 6,
  //     stamina: 4,
  //     strength: 3,
  //     magic: 0,
  //     mental: 4,
  //     attack: 4,
  //     rangedAttack: 4,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 30,
  //   unique: false,
  //   skills: ["Moria blade", "Moria bow"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Moria Orcs were similar to other Orcs of the Misty Mountains.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/moria_orc.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/moria_orc.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/moria_orc.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/moria_orc.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.mouthOfSauron]: {
  //   id: heroesIds.mouthOfSauron,
  //   characteristics: {
  //     speed: 5,
  //     initiative: 5,
  //     lifePoints: 6,
  //     magicPoints: 7,
  //     armor: 6,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 4,
  //     stamina: 6,
  //     strength: 6,
  //     magic: 6,
  //     mental: 6,
  //     attack: 5,
  //     rangedAttack: 0,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 70,
  //   unique: true,
  //   skills: ["My master bid thee welcome", "Blind servant"],
  //
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "The Mouth of Sauron was the Dark Lord Sauron's servant and representative at the end of the Third Age.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/mouth_of_sauron.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/mouth_of_sauron.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/mouth_of_sauron.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/mouth_of_sauron.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.peregrin]: {
  //   id: heroesIds.peregrin,
  //   characteristics: {
  //     speed: 4,
  //     initiative: 6,
  //     lifePoints: 5,
  //     magicPoints: 0,
  //     armor: 3,
  //     range: 6,
  //     size: HeroSize.small,
  //     agility: 6,
  //     stamina: 5,
  //     strength: 5,
  //     magic: 0,
  //     mental: 6,
  //     attack: 6,
  //     rangedAttack: 3,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 35,
  //   unique: true,
  //   skills: ["Rock Throwing", "Guardian of the Citadel"],
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Peregrin Took was one of the Hobbits in the Fellowship of the Ring. He was the youngest of the Company.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/peregrin.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/peregrin.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/peregrin.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/peregrin.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.nazgul]: {
  //   id: heroesIds.nazgul,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 7,
  //     lifePoints: 12,
  //     magicPoints: 5,
  //     armor: 5,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 6,
  //     stamina: 7,
  //     strength: 7,
  //     magic: 5,
  //     mental: 6,
  //     attack: 6,
  //     rangedAttack: 0,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 90,
  //   unique: false,
  //   skills: ["Morgul blade", "Despair"],
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "The Nazgûl, also known as the Nine Riders or Black Riders (or simply the Nine), were Sauron's most terrible servants in Middle-earth.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/nazgul.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/nazgul.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/nazgul.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/nazgul.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.radagast]: {
  //   id: heroesIds.radagast,
  //   characteristics: {
  //     speed: 8,
  //     initiative: 7,
  //     lifePoints: 10,
  //     magicPoints: 11,
  //     armor: 5,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 5,
  //     stamina: 7,
  //     strength: 6,
  //     magic: 14,
  //     mental: 12,
  //     attack: 7,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 130,
  //   unique: true,
  //   skills: ["Powers of the Maiar", "Animals friend"],
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Radagast was one of the five Wizards, or Istari. He was a good friend of Gandalf the Grey, whom he aided occasionally.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/radagast.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/radagast.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/radagast.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/radagast.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.rohirrimSoldier]: {
  //   id: heroesIds.rohirrimSoldier,
  //   characteristics: {
  //     speed: 5,
  //     initiative: 5,
  //     lifePoints: 8,
  //     magicPoints: 0,
  //     armor: 6,
  //     range: 4,
  //     size: HeroSize.medium,
  //     agility: 5,
  //     stamina: 6,
  //     strength: 6,
  //     magic: 0,
  //     mental: 4,
  //     attack: 6,
  //     rangedAttack: 4,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 40,
  //   unique: false,
  //   skills: ["Rohan spear", "Rohan blade"],
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "The Rohirrim were a race of people who inhabited the land of Rohan, which was named after their famous Horses.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/rohirrim_soldier.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/rohirrim_soldier.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/rohirrim_soldier.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/rohirrim_soldier.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.samwise]: {
  //   id: heroesIds.samwise,
  //   characteristics: {
  //     speed: 4,
  //     initiative: 4,
  //     lifePoints: 5,
  //     magicPoints: 0,
  //     armor: 3,
  //     range: 5,
  //     size: HeroSize.small,
  //     agility: 7,
  //     stamina: 5,
  //     strength: 6,
  //     magic: 0,
  //     mental: 8,
  //     attack: 5,
  //     rangedAttack: 3,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 40,
  //   unique: true,
  //   skills: ["But I can carry you", "Great courage"],
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Samwise was Frodo servant and the only member of the fellowship to remain with him till the very end of the journey to Mount Doom.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/samwise.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/samwise.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/samwise.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/samwise.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.saruman]: {
  //   id: heroesIds.saruman,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 6,
  //     lifePoints: 15,
  //     magicPoints: 18,
  //     armor: 5,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 5,
  //     stamina: 7,
  //     strength: 7,
  //     magic: 17,
  //     mental: 13,
  //     attack: 7,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 170,
  //   unique: true,
  //   skills: ["Persuasive voice", "Elements control"],
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Saruman the White was the first of the order of Wizards (or Istari) who came to Middle-earth as Emissaries of the Valar in the Third Age.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/saruman.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/saruman.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/saruman.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/saruman.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.sauron]: {
  //   id: heroesIds.sauron,
  //   characteristics: {
  //     speed: 7,
  //     initiative: 7,
  //     lifePoints: 15,
  //     magicPoints: 15,
  //     armor: 12,
  //     range: 0,
  //     size: HeroSize.large,
  //     agility: 7,
  //     stamina: 9,
  //     strength: 9,
  //     magic: 10,
  //     mental: 12,
  //     attack: 9,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 180,
  //   unique: true,
  //   skills: ["One ring to rule them all", "And in the darkness bind them"],
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Sauron was the greatest and most trusted servant of Morgoth before and during the First Age.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/sauron.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/sauron.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/sauron.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/sauron.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.shagrat]: {
  //   id: heroesIds.shagrat,
  //   characteristics: {
  //     speed: 6,
  //     initiative: 5,
  //     lifePoints: 5,
  //     magicPoints: 0,
  //     armor: 5,
  //     range: 0,
  //     size: HeroSize.small,
  //     agility: 5,
  //     stamina: 5,
  //     strength: 5,
  //     magic: 0,
  //     mental: 5,
  //     attack: 5,
  //     rangedAttack: 0,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 45,
  //   unique: true,
  //   skills: ["Tower captain", "Morgul rats"],
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Shagrat was an Uruk commanding the garrison of the Tower of Cirith Ungol during the War of the Ring.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/shagrat.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/shagrat.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/shagrat.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/shagrat.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.soldierOfTheDead]: {
  //   id: heroesIds.soldierOfTheDead,
  //   characteristics: {
  //     speed: 5,
  //     initiative: 5,
  //     lifePoints: 8,
  //     magicPoints: 0,
  //     armor: 6,
  //     range: 4,
  //     size: HeroSize.medium,
  //     agility: 5,
  //     stamina: 6,
  //     strength: 6,
  //     magic: 0,
  //     mental: 4,
  //     attack: 6,
  //     rangedAttack: 2,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 40,
  //   unique: false,
  //   skills: ["Fantomatic blade", "Fantomatic spear"],
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "The Army of the Dead, also known as the Dead Men of Dunharrow or Oathbreakers, were the ghosts of deceased Men of the White Mountains.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/soldier_of_the_dead.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/soldier_of_the_dead.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/soldier_of_the_dead.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/soldier_of_the_dead.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.theoden]: {
  //   id: heroesIds.theoden,
  //   characteristics: {
  //     speed: 7,
  //     initiative: 6,
  //     lifePoints: 8,
  //     magicPoints: 0,
  //     armor: 7,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 6,
  //     stamina: 7,
  //     strength: 6,
  //     magic: 0,
  //     mental: 4,
  //     attack: 7,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 60,
  //   unique: true,
  //   skills: ["Death", "Charge"],
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "Théoden was the seventeenth King of Rohan. He was the last of the Second Line.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/theoden.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/theoden.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/theoden.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/theoden.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.urukHai]: {
  //   id: heroesIds.urukHai,
  //   characteristics: {
  //     speed: 7,
  //     initiative: 6,
  //     lifePoints: 7,
  //     magicPoints: 0,
  //     armor: 7,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 6,
  //     stamina: 7,
  //     strength: 6,
  //     magic: 0,
  //     mental: 4,
  //     attack: 6,
  //     rangedAttack: 0,
  //     attackArmor: 1
  //   } as IHeroCharacteristics,
  //   cost: 65,
  //   unique: false,
  //   skills: ["Isengard blade", "Isengard armor"],
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "The Uruk-hai were a new breed of Orcs that appeared during the Third Age.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/uruk_hai.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/uruk_hai.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/uruk_hai.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/uruk_hai.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero,
  // [heroesIds.witchKing]: {
  //   id: heroesIds.witchKing,
  //   characteristics: {
  //     speed: 7,
  //     initiative: 8,
  //     lifePoints: 17,
  //     magicPoints: 10,
  //     armor: 6,
  //     range: 0,
  //     size: HeroSize.medium,
  //     agility: 6,
  //     stamina: 7,
  //     strength: 7,
  //     magic: 10,
  //     mental: 10,
  //     attack: 7,
  //     rangedAttack: 0,
  //     attackArmor: 2
  //   } as IHeroCharacteristics,
  //   cost: 130,
  //   unique: true,
  //   skills: [
  //     {
  //       name: "Master of the Nine",
  //       iconType: SkillIconType.specialAttack
  //     },
  //     {
  //       name: "Hideous flail",
  //       iconType: SkillIconType.specialMagic
  //     }
  //   ],
  //   description:
  //     "The Witch-king of Angmar was the chief of the Nazgûl, King of Angmar and Sauron’s great captain in his wars.",
  //   assets: {
  //     tokenPath: {
  //       path: require("../assets/heroesTokens/witch_king.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     miniaturePath: {
  //       path: require("../assets/heroesMiniatures/witch_king.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     tokenInitPath: {
  //       path: require("../assets/heroesTokensInit/witch_king.png"),
  //       height: 50,
  //       width: 50
  //     },
  //     battlefieldPath: {
  //       path: require("../assets/heroesBattlefield/witch_king.png"),
  //       height: 50,
  //       width: 50
  //     }
  //   } as IHeroAssets
  // } as IHero
};
