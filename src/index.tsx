import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './containers/App/App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={createStore()}>
    <App/>
  </Provider>,
  document.getElementById("root") as HTMLElement);
registerServiceWorker();
