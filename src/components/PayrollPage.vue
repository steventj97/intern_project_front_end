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
             <app-history-tab v-if="option === 'history' " :opt="option" @toggle = "toggleInfo2"></app-history-tab>
             <app-payroll-data v-else-if="option === 'data'" :opt="option" @toggle = "toggleInfo2"></app-payroll-data>
             <app-tax-tab v-else-if="option === 'tax'" :opt="option" @toggle = "toggleInfo2"></app-tax-tab>
             <app-add-tax-tab v-else-if="option === 'addTax'" ></app-add-tax-tab>
             <app-update-tax-tab v-else-if="option === 'updateTax'" :msg="id"></app-update-tax-tab>
             <app-add-payroll-tab v-else-if="option === 'addpayroll'"></app-add-payroll-tab>
             <app-update-category v-else-if="option === 'updatecategory'":msg="categoryid"></app-update-category>
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
import PayrollMainTab from './PayrollComponents/PayrollMainTabComponent.vue'
import PayrollHistory from './PayrollComponents/PayrollHistoryComponent.vue'
import PayrollData from './PayrollComponents/PayrollDataComponent.vue'
import TaxCategory from './PayrollComponents/TaxCategoryComponent.vue'
import AddTaxCategory from './PayrollComponents/AddTaxCategoryComponent.vue'
import AddPayrollCategory from './PayrollComponents/AddPayrollCategoryComponent'
import UpdatePAyrollCategory from './PayrollComponents/UpdatePayrollCategoryComponent.vue'
import UpdateTaxCategory from './PayrollComponents/UpdateTaxCategoryComponent.vue'
import Footer from './GlobalComponents/Footer.vue'
export default {
  name: 'MainPage',
  components: {
    'app-header': Header,
    'app-jumbotron-component': JumbotronComponent,
    'app-main-tab': PayrollMainTab,
    'app-history-tab': PayrollHistory,
    'app-payroll-data': PayrollData,
    'app-tax-tab': TaxCategory,
    'app-add-tax-tab': AddTaxCategory,
    'app-add-payroll-tab': AddPayrollCategory,
    'app-update-tax-tab': UpdateTaxCategory,
    'app-footer': Footer,
    'app-update-category': UpdatePAyrollCategory
  },
  data () {
    return {
      option: 'history',
      categoryid: ''
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
      this.categoryid = event.id
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
