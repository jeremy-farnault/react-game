import Tile from '../../components/Tile'
import { ITile } from '../../core/models'
import { IStoreState } from '../../types'

import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import styled from 'styled-components'

interface IProps {
  tiles: ITile[][]
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

function mapStateToProps({ tiles }: IStoreState) {
  return {
    tiles
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battlefield)

const Row = styled.div`
  flex-direction: row;
  display: flex;
`
