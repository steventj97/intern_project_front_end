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
             <app-category-tab v-if="option === 'category'" :opt="option" @toggle="toggleInfo2"></app-category-tab>
             <app-history-tab v-else-if="option === 'history' "></app-history-tab>
             <app-form-tab v-else-if="option === 'form'"></app-form-tab>
             <app-adjustment-tab v-else-if="option === 'adjustment'":opt="option" @toggle="toggleInfo3" ></app-adjustment-tab>
             <app-add-component v-else-if="option === 'add'"></app-add-component>
             <app-update-component v-else-if="option === 'update'" :msg="categoryid"></app-update-component>
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
import TimeOffMainTab from './TimeOffComponents/TimeOffMainTabComponent.vue'
import TimeOffCategoryComponent from './TimeOffComponents/TimeOffCategoryComponent.vue'
import AddTimeOffCategoryComponent from './TimeOffComponents/AddTimeOffCategoryComponent.vue'
import TimeOffHistoryComponent from './TimeOffComponents/TimeOffHistoryComponent.vue'
import TimeOffFormComponent from './TimeOffComponents/TimeOffFormComponent.vue'
import UpdateTimeOffCategoryComponent from './TimeOffComponents/UpdateTimeOffCategoryComponent.vue'
import TimeOffAdjustmentComponent from './TimeOffComponents/TimeOffAdjustmentComponent.vue'
import UpdateTimeOffHistoryComponent from './TimeOffComponents/UpdateTimeOffHistoryComponent.vue'
import Footer from './GlobalComponents/Footer.vue'

export default {
  name: 'MainPage',
  components: {
    'app-header': Header,
    'app-jumbotron-component': JumbotronComponent,
    'app-main-tab': TimeOffMainTab,
    'app-category-tab': TimeOffCategoryComponent,
    'app-add-component': AddTimeOffCategoryComponent,
    'app-history-tab': TimeOffHistoryComponent,
    'app-form-tab': TimeOffFormComponent,
    'app-adjustment-tab': TimeOffAdjustmentComponent,
    'app-update-component': UpdateTimeOffCategoryComponent,
    'app-update-history-component': UpdateTimeOffHistoryComponent,
    'app-footer': Footer
  },
  data () {
    return {
      option: 'category',
      categoryid: '',
      historyid: ''
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
