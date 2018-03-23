<template>
  <center>
    <div class="card">
      <div class="card-header">
        Overtime category form
      </div>
      <div class="card-block">
        <div class="form-group row">
          <label for="example-search-input" class="col-3 col-form-label">Overtime Catgory ID</label>
          <div class="col-9">
            <label for="example-search-input" class="col-form-label" style="float:left;">{{msg}}</label>
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-3 col-form-label">Type</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="type">
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-3 col-form-label">Compensation Rate</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="compensationRate">
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-3 col-form-label">Rate Multiplier</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="multiplier">
          </div>
        </div>
        <button type="button" class="btn btn-outline-primary" v-on:click="AddPolicy()">Insert or Update</button>
      </div>
    </div>
  </center>
</template>
<script>
import axios from 'axios'
export default {
  props: ['msg'],
  name: '',
  components: {

  },
  data () {
    return {
      option: '',
      type: '',
      compensationRate: '',
      multiplier: ''
    }
  },
  methods: {
    close: function () {
      var x = document.getElementById('alert')
      x.style.display = 'none'
      x.style.transition = '0.5s'
    },
    AddOvertimeHistory: function () {
      var app = this
      axios.post('http://localhost:8123/api/OvertimeHistory/', {
        id: app.msg,
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
      }).catch(
        console.log('post unsuccess')
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
