import { ITile, TileState } from '../core/models'
import { config } from './config'

import * as _ from 'lodash'

import nanoid = require('nanoid')

const createDefaultTiles = (): ITile[][] => {
  return _.range(config.numberOfLines).map(i => {
    return _.range(config.numberOfColumns).map(j => {
      return {
        columnIndex: j,
        lineIndex: i,
        posX: j * config.tileSize,
        posY: i * config.tileSize,
        state: TileState.empty,
        uuid: nanoid(6)
      } as ITile
    })
  })
}

export const DefaultTiles = createDefaultTiles()
