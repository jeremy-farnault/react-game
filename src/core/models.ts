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
  heroDefense = "heroDefense",
  heroMagic = "heroMagic",
  heroMovement = "heroMovement",
  heroRangedAttack = "heroRangedAttack",
  heroDead = "heroDead"
}

export enum ITileStateToHeroBattlefieldState {
  idleHero = "idle",
  heroAttack = "attacked",
  heroAttackArmor = "attackedArmor",
  heroDefense = "defending",
  heroMagic = "attackedMagic",
  heroMovement = "idle",
  heroRangedAttack = "attackedRanged",
  heroDead = "dead"
}

export enum TileColors {
  empty = "#2F4F4F",
  idleHero = "rgba(0, 0, 0, 0)",
  heroAttack = "#FF3447",
  heroAttackArmor = "#E5D964",
  heroDefense = "#929AEC",
  heroMagic = "#8EBEBA",
  heroMovement = "#3CB371",
  heroRangedAttack = "#A37B5E",
  heroDead = "rgba(0, 0, 0, 0)"
}

export enum TileHoverColors {
  empty = "#2F4F4F",
  idleHero = "rgba(0, 0, 0, 0)",
  heroAttack = "#FF707E",
  heroAttackArmor = "#ECE492",
  heroDefense = "#B2B8F1",
  heroMagic = "#8EBEBA",
  heroMovement = "#98FB98",
  heroRangedAttack = "#BEA28E",
  heroDead = "rgba(0, 0, 0, 0)"
}

export enum TileSize {
  empty = 25,
  idleHero = 40,
  heroAttack = 30,
  heroAttackArmor = 30,
  heroDefense = 30,
  heroMagic = 30,
  heroMovement = 30,
  heroRangedAttack = 30,
  heroDead = 40
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
  specialAttack: require("../assets/skillTokens/weapon_skill.png"),
  specialMagic: require("../assets/skillTokens/magic_skill.png")
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
  heroMovement: require("../assets/actionsTokens/movement_action.png"),
  heroAttack: require("../assets/actionsTokens/attack_action.png"),
  heroRangedAttack: require("../assets/actionsTokens/ranged_attack_action.png"),
  heroAttackArmor: require("../assets/actionsTokens/attack_armor_action.png"),
  heroMagic: require("../assets/actionsTokens/magic_action.png"),
  heroDefense: require("../assets/actionsTokens/defense_action.png")
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
    path: require("../assets/descriptionTokens/life_points.png"),
    size: 30
  },
  currentMagicPoints: {
    path: require("../assets/descriptionTokens/magic_points.png"),
    size: 30
  },
  currentArmorPoints: {
    path: require("../assets/descriptionTokens/armor_points.png"),
    size: 30
  }
};

// Action Points Icons

export const ActionPointsIcon = {
  actionPointFull: {
    path: require("../assets/various/action_point_unused.png"),
    size: 40
  },
  actionPointEmpty: {
    path: require("../assets/various/action_point_used.png"),
    size: 40
  }
};

// Various Assets

export const VariousAssets = {
  cardBack: {
    path: require("../assets/various/cards_back.png"),
    height: 264
  },
  endTurn: {
    path: require("../assets/various/hourglass_end_turn.png"),
    size: 54,
    text: "End turn"
  }
};
