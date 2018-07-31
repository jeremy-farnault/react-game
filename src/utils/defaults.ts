import { config } from './config'
import { Tile, TileState } from '../core/models'
import * as _ from 'lodash'

import nanoid = require('nanoid')

export const defaultTiles = (): Tile[][] => {
  return _.range(config.numberOfColumns).map(i => {
    return _.range(config.numberOfLines).map(j => {
      return {
        columnIndex: i,
        lineIndex: j,
        posX: i * config.tileSize,
        posY: j * config.tileSize,
        state: TileState.empty,
        uuid: nanoid(6)
      } as Tile
    })
  })
}
