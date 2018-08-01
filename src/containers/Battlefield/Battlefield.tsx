import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import * as actions from '../../core/actions'
import { StoreState } from '../../types'

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

function mapStateToProps({ tiles }: StoreState) {
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
