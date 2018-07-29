import * as React from 'react'
import {connect, Dispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/'
import {StoreState} from '../types/index'
import {Tile} from '../core/models'

interface IProps {}

interface IState {}

class Battlefield extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props)
  }

  render() {
    return (
      <div>
        TESTEST
      </div>
    )
  }
}

function mapStateToProps({}: StoreState) {
  return {
  }
}

const mapDispatchToProps = (dispatch: Dispatch<actions.LoadData>) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Battlefield)
