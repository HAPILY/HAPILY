export default async ({ app, store }) => {
  app.router.afterEach((to, from) => {
    store.commit("menu/globalMenuClose");
    store.commit("menu/searchMenuClose");
  });
};
