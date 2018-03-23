<template>
<div id="MainPage">
   <app-header></app-header>
     <center>
       <div class="mc">
         <div class="row">
           <div class="col-md-12">
             <app-jumbotron-component></app-jumbotron-component>
           </div>
         </div>
         <div class="row">
           <div class="col-md-3">
             <app-main-tab :opt="option" @toggle = "toggleInfo"></app-main-tab>
           </div>
           <div class="col-md-9">
             <app-employee-tab v-if="option === 'employee' " :opt="option" @toggle = "toggleInfo2"></app-employee-tab>
             <app-payroll-calculator-tab v-else-if="option === 'calculator' "></app-payroll-calculator-tab>
             <app-payroll-tab v-else-if="option === 'payroll'"></app-payroll-tab>
             <app-report-tab v-else-if="option === 'report'"></app-report-tab>
             <app-add-component v-else-if="option === 'add'"></app-add-component>
             <app-employee-data-update v-else-if="option === 'updatehistory'" :msg="historyid"></app-employee-data-update>
           </div>
           <hr>
         </div>
        <hr class="bg-primary">
       </div>
     </center>
   <app-footer></app-footer>
</div>
</template>
<h1></h1>
<script>
import Header from './GlobalComponents/Header.vue'
import JumbotronComponent from './GlobalComponents/JumbotronComponent.vue'
import MainPageMainTab from './MainPageComponents/MainPageMainTabComponent.vue'
import EmployeeTab from './MainPageComponents/EmployeeTabComponent.vue'
import Calculator from './MainPageComponents/PayrollCalculatorComponent.vue'
import PayrollTab from './MainPageComponents/PayrollTabComponent.vue'
import ReportTab from './MainPageComponents/ReportsTabComponent.vue'
import UpdateEmployeeDataComponent from './MainPageComponents/UpdateEmployeeDataComponent'
import AddEmployeeComponent from './MainPageComponents/AddEmployeeDataComponent.vue'
import Footer from './GlobalComponents/Footer.vue'

export default {
  name: 'MainPage',
  components: {
    'app-header': Header,
    'app-jumbotron-component': JumbotronComponent,
    'app-main-tab': MainPageMainTab,
    'app-employee-tab': EmployeeTab,
    'app-payroll-calculator-tab': Calculator,
    'app-payroll-tab': PayrollTab,
    'app-report-tab': ReportTab,
    'app-add-component': AddEmployeeComponent,
    'app-employee-data-update': UpdateEmployeeDataComponent,
    'app-footer': Footer
  },
  data () {
    return {
      option: 'employee'
    }
  },
  methods: {
    toggleInfo: function (event) {
      console.log(event)
      this.option = event
    },
    toggleInfo2: function (event) {
      console.log(event)
      this.option = event.option
      this.historyid = event.id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .MainPage{
    width:80%;
  }
  .mc{
    width: 80%;
  }
</style>
