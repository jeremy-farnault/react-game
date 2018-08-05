// Tiles

export interface ITile {
  uuid: string
  columnIndex: number
  lineIndex: number
  posX: number
  posY: number
  state: TileState
}

export enum TileState {
  empty
}

export enum TileColors {
  empty = 'orange'
}

// Heroes

export interface IHeroes {
  [id: string]: IHero
}

export interface IHero {
  id: string
  characteristics: IHeroCharacteristics
  cost: number
  unique: boolean
  skills: string[]
  description: string
  assets: IHeroAssets
}

export interface IHeroCharacteristics {
  speed: number
  initiative: number
  lifePoints: number
  magicPoints: number
  armor: number
  range: number
  size: HeroSize
  agility: number
  stamina: number
  strength: number
  magic: number
  mental: number
  attack: number
  rangedAttack: number
  attackArmor: number
}

export interface IHeroAssets {
  tokenPath: string
  tokenInitPath: string
  miniaturePath: string
  battlefieldPath: string
}

export enum HeroSize {
  small = 'S',
  medium = 'M',
  large = 'L'
}
