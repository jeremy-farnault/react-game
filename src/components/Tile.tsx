import { config } from '../utils/config'

import * as React from 'react'
import styled from 'styled-components'

// interface IProps {}

// interface IState {}

class Tile extends React.PureComponent<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  public render() {
    return <StyledTile color={'orange'}/>
  }
}

export default Tile

const StyledTile = styled.div`
  width: ${config.tileSize}px;
  height: ${config.tileSize}px;
  background-color: rgba(255, 255, 255, 0);
  border: 2px solid ${(props: {color: string}) => props.color};
`;
