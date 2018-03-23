import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import NotFound from '@/components/NotFoundPage'
import LoginPage from '@/components/LoginPage'
import MainPage from '@/components/MainPage'
import CompanyProfilePage from '@/components/CompanyProfilePage'
import TimeOffPage from '@/components/TimeOffPage'
import OvertimePage from '@/components/OvertimePage'
import PayrollPage from '@/components/PayrollPage'
import TimesheetPage from '@/components/TimesheetPage'
Vue.use(Router)
Vue.use(VueResource)
// let signin = false
export var router = new Router()
// const authMiddleware = (to, from, next) => {
//   // if (this.$store.state.user.token === null) {
  // if (signin) {
  //   return next('/')
  // }
//   console.log('before middleware ' + signin)
//   return next()
// }
export default new Router({
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/dashboard',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/TimeOff',
      name: 'TimeOffPage',
      component: TimeOffPage
    },
    {
      path: '/Overtime',
      name: 'OvertimePage',
      component: OvertimePage
    },
    {
      path: '/Payroll',
      name: 'PayrollPage',
      component: PayrollPage
    },
    {
      path: '/Timesheet',
      name: 'TimesheetPage',
      component: TimesheetPage
    },
    {
      path: '/CompanyProfile',
      name: 'CompanyProfilePage',
      component: CompanyProfilePage
    }
  ]
})
