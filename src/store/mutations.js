import {INCREMENT} from "./mutation-types";

const mutations = {
  [INCREMENT](state) {
    state.count++;
  }
}

export default mutations

