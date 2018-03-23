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
             <app-main-tab :opt="option" @toggle = "toggleInfo1"></app-main-tab>
           </div>
           <div class="col-md-9">
             <app-general-tab  v-if="option === 'general' " :opt="option" @toggle = "toggleInfo2"></app-general-tab>
             <app-employee-tab  v-else-if="option === 'employee' ":opt="option" @toggle = "toggleInfo1"></app-employee-tab>
             <app-add-category-component v-else-if="option === 'addcategory' "></app-add-category-component>
             <app-update-category-tab v-else-if="option === 'updatecategory'" :msg="historyid"></app-update-category-tab>
             <app-add-timesheet-data v-else-if="option === 'addtimesheet'"></app-add-timesheet-data>
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
import MainTabComponent from './TimesheetComponents/TimesheetMainTabComponent.vue'
import EmployeeComponent from './TimesheetComponents/TimesheetEmployeeComponent.vue'
import GeneralComponent from './TimesheetComponents/TimesheetGeneralComponent.vue'
import AddTimesheetCategoryComponent from './TimesheetComponents/AddTimesheetCategoryComponent.vue'
import UpdateTimesheetCategoryComponent from './TimesheetComponents/UpdateTimesheetCategoryComponent.vue'
import AddTimesheetDataComponent from './TimesheetComponents/AddTimesheetDataComponent.vue'
import Footer from './GlobalComponents/Footer.vue'
export default {
  name: 'MainPage',
  components: {
    'app-header': Header,
    'app-jumbotron-component': JumbotronComponent,
    'app-footer': Footer,
    'app-main-tab': MainTabComponent,
    'app-general-tab': GeneralComponent,
    'app-add-category-component': AddTimesheetCategoryComponent,
    'app-employee-tab': EmployeeComponent,
    'app-update-category-tab': UpdateTimesheetCategoryComponent,
    'app-add-timesheet-data': AddTimesheetDataComponent
  },
  data () {
    return {
      option: 'general'
      // id: ''
    }
  },
  methods: {
    toggleInfo1: function (event) {
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
