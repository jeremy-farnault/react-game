import { ICards, IHeroes, ITile } from "../../core/models";
import { IStoreState } from "../../types";
import Battlefield from "../Battlefield/Battlefield";
import { BackgroundImage, ContainerScene } from "./FightStyles";

import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import IPlayers = IStoreState.IPlayers;
import ActionButtons from "../../components/ActionButtons/ActionButtons";

interface IProps {
  tiles: ITile[][]
  heroes: IHeroes
  cards: ICards
  players: IPlayers
}

interface IState {

}

class Fight extends React.PureComponent<IProps, IState> {
  public render() {
    return (
      <ContainerScene>
        <BackgroundImage
          style={{ position: "absolute", top: -300, left: 0 }}
          src={require("../../assets/backgrounds/battlefield_big.jpg")}/>



        <div style={{ flexDirection: "row", display: 'flex' }}>



          <ActionButtons
            hero={h}
            currentAction={this.props.currentAction}
            changeAction={this.props.changeAction}
            tile={this.props.tile}/>



          <Battlefield/>
        </div>




      </ContainerScene>
    );
  }
}

function mapStateToProps(state: IStoreState.IRootState) {
  return {
    tiles: state.battlefield.tiles,
    heroes: state.session.allHeroes,
    cards: state.session.allCards,
    players: state.session.players
  };
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fight);

