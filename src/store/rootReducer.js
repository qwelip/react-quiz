import { combineReducers } from "redux";
import {reducerState} from './state/state-reducer';

export const rootReducer = combineReducers({
  state: reducerState
})