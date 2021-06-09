/* eslint-disable require-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
export default async ({ app, store }) => {
  app.router.afterEach((to, from) => {
    store.commit('menu/globalMenuClose')
    store.commit('menu/searchMenuClose')
  })
}
