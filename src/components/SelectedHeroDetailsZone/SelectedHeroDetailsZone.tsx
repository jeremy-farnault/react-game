import { IHeroBattlefield, IHeroBattlefieldPointsIcon, IHeroSkill, SkillsIcon } from "../../core/models";
import { colors } from "../../utils/colors";
import DetailsModal from "../DetailsModal/DetailsModal";
import { TextStyled } from "../DetailsModal/DetailsModalStyles";
import {
  DetailsContainer, IconNameZone,
  IconZone,
  NameZone,
  PointsZone,
  SkillsZone,
  TextName
} from "./SelectedHeroDetailsZoneStyles";

import { Icon } from "@material-ui/core";
import * as _ from "lodash";
import * as React from "react";
import * as Modal from "react-modal";
import ReactTooltip = require("react-tooltip");

interface IProps {
  heroesSorted: IHeroBattlefield[]
  selectedHero: IHeroBattlefield
}

interface IState {
  modalOpen: boolean
}

const customStyles = {
  overlay: {
    zIndex: 10,
    backgroundColor: colors.blackHighOpacity
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: 'black',
    padding: 20,
    borderSize: 2,
    borderStyle: 'solid',
    borderColor: colors.paleYellow
  }
};

class SelectedHeroDetailsZone extends React.PureComponent<IProps, IState> {

  public constructor(props: IProps) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  public render() {
    const heroes = this.props.heroesSorted;
    const hero = this.props.selectedHero;
    return (
      <DetailsContainer sameTeam={hero.playerId === heroes[0].playerId}>
        <ReactTooltip type='light' effect='solid' multiline={true}/>
        <NameZone>
          <TextName sameTeam={hero.playerId === heroes[0].playerId}>{hero.id}</TextName>
          <IconNameZone>
            <Icon
              onClick={this.openModal}
              style={{ fontSize: 30, color: hero.playerId === heroes[0].playerId ? colors.blueGreen : colors.paleRed }}>
              zoom_in
            </Icon>
          </IconNameZone>
        </NameZone>
        <IconZone>
          {Object.keys(hero.points).map(c =>
            <PointsZone key={c + hero.id}>
              <img data-tip={_.capitalize(_.lowerCase(c))} src={IHeroBattlefieldPointsIcon[c].path}
                   height={IHeroBattlefieldPointsIcon[c].size} data-place='bottom'/>
              <TextStyled>{hero.points[c]}</TextStyled>
            </PointsZone>
          )}
          {hero.skills.map((s: IHeroSkill) =>
            <SkillsZone key={s.name + hero.id}>
              <img data-tip={s.name} src={SkillsIcon[s.iconType]} height={40} data-place='bottom'/>
            </SkillsZone>
          )}
        </IconZone>
        <Modal
          style={customStyles}
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>
          <DetailsModal hero={hero}/>
        </Modal>
      </DetailsContainer>
    );
  }

  private openModal = () => {
    this.setState({ modalOpen: true });
  };

  private closeModal = () => {
    this.setState({ modalOpen: false });
  };
}

export default SelectedHeroDetailsZone;
