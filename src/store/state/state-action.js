export const GO_FORWARD = '@@state/SWITCH_LIST';
export const GO_BACK = '@@state/GO_BACK';

export const goForward = () => ({
  type: GO_FORWARD
})

export const goBack = () => ({
  type: GO_BACK
})