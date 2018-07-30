import * as React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import * as actions from '../actions/'
import { StoreState } from '../../types'

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

function mapStateToProps({tiles}: StoreState) {
  return {
    tiles
  }
}

const mapDispatchToProps = (dispatch: Dispatch<actions.LoadData>) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Battlefield)
