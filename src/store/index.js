import { createStore } from "vuex";

export default createStore({
  state: {
    notes: []
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes;
    }
  },
  actions: {},
  modules: {}
});
