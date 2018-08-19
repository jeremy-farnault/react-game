import Tile from '../../components/Tile'
import { IHeroes, ITile } from '../../core/models'

import * as React from 'react'
import styled from 'styled-components'

interface IProps {
  tiles: ITile[][]
  heroes: IHeroes
}

// interface IState {}

class Battlefield extends React.PureComponent<IProps, {}> {
  constructor(props: IProps) {
    super(props)
  }

  public render() {
    return this.props.tiles.map((c: ITile[], index: number) => {
      return (
        <Row key={index}>
          {c.map((r: ITile) => {
            return <Tile key={r.uuid} tile={r} />
          })}
        </Row>
      )
    })
  }
}

export default Battlefield

const Row = styled.div`
  flex-direction: row;
  display: flex;
`
