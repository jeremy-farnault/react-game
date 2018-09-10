import { IHeroBattlefield, IHeroesBattlefield, ITile } from "../../core/models";

import * as React from "react";
import Hero from "../../components/Hero/Hero";

interface IProps {
  heroes: IHeroesBattlefield
  selectHero: (hero: IHeroBattlefield) => void
  tiles: ITile[][]
}

interface IState {
  heroes: IHeroesBattlefield
  tiles: ITile[][]
}

class Heroes extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      heroes: {},
      tiles: []
    };
  }

  public componentWillReceiveProps(props: IProps) {
    this.setState({
      heroes: props.heroes,
      tiles: props.tiles
    });
  }

  public render() {
    const h = this.props.heroes;
    return (
      Object.keys(h).map((id: string) => {
        const tile = this.props.tiles[h[id].tileY][h[id].tileX];
        return (
          <Hero tile={tile}
                key={h[id].playerId + id}
                hero={h[id]}
                selectHero={this.props.selectHero}/>
        );
      })
    );
  }
}

export default Heroes;
