import * as actions from '../../core/actions'
import { IStoreState } from '../../types'

import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

// interface IProps {}

// interface IState {}

class Battlefield extends React.PureComponent<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  public render() {
    return <div>TESTEST</div>
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
