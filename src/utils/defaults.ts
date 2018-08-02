import { ITile, TileState } from '../core/models'
import { config } from './config'

import * as _ from 'lodash'

import nanoid = require('nanoid')

const createDefaultTiles = (): ITile[][] => {
  return _.range(config.numberOfColumns).map(i => {
    return _.range(config.numberOfLines).map(j => {
      return {
        columnIndex: i,
        lineIndex: j,
        posX: i * config.tileSize,
        posY: j * config.tileSize,
        state: TileState.empty,
        uuid: nanoid(6)
      } as ITile
    })
  })
}

export const DefaultTiles = createDefaultTiles()
