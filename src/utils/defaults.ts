import { ITile, TileState } from '../core/models'
import { constants } from './constants'

import * as _ from 'lodash'

import nanoid = require('nanoid')

const createDefaultTiles = (): ITile[][] => {
  return _.range(constants.numberOfLines).map(i => {
    return _.range(constants.numberOfColumns).map(j => {
      return {
        columnIndex: j,
        lineIndex: i,
        posX: j * constants.tileSize,
        posY: i * constants.tileSize,
        state: TileState.empty,
        uuid: nanoid(6)
      } as ITile
    })
  })
}

export const DefaultTiles = createDefaultTiles()
