import state from 'src/store/audioOnline/state'
import * as getters from 'src/store/audioOnline/getters'
import * as mutations from 'src/store/audioOnline/mutations'
import * as actions from './actions'

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
