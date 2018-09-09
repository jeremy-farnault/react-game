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
  idleHero
}

export enum TileColors {
  empty = 'orange',
  idleHero = 'rgba(0, 0, 0, 0)'
}

export enum TileHoverColors {
  empty = 'violet',
  idleHero = 'rgba(0, 0, 0, 0)'
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
