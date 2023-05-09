
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/vue', component: () => import('pages/VueEx.vue') },
      {path: '/todo', component: () => import('pages/Todo.vue')},
      {path: '/book', component: () => import('pages/Book.vue')},
      { path: "/dbtodo", component: () => import("pages/DbTodo.vue") },
      {path: '/subtodo', component: () => import('pages/Sub_Todo.vue')},

    ]
  },

  { path: '/shop', component: () => import('pages/ShoppingList.vue') },

  {
    path: '/:catchAll(.*)*',
    
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
