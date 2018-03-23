<template>
  <div class="card">
    <div class="card-header">
      Timeoff Update Form
    </div>
    <div class="card-block">
      <div class="form-group row">
        <label for="example-search-input" class="col-2 col-form-label">Form ID</label>
        <div class="col-4">
            <label for="example-search-input" class="col-form-label" style="float:left;">{{msg}}</label>
        </div>
      </div>
      <div class="form-group row">
        <label for="example-search-input" class="col-2 col-form-label">Request Date</label>
        <div class="col-4">
          <input class="form-control" type="search" v-model="requestDate">
        </div>
        <label for="example-search-input" class="col-2 col-form-label">Timeoff ID</label>
        <div class="col-4">
          <input class="form-control" type="text" v-model="timeoff">
        </div>
      </div>
      <div class="form-group row">
        <label for="example-search-input" class="col-2 col-form-label">Employee ID</label>
        <div class="col-4">
          <input class="form-control" type="search" v-model="employee">
        </div>
      </div>
      <hr>
     <div class="form-group row">
       <label for="example-search-input" class="col-2 col-form-label">from</label>
       <div class="col-4">
         <input class="form-control" type="search"v-model="startDateTime">
       </div>
       <label for="example-search-input" class="col-2 col-form-label">to</label>
       <div class="col-4">
         <input class="form-control" type="search" v-model="toDateTime">
       </div>
     </div>
     <hr>
     <div class="form-group row">
       <label for="example-search-input" class="col-3 col-form-label">Timeoff Request Reason</label>
       <div class="col-9">
         <textarea name="name" rows="8" cols="80" class="form-control" v-model="timeoffReason"></textarea>
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
       <button class="btn btn-outline-primary" v-on:click="AddTimeoffHistory()">Submit Timeoff Request</button>
     <hr>
    </div>
</div>

</template>
<script>
import axios from 'axios'
export default {
  props: ['msg'],
  data () {
    return {
      id: '',
      requestDate: '',
      employee: '',
      timeoff: '',
      timeoffReason: '',
      startDateTime: '',
      toDateTime: '',
      supervisorApprovalDate: '',
      managerApprovalDate: ''
    }
  },
  methods: {
    AddTimeoffHistory: function () {
      var app = this
      axios.post('http://localhost:8123/api/timeoffHistory/', {
        id: app.msg,
        requestDate: app.requestDate,
        employee: {
          id: app.employee
        },
        timeoff: {
          id: app.timeoff
        },
        timeoffReason: app.timeoffReason,
        startDateTime: app.startDateTime,
        toDateTime: app.toDateTime,
        supervisorApprovalDate: app.supervisorApprovalDate,
        managerApprovalDate: app.managerApprovalDate
      }, {headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(
        console.log('post success')
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
