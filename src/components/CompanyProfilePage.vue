<template>
<div id="MainPage">
  <center>
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
             <app-company-detail-tab v-if="option === 'detail' "></app-company-detail-tab>
             <app-organisation-structure-tab v-else-if="option === 'structure' "></app-organisation-structure-tab>
             <app-job-department-tab v-else-if="option === 'department'" :opt="option" @toggle = "toggleInfo3"></app-job-department-tab>
             <app-job-position-tab v-else-if="option === 'position'"  :opt="option" @toggle = "toggleInfo2"></app-job-position-tab>
             <app-access-role-tab v-else-if="option === 'access'"></app-access-role-tab>
             <app-add-department-tab v-else-if="option === 'add'"></app-add-department-tab>
             <app-update-department-tab v-else-if="option === 'updatedepartment'" :msg="departmentid"></app-update-department-tab>
             <app-add-position-tab v-else-if="option === 'addposition'"></app-add-position-tab>
             <app-update-position-tab v-else-if="option === 'updateposition'" :msg="positionid"></app-update-position-tab>
           </div>
           <hr>
         </div>
        <hr class="bg-primary">
       </div>
     </center>
     <app-footer></app-footer>
  </center>
</div>
</template>
<h1></h1>
<script>
import Header from './GlobalComponents/Header.vue'
import JumbotronComponent from './GlobalComponents/JumbotronComponent.vue'
import ProfileCompanyMainTabComponent from './ProfileCompanyComponents/ProfileCompanyMainTabComponent.vue'
import CompanyDetailComponent from './ProfileCompanyComponents/CompanyDetailComponent.vue'
import OrganisationStructureComponent from './ProfileCompanyComponents/OrganisationStructureComponent.vue'
import JobDepartmentComponent from './ProfileCompanyComponents/JobDepartmentComponent.vue'
import JobPositionComponent from './ProfileCompanyComponents/JobPositionComponent.vue'
import AccessRoleComponent from './ProfileCompanyComponents/AccessRoleComponent.vue'
import AddDepartmentComponent from './ProfileCompanyComponents/AddDepartmentCategoryComponent.vue'
import AddPositionComponent from './ProfileCompanyComponents/AddPositionCategoryComponent.vue'
import UpdatePositionComponent from './ProfileCompanyComponents/UpdatePositionCategoryComponent.vue'
import UpdateDepartmentComponent from './ProfileCompanyComponents/UpdateDepartmentCategoryComponent.vue'
import Footer from './GlobalComponents/Footer.vue'
export default {
  name: 'MainPage',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-jumbotron-component': JumbotronComponent,
    'app-main-tab': ProfileCompanyMainTabComponent,
    'app-company-detail-tab': CompanyDetailComponent,
    'app-organisation-structure-tab': OrganisationStructureComponent,
    'app-job-department-tab': JobDepartmentComponent,
    'app-job-position-tab': JobPositionComponent,
    'app-access-role-tab': AccessRoleComponent,
    'app-add-department-tab': AddDepartmentComponent,
    'app-add-position-tab': AddPositionComponent,
    'app-update-position-tab': UpdatePositionComponent,
    'app-update-department-tab': UpdateDepartmentComponent
  },
  data () {
    return {
      option: 'department',
      positionid: '',
      departmentid: ''
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
      this.positionid = event.id
    },
    toggleInfo3: function (event) {
      console.log(event)
      this.option = event.option
      this.departmentid = event.id
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
}</style>
