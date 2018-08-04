import Tile from '../../components/Tile'
import * as actions from '../../core/actions'
import { ITile } from '../../core/models'
import { IStoreState } from '../../types'

import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

interface IProps {
  tiles: ITile[][]
}

// interface IState {}

class Battlefield extends React.PureComponent<IProps, {}> {
  constructor(props: IProps) {
    super(props)
  }

  public render() {
    return this.props.tiles.map(((c: ITile[]) => {
      return c.map((r: ITile) => {
        return <Tile key={r.uuid}/>
      })
    }))
  }
}

function mapStateToProps({ tiles }: IStoreState) {
  return {
    tiles
  }
}

const mapDispatchToProps = (dispatch: Dispatch<actions.ILoadData>) =>
  bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battlefield)