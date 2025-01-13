import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/Home.vue"
import About from "@/components/About.vue"
import Contact from "@/components/Contact.vue"
import LandingPage from '@/views/LandingPage.vue'
import Dashboard from '@/views/Dashboard.vue'
import AuthLayout from '@/layout/AuthLayout.vue'
import Login from '@/views/Login.vue'
import UserData from "@/userData.json"
import TwoFa from '@/views/2fa.vue'
import ConfirmationCode from "@/confirmationCode.json"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "landing-page",
      component: LandingPage,
    },
    {
      path: "/login",
      name: "login-page",
      component: Login,
    },
    {
      path: "/2fa",
      name: "2fa",
      component: TwoFa,
    },

    {
      path: "/",
      name: "",
      component: AuthLayout,
      redirect: "dashboard",
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: Dashboard
        },
        {
          path: "contact",
          name: "contact",
          component: Contact
        },
        {
          path: "about",
          name: "about",
          component: About
        },
      ],
    }
  ],
})

router.beforeEach((to, from, next) => {
  const userData = localStorage.getItem("UserData");
  const confirmationCode = localStorage.getItem("confirmationCode");

  if (to.path == "/2fa") {
    if (!userData) {
      next({ path: '/login' })
      return
    } 

    if (userData === JSON.stringify(UserData) && confirmationCode === JSON.stringify(ConfirmationCode)) {
      next({ path: '/' })
      return
    }
    next()
    return
  }

  if (isAuthenticated()) {
    next()
    return
  }

  if (to.path === "/login" || to.path === "/2fa") {
    next()
    return
  }

  if (localStorage.getItem("UserData") === JSON.stringify(UserData) && localStorage.getItem("confirmationCode") !== JSON.stringify(ConfirmationCode)) {
    next({ path: '/2fa' })
    return
  }

  next({ path: '/login' })

})

const isAuthenticated = () => {
  const userData = localStorage.getItem("UserData");
  const confirmationCode = localStorage.getItem("confirmationCode");
  return userData === JSON.stringify(UserData) && confirmationCode === JSON.stringify(ConfirmationCode);
}

export default router;



