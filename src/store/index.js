import { createStore } from "vuex";

export default createStore({
  state: {
    notes: [],
    activeNote: null
  },
  getters: {
    getNoteById: state => noteId => state.notes.find(note => note.id === noteId)
  },
  mutations: {
    createNote(state, note) {
      state.notes.unshift(note);
    },
    setNotes(state, notes) {
      state.notes = notes;
    },
    setActiveNote(state, noteId = null) {
      state.activeNote = noteId;
    },
    updateNote(state, { id, body }) {
      state.notes.find(note => note.id === id).body = body;
    }
  },
  actions: {
    createNote({ commit }) {
      const note = { body: "", id: Date.now() };
      commit("createNote", note);
      commit("setActiveNote", note.id);
    }
  },
  modules: {}
});
