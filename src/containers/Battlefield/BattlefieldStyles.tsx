import { constants } from "../../utils/constants";

import styled from "styled-components";

export const ContainerBattlefield = styled.div`
position: relative;
max-width: ${constants.tileSize * constants.numberOfColumns}px;
`;
ContainerBattlefield.displayName = 'ContainerBattlefield'
