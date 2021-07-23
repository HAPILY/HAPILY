export const state = () => ({
  globalMenu: false,
  searchMenu: false,
});

export const mutations = {
  globalMenuToggle(state) {
    if (state.searchMenu === true) {
      state.searchMenu = false;
    }
    state.globalMenu = !state.globalMenu;
  },
  globalMenuClose(state) {
    state.globalMenu = false;
  },
  searchMenuToggle(state) {
    if (state.globalMenu === true) {
      state.globalMenu = false;
    }
    state.searchMenu = !state.searchMenu;
  },
  searchMenuClose(state) {
    state.searchMenu = false;
  },
};
