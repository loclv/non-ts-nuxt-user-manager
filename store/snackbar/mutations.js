export default {
  show(state) {
    state.isShowing = true
  },
  hide(state) {
    state.isShowing = false
  },
  setInfo(state, updatedInfo) {
    state.updatedInfo = updatedInfo
  },
}
