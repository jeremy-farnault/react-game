import * as React from 'react'
import {connect, Dispatch} from 'react-redux'
import { bindActionCreators } from 'redux'

export namespace Battlefield {
  export interface Props {
  }
}

class Battlefield extends React.Component<Battlefield.Props> {
  render() {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (rootState: ReduxState.RootState) => {
  return {
    tilesState: rootState.tiles.state
  }
}
const mapDispatchToProps =
  (dispatch: Dispatch<any>) => bindActionCreators({
    changeTileState: TileDuck.changeTileState
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Battlefield)
