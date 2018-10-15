// Session

export enum Faction {
  good = 'good',
  evil = 'evil'
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
  empty,
  idleHero,
  heroAttack,
  heroAttackArmor,
  heroDefense,
  heroMagic,
  heroMovement,
  heroRangedAttack
}

export enum TileColors {
  empty = '#2F4F4F',
  idleHero = 'rgba(0, 0, 0, 0)',
  heroAttack = '#FF3447',
  heroAttackArmor = '#E5D964',
  heroDefense = '#929AEC',
  heroMagic = '#8EBEBA',
  heroMovement = '#3CB371',
  heroRangedAttack = '#A37B5E'
}

export enum TileHoverColors {
  empty = '#2F4F4F',
  idleHero = 'rgba(0, 0, 0, 0)',
  heroAttack = '#FF707E',
  heroAttackArmor = '#ECE492',
  heroDefense = '#B2B8F1',
  heroMagic = '#8EBEBA',
  heroMovement = '#98FB98',
  heroRangedAttack = '#BEA28E'
}

export enum TileSize {
  empty = 25,
  idleHero = 40,
  heroAttack = 30,
  heroAttackArmor = 30,
  heroDefense = 30,
  heroMagic = 30,
  heroMovement = 30,
  heroRangedAttack = 30
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
  skills: string[]
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
  }
}

export enum IHeroBattlefieldState {
  idle,
  move
}

export interface IHeroCharacteristics {
  agility: number
  armor: number
  attack: number
  attackArmor: number
  initiative: number
  lifePoints: number
  magic: number
  magicPoints: number
  mental: number
  range: number
  rangedAttack: number
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
}

export enum HeroSize {
  small = 'S',
  medium = 'M',
  large = 'L'
}

// Action Buttons

export enum ActionsType {
  heroMovement = 'heroMovement',
  heroAttack = 'heroAttack',
  heroRangedAttack = 'heroRangedAttack',
  heroAttackArmor = 'heroAttackArmor',
  heroMagic = 'heroMagic',
  heroDefense = 'heroDefense'
}

export const ActionButtonIcon = {
  heroMovement: require("../assets/actionsTokens/movement_action.png"),
  heroAttack: require("../assets/actionsTokens/attack_action.png"),
  heroRangedAttack: require("../assets/actionsTokens/ranged_attack_action.png"),
  heroAttackArmor: require("../assets/actionsTokens/attack_armor_action.png"),
  heroMagic: require("../assets/actionsTokens/magic_action.png"),
  heroDefense: require("../assets/actionsTokens/defense_action.png")
}

export enum ActionCharacteristic {
  heroMovement = 'speed',
  heroAttack = 'attack',
  heroRangedAttack = 'rangedAttack',
  heroAttackArmor = 'attackArmor',
  heroMagic = 'magic',
  heroDefense = 'armor'
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
  linkedTo: string[]
  available: number
  limitedTo: number
}

export interface ICardAssets {
  normalPath: string
  miniaturePath: string
}
