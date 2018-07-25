import * as React from 'react'
import * as style from './style.css'
import { RouteComponentProps } from 'react-router'
import { Battlefield } from 'app/components/Battlefield';

export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export class App extends React.Component<App.Props> {

  render() {
    return (
      <div className={style.normal}>
        <Battlefield />
      </div>
    )
  }
}
