import {INCREMENT} from "./mutation-types";

const actions = {
  [INCREMENT]({commit}) {
    commit(INCREMENT)
  }
}
export default actions
