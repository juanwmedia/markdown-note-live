import { createStore } from "vuex";

export default createStore({
  state: {
    notes: [],
    activeNote: null,
    deleting: false,
    searchTerm: ""
  },
  getters: {
    getNoteById: state => noteId =>
      state.notes.find(note => note.id === noteId),
    getNoteTitle: state => noteId => {
      const removeMd = require("remove-markdown");
      const id = noteId ? noteId : state.activeNote;
      const body = state.notes.find(note => note.id === id).body;
      return removeMd(body.substring(0, 20));
    },
    getNotesBySearchTerm: state => {
      let filter = new RegExp(state.searchTerm, "i");
      return state.notes.filter(note => note.body.match(filter));
    }
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
    },
    deleteNote(state) {
      const index = state.notes.findIndex(note => note.id === state.activeNote);
      state.notes.splice(index, 1);
      state.activeNote = null;
      state.deleting = false;
    },
    setDeleting(state, deleting) {
      state.deleting = deleting;
    },
    setSearchTerm(state, searchTerm) {
      state.searchTerm = searchTerm;
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
