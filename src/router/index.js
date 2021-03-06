import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RegisterPage from "@/views/RegisterPage";
import LoginPage from "@/views/LoginPage";
import Main from "@/views/Main";
import Licence from "@/views/Licence";
import Single from "@/components/Single";
import UserProfile from "@/views/UserProfile";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    meta: {
      requiresAuth: false,
    },

  },
  {
    path: '/buy-licence',
    name: 'Main',
    component: Main,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/licence-list',
    name: 'Licence',
    component: Licence,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/single/:id',
    name: 'Single',
    component: Single,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/my-profile',
    name: 'UserProfile',
    component: UserProfile,
    meta: {
      requiresAuth: true
    }

  },

]
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!localStorage.getItem('token')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
