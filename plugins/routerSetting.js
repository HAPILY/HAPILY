export default async ({ app, store }) => {
  app.router.afterEach(() => {
    store.commit("menu/globalMenuClose");
    store.commit("menu/searchMenuClose");
  });
};
