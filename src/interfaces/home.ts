export interface State {
  counter: number
}

export interface Actions {
  increment: (qty: number) => void
  reset: (qty: number) => void
}


export interface Action {
  type: keyof Actions
  qty: number
}