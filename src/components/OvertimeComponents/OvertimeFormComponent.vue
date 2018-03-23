<template>
  <div class="card">
    <div class="alert alert-info alert-dismissable" id="alert">
        <button v-on:click="close" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Success!</strong> Department Data successfully Deleted.
      </div>
      <div class="alert alert-danger alert-dismissable" id="alert2">
        <button v-on:click="close2" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Failed!</strong> Overtime Category is MISSING.
      </div>
    <div class="card-header">
      Overtime Request Form
    </div>
    <div class="card-block">
      <div class="form-group row">
        <label for="example-search-input" class="col-2 col-form-label">Form ID</label>
        <div class="col-4">
          <input class="form-control" type="search" v-model="id">
        </div>
      </div>
      <div class="form-group row">
        <label for="example-search-input" class="col-2 col-form-label">Request Date</label>
        <div class="col-4">
          <input class="form-control" type="search" v-model="requestDate">
        </div>
        <label for="example-search-input" class="col-2 col-form-label">Overtime ID</label>
        <div class="col-4">
          <input class="form-control" type="text" v-model="overtime">
        </div>
      </div>
      <div class="form-group row">
        <label for="example-search-input" class="col-2 col-form-label">Employee ID</label>
        <div class="col-4">
          <input class="form-control" type="search" v-model="employee">
        </div>
        <label for="example-search-input" class="col-2 col-form-label">Overtime hours</label>
        <div class="col-4">
          <input class="form-control" type="search" v-model="overtimeHours">
        </div>
      </div>
     <hr>
     <div class="form-group row">
       <label for="example-search-input" class="col-3 col-form-label">Overtime Request Reason</label>
       <div class="col-9">
         <textarea name="name" rows="8" cols="80" class="form-control" v-model="overtimeReason"></textarea>
       </div>
     </div>
     <hr>
     <div class="form-group row">
       <label for="example-search-input" class="col-2 col-form-label">Supervisor's Approval Date</label>
       <div class="col-4">
         <input class="form-control" type="search" v-model="supervisorApprovalDate">
       </div>
       <label for="example-search-input" class="col-2 col-form-label">Manager's Approval Date</label>
       <div class="col-4">
         <input class="form-control" type="search" v-model="managerApprovalDate">
       </div>
     </div>
     <hr>
      <div class="form-group row">
       <label for="example-search-input" class="col-2 col-form-label">Compensation</label>
       <div class="col-4">
         <input class="form-control" type="search" v-model="compensation">
       </div>  
     </div>
     <hr>
       <button class="btn btn-outline-primary" v-on:click="AddOvertimeHistory()">Submit Overtime Request</button>
     <hr>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      id: '',
      requestDate: '',
      employee: '',
      overtime: '',
      overtimeHours: '',
      overtimeReason: '',
      supervisorApprovalDate: '',
      managerApprovalDate: '',
      compensation: ''
    }
  },
  methods: {
    close: function () {
      var x = document.getElementById('alert')
      x.style.display = 'none'
      x.style.transition = '0.5s'
    },
    close2: function () {
      var x = document.getElementById('alert2')
      x.style.display = 'none'
      x.style.transition = '0.5s'
    },
    AddOvertimeHistory: function () {
      var app = this
      axios.post('http://localhost:8123/api/OvertimeHistory/', {
        id: app.id,
        requestDate: app.requestDate,
        employee: {
          id: app.employee
        },
        overtime: {
          id: app.overtime
        },
        overtimeHours: app.overtimeHours,
        overtimeReason: app.overtimeReason,
        supervisorApprovalDate: app.supervisorApprovalDate,
        managerApprovalDate: app.managerApprovalDate,
        compensation: app.compensation
      }, {headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(function (response) {
        var x = document.getElementById('alert')
        x.style.display = 'block'
        x.style.transition = '2s'
      })
      .catch(function (error) {
        console.log(error)
        var x = document.getElementById('alert2')
        x.style.display = 'block'
        x.style.transition = '2s'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#alert{
  display: none;
}
#alert2{
  display: none;
}  
</style>
