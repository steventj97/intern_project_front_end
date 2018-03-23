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
             <app-category-tab v-if="option === 'category' " :opt="option" @toggle = "toggleInfo2"></app-category-tab>
             <app-history-tab v-else-if="option === 'history' "></app-history-tab>
             <app-form-tab v-else-if="option === 'form'"></app-form-tab>
             <app-adjustment-tab v-else-if="option === 'adjustment'"  :opt="option" @toggle = "toggleInfo3"></app-adjustment-tab>
             <app-add-component v-else-if="option === 'add'"></app-add-component>
             <app-update-component v-else-if="option === 'update'" :msg="id"></app-update-component>
             <app-update-history-component v-else-if="option === 'updatehistory'" :msg="historyid"></app-update-history-component>
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
import OvertimeMainTab from './OvertimeComponents/OvertimeMainTabComponent.vue'
import OvertimeCategoryComponent from './OvertimeComponents/OvertimeCategoryComponent.vue'
import OvertimeHistoryComponent from './OvertimeComponents/OvertimeHistoryComponent.vue'
import OvertimeFormComponent from './OvertimeComponents/OvertimeFormComponent.vue'
import AddOvertimeCategoryComponent from './OvertimeComponents/AddOvertimeCategoryComponent.vue'
import UpdateOvertimeCategoryComponent from './OvertimeComponents/UpdateOvertimeCategoryComponent.vue'
import OvertimeAdjustmentComponent from './OvertimeComponents/OvertimeAdjustmentComponent.vue'
import UpdateOvertimeHistoryComponent from './OvertimeComponents/UpdateOvertimeHistoryComponent.vue'
import Footer from './GlobalComponents/Footer.vue'
export default {
  name: 'MainPage',
  components: {
    'app-header': Header,
    'app-jumbotron-component': JumbotronComponent,
    'app-main-tab': OvertimeMainTab,
    'app-category-tab': OvertimeCategoryComponent,
    'app-history-tab': OvertimeHistoryComponent,
    'app-form-tab': OvertimeFormComponent,
    'app-adjustment-tab': OvertimeAdjustmentComponent,
    'app-add-component': AddOvertimeCategoryComponent,
    'app-footer': Footer,
    'app-update-history-component': UpdateOvertimeHistoryComponent,
    'app-update-component': UpdateOvertimeCategoryComponent
  },
  data () {
    return {
      option: 'category'
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
      this.id = event.id
    },
    toggleInfo3: function (event) {
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
