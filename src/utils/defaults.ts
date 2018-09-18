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
        posX: j * (constants.tileSize + 2) + 1,
        posY: i * (constants.tileSize + 2) + 1,
        state: TileState.empty,
        uuid: nanoid(6)
      } as ITile
    })
  })
}

export const DefaultTiles = createDefaultTiles()
