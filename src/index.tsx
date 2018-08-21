import App from './containers/App/App'
import store from "./core/create";
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
