import { GO_FORWARD, GO_BACK } from "./state-action";

const initialState = {
  listPosition: 1
}

export const reducerState = (state = initialState, {type, payload}) => {
  switch(type) {
    case GO_FORWARD: {
      return {
        ...state,
        listPosition: state.listPosition + 1
      }
    }
    case GO_BACK: {
      return {
        ...state,
        listPosition: state.listPosition - 1
      }
    }
    default: {
      return state
    }
  }
}