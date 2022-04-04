import { 
  GO_FORWARD,
  GO_BACK, 
  SET_RANGE, 
  SET_OTDELKA, 
  SET_POTOLOK, 
  SET_CONTACTS 
} from "./state-action";

const initialState = {
  listPosition: 1,
  parametry: {
    yglov: 0,
    trub: 0,
    ploshad: 0,
    spots: 0
  },
  otdelka: '',
  potoloc: '',
  contakty: {name: "", tel: ""}
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
    case SET_RANGE: {
      return {
        ...state,
        parametry: {...state.parametry, [payload[0]]: payload[1]}
      }
    }
    case SET_OTDELKA: {
      return {
        ...state,
        otdelka: payload
      }
    }
    case SET_POTOLOK: {
      return {
        ...state,
        potoloc: payload
      }
    }
    case SET_CONTACTS: {
      return {
        ...state,
        contakty: {...state.contakty, [payload[0]]: payload[1]}
      }
    }
    default: {
      return state
    }
  }
}