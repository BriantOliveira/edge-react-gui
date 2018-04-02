// @flow

import { combineReducers } from 'redux'

import * as Constants from '../../constants/indexConstants'
import type { Action, State } from '../ReduxTypes'
import errorAlert from './components/ErrorAlert/reducer'
import transactionAlert from './components/TransactionAlert/reducer'
import { request } from './Request/reducer.js'
import { scenes } from './scenes/reducer.js'
import { settings } from './Settings/reducer.js'
import { wallets } from './Wallets/reducer.js'
import { PrivateKeyModalReducer as privateKeyModal } from './components/Modals/PrivateKeyModal/indexPrivateKeyModal.js'

export { errorAlert, privateKeyModal, transactionAlert, scenes, wallets, request, settings }

export const uiReducer = combineReducers({
  errorAlert,
  transactionAlert,
  privateKeyModal,
  scenes,
  wallets,
  request,
  settings
})

export const ui = (state: $PropertyType<State, 'ui'>, action: Action) => {
  if (action.type === Constants.LOGOUT || action.type === Constants.DEEP_LINK_RECEIVED) {
    // $FlowExpectedError
    state = undefined
  }

  // $FlowFixMe
  return uiReducer(state, action)
}
