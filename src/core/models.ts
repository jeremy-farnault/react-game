// Session

export enum Faction {
  good = "good",
  evil = "evil"
}

// Player

export interface IPlayer {
  id: string
  cards: ICards
  heroes: IHeroesBattlefield
}

// Tiles

export interface ITile {
  columnIndex: number
  lineIndex: number
  posX: number
  posY: number
  state: TileState
  uuid: string
}

export enum TileState {
  empty = "empty",
  idleHero = "idleHero",
  heroAttack = "heroAttack",
  heroAttackArmor = "heroAttackArmor",
  heroDead = "heroDead",
  heroDeadMovement = "heroDeadMovement",
  heroDefense = "heroDefense",
  heroMagic = "heroMagic",
  heroMovement = "heroMovement",
  heroRangedAttack = "heroRangedAttack"
}

export enum ITileStateToHeroBattlefieldState {
  idleHero = "idle",
  heroAttack = "attacked",
  heroAttackArmor = "attackedArmor",
  heroDead = "dead",
  heroDeadMovement = "dead",
  heroDefense = "defending",
  heroMagic = "attackedMagic",
  heroMovement = "idle",
  heroRangedAttack = "attackedRanged"
}

export enum TileColors {
  empty = "#2F4F4F",
  idleHero = "rgba(0, 0, 0, 0)",
  heroAttack = "#FF3447",
  heroAttackArmor = "#E5D964",
  heroDead = "rgba(0, 0, 0, 0)",
  heroDeadMovement = "rgba(0, 0, 0, 0)",
  heroDefense = "#929AEC",
  heroMagic = "#8EBEBA",
  heroMovement = "#3CB371",
  heroRangedAttack = "#A37B5E"
}

export enum TileHoverColors {
  empty = "#2F4F4F",
  idleHero = "rgba(0, 0, 0, 0)",
  heroAttack = "#FF707E",
  heroAttackArmor = "#ECE492",
  heroDead = "rgba(0, 0, 0, 0)",
  heroDeadMovement = "rgba(0, 0, 0, 0)",
  heroDefense = "#B2B8F1",
  heroMagic = "#8EBEBA",
  heroMovement = "#98FB98",
  heroRangedAttack = "#BEA28E"
}

export enum TileSize {
  empty = 30,
  idleHero = 45,
  heroAttack = 35,
  heroAttackArmor = 35,
  heroDead = 35,
  heroDeadMovement = 35,
  heroDefense = 35,
  heroMagic = 35,
  heroMovement = 35,
  heroRangedAttack = 35
}

// Heroes

export interface IHeroes {
  [id: string]: IHero
}

export interface IHero {
  assets: IHeroAssets
  characteristics: IHeroCharacteristics
  cost: number
  description: string
  id: string
  skills: IHeroSkill[]
  unique: boolean
}

export interface IHeroesBattlefield {
  [id: string]: IHeroBattlefield
}

export interface IHeroBattlefield extends IHero {
  tileX: number
  tileY: number
  playerId: string
  selected: boolean
  state: IHeroBattlefieldState
  points: {
    currentLifePoints: number
    currentMagicPoints: number
    currentArmorPoints: number
  },
  currentActionPoints: number
}

export enum IHeroBattlefieldState {
  idle = "idle",
  move = "move",
  attacked = "attacked",
  attackedRanged = "attackedRanged",
  attackedArmor = "attackedArmor",
  attackedMagic = "attackedMagic",
  defending = "defending",
  dead = "dead"
}

export enum HeroShadowColors {
  idle = "rgba(0, 0, 0, 0)",
  attacked = "#FF3447",
  attackedArmor = "#E5D964",
  defending = "#929AEC",
  attackedMagic = "#8EBEBA",
  move = "#3CB371",
  attackedRanged = "#A37B5E",
  dead = "rgba(0, 0, 0, 0)"
}

export interface IHeroCharacteristics {
  agility: number
  armor: number
  attack: number
  attackArmor: number
  attackRange: number
  initiative: number
  lifePoints: number
  magic: number
  magicPoints: number
  magicRange: number
  mental: number
  rangedAttack: number
  rangedAttackRange: number
  size: HeroSize
  speed: number
  stamina: number
  strength: number
}

export interface IAsset {
  path: string
  width: number
  height: number
}

export interface IHeroAssets {
  battlefieldPath: IAsset
  miniaturePath: IAsset
  tokenInitPath: IAsset
  tokenPath: IAsset
  deathPath: IAsset
}

export interface IHeroSkill {
  name: string
  iconType: SkillIconType
}

export enum HeroSize {
  small = "S",
  medium = "M",
  large = "L"
}

export enum SkillIconType {
  specialAttack = "specialAttack",
  specialMagic = "specialMagic"
}

export const SkillsIcon = {
  specialAttack: require("../assets/HumbleBundle/Fantasy Badges/Tex_badge_32.png"),
  specialMagic: require("../assets/HumbleBundle/Fantasy Badges/Tex_badge_35.PNG")
};

// Action Buttons

export enum ActionsType {
  heroMovement = "heroMovement",
  heroAttack = "heroAttack",
  heroRangedAttack = "heroRangedAttack",
  heroAttackArmor = "heroAttackArmor",
  heroMagic = "heroMagic",
  heroDefense = "heroDefense"
}

export enum ActionsTypeText {
  heroMovement = "Movement",
  heroAttack = "Attack",
  heroRangedAttack = "Ranged attack",
  heroAttackArmor = "Attack armor",
  heroMagic = "Magic",
  heroDefense = "Defense"
}

export const ActionButtonIcon = {
  heroMovement: require("../assets/HumbleBundle/Loot RPG/ActionLoot_18.png"),
  heroAttack: require("../assets/HumbleBundle/Loot RPG/ActionLoot_10.png"),
  heroRangedAttack: require("../assets/HumbleBundle/Loot RPG/ActionLoot_73.png"),
  heroAttackArmor: require("../assets/HumbleBundle/Loot RPG/ActionLoot_03.png"),
  heroMagic: require("../assets/HumbleBundle/Loot RPG/ActionLoot_113.png"),
  heroDefense: require("../assets/HumbleBundle/Loot RPG/ActionLoot_97.png")
};

export enum ActionCharacteristic {
  heroMovement = "speed",
  heroAttack = "attackRange",
  heroRangedAttack = "rangedAttackRange",
  heroAttackArmor = "attackArmorRange",
  heroMagic = "magicRange",
  heroDefense = "armor"
}

// Cards

export interface ICards {
  [id: string]: ICard
}

export interface ICard {
  assets: ICardAssets
  cost: number
  effect: string
  description: string
  faction: Faction
  id: string
  linkedTo: string[]
  available: number
  limitedTo: number
}

export interface ICardAssets {
  normalPath: string
  miniaturePath: string
}

export interface ICardsBattlefield {
  [playerId: string]: ICardsBattlefieldPlayer
}

export interface ICardsBattlefieldPlayer {
  currentHand: ICard[]
  currentDeck: ICard[]
}

// Characteristics Images

export const IHeroBattlefieldPointsIcon = {
  currentLifePoints: {
    path: require("../assets/HumbleBundle/Potion Icons/t_37.png"),
    size: 30
  },
  currentMagicPoints: {
    path: require("../assets/HumbleBundle/Potion Icons/t_38.png"),
    size: 30
  },
  currentArmorPoints: {
    path: require("../assets/HumbleBundle/Fantasy Icons/ArmorIcons/ArmorIcons_png/transparent/armor/armor_20.PNG"),
    size: 30
  }
};

// Action Points Icons

export const ActionPointsIcon = {
  actionPointFull: {
    path: require("../assets/HumbleBundle/Fantasy Icons/GemsIcons/GemsIcons_png/117.png"),
    size: 40
  },
  actionPointEmpty: {
    path: require("../assets/HumbleBundle/Fantasy Icons/GemsIcons/GemsIcons_png/addons/gems_add_144.png"),
    size: 40
  }
};

// Various Assets

export const VariousAssets = {
  cardBack: {
    path: require("../assets/HumbleBundle/TCG Card Design/lava_style/back/back_lava.png"),
    height: 214
  },
  endTurn: {
    path: require("../assets/HumbleBundle/Fantasy Icons/MagicItems/MagicItems_png/transparent/artifact_12_t.PNG"),
    size: 54,
    text: "End turn"
  },
  castButton: {
    path: require("../assets/HumbleBundle/Fantasy Icons/MagicItems/MagicItems_png/transparent/addons/addons_13_t.png")
  }
};

// UI Assets

export const UIAssets = {
  actionAndDetailsBackground: {
    path: require("../assets/HumbleBundle/GUI/QuestJournal/book/book_cropped.png"),
    height: 260
  },
  actionButtonBackground: {
    path: require("../assets/HumbleBundle/Wooden UI/frame_c_04.png"),
    height: 50
  },
  actionButtonsBackground: {
    path: require("../assets/HumbleBundle/Wooden UI/frame_k_03.png"),
    height: 220
  },
  actionPointsBackground: {
    path: require("../assets/HumbleBundle/GUI/Fantasy_GUI/button_08_frame.png")
  },
  initiativeCurrentHero: {
    path: require('../assets/HumbleBundle/Wooden UI/frame_c_05.png'),
    size: 150
  },
  initiativeOtherHeroes: {
    path: require('../assets/HumbleBundle/Wooden UI/frame_c_03.png'),
    size: 80
  },
  pointsBackground: {
    currentPlayerPath: require("../assets/HumbleBundle/GUI/Fantasy_GUI/banner_01_01.png"),
    enemyPlayerPath: require("../assets/HumbleBundle/GUI/Fantasy_GUI/banner_02_01.png"),
    width: 90
  },
  timerBackground: {
    path: require('../assets/HumbleBundle/GUI/Fantasy_GUI/text_bg_03.png'),
    width: 230
  }
}
