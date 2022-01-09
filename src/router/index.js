import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Recherche from '../views/Recherche.vue'
import Categories from '../views/Categories.vue'
import Messages from '../views/Messages.vue'
import CategoriesMessages from '../views/CategoriesMessages'
import NouvelleCategorie from '../views/NouvelleCategorie'
import ModifierCategorie from "../views/ModifierCategorie"
import NouveauMessage from '../views/NouveauMessage'
import ModifierMessage from '../views/ModifierMessage'
import Connexion from "../views/Connexion";


Vue.use(require('vue-moment'));

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nouvelle-categorie',
    name: 'nouvelle-categorie',
    component: NouvelleCategorie
  },
  {
    path: '/modifier-categorie/:id',
    name: 'modifier-categorie',
    component: ModifierCategorie
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    children: [
      {
        path: ':id',
        name: 'categorie_messages',
        component: CategoriesMessages
      }
    ]
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/nouveau-message',
    name: 'nouveau-message',
    component: NouveauMessage
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/modifier-message/:id',
    name: 'modifier-message',
    component: ModifierMessage
  },
  // {
  //   path: '/recherche',
  //   name: 'Recherche',
  //   component: Recherche
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
