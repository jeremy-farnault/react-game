import { ICards, IHeroes, ITile } from "../../core/models";
import { IStoreState } from '../../types'
import Battlefield from '../Battlefield/Battlefield'
import './App.css'

import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

interface IProps {
  tiles: ITile[][]
  heroes: IHeroes
  cards: ICards
}

class App extends React.PureComponent<IProps, {}> {
  public render() {
    console.log('cards ----- ', this.props.cards)
    console.log('heroes ----- ', this.props.heroes)
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
    heroes: state.session.allHeroes,
    cards: state.session.allCards
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
