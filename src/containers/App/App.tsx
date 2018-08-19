import { IHeroes, ITile } from '../../core/models'
import { IStoreState } from '../../types'
import Battlefield from '../Battlefield/Battlefield'
import './App.css'

import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

interface IProps {
  tiles: ITile[][]
  heroes: IHeroes
}

class App extends React.PureComponent<IProps, {}> {
  public render() {
    console.log('RENDER')
    console.log('tiles ----- ', this.props.tiles)
    console.log('Heroes ----- ', this.props.heroes)
    return (
      <div className="App">
        <Battlefield tiles={this.props.tiles} heroes={this.props.heroes} />
      </div>
    )
  }
}

function mapStateToProps(state: IStoreState.IRootState) {
  console.log('state -----', state)
  return {
    tiles: state.battlefield.tiles,
    heroes: state.player.heroes
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
