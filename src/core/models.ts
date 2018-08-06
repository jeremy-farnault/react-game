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
  assets: IHeroAssets
  characteristics: IHeroCharacteristics
  cost: number
  description: string
  id: string
  skills: string[]
  unique: boolean
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

export interface IHeroAssets {
  battlefieldPath: string
  miniaturePath: string
  tokenInitPath: string
  tokenPath: string
}

export enum HeroSize {
  small = 'S',
  medium = 'M',
  large = 'L'
}
