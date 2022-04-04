export const GO_FORWARD = '@@state/SWITCH_LIST';
export const GO_BACK = '@@state/GO_BACK';
export const SET_RANGE = '@@state/SET_RANGE';
export const SET_OTDELKA = '@@state/SET_OTDELKA';
export const SET_POTOLOK = '@@state/SET_POTOLOK';
export const SET_CONTACTS = '@@state/SET_CONTACTS';

export const goForward = () => ({
  type: GO_FORWARD
})

export const goBack = () => ({
  type: GO_BACK
})

export const setRange = (value) => ({
  type: SET_RANGE,
  payload: value
})

export const setOtdelka = (otdelka) => ({
  type: SET_OTDELKA,
  payload: otdelka
})

export const setPotoloc = (potoloc) => ({
  type: SET_POTOLOK,
  payload: potoloc
})

export const setContacts = (contacts) => ({
  type: SET_CONTACTS,
  payload: contacts
})