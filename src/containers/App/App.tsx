import { ICards, IHeroes, ITile } from "../../core/models";
import { IStoreState } from '../../types'
import Battlefield from '../Battlefield/Battlefield'
import './App.css'

import styled from 'styled-components'

import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import IPlayers = IStoreState.IPlayers;

interface IProps {
  tiles: ITile[][]
  heroes: IHeroes
  cards: ICards
  players: IPlayers
}

class App extends React.PureComponent<IProps, {}> {
  public render() {
    return (
      <ContainerApp>
        <Battlefield />
      </ContainerApp>
    )
  }
}

function mapStateToProps(state: IStoreState.IRootState) {
  return {
    tiles: state.battlefield.tiles,
    heroes: state.session.allHeroes,
    cards: state.session.allCards,
    players: state.session.players
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

const ContainerApp = styled.div`
margin: auto;
max-width: 960px;
padding: 100px 0;
`
ContainerApp.displayName = 'ContainerApp'
