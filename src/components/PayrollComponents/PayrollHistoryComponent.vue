<template>
    
  <div class="">
    <hr>
    <div class="row">
      <div class="col-md-9 ">
        <label style="padding-top: 6px;">Payroll History List</label>
      </div>
      <div class="col-md-3">
        <button type="button" class="btn btn-outline-primary" value="add" v-on:click ="export_doc('payroll_history.csv')">Export Document CSV</button>
      </div>
    </div>
    <hr>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>No</th>
          <th>Employee ID</th>
          <th>Payroll Period</th>
          <th>Payroll amount</th>
          <!-- <th>Action</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="timesheet in TimesheetData">
          <td>{{timesheet.period.id}}</td>
          <td>{{timesheet.employee.id}}</td>
          <td>{{ timesheet.period.month }}</td>
          <td>  {{timesheet.present}} Hours | Rp {{timesheet.payroll ? timesheet.payroll : '50000'}}   </td>
          <!-- <td>
            <div class="col-md-12 row">
              <button type="button" class="btn btn-outline-primary  " style="margin:auto;" v-on:click="toggle_update(overtime)" value="update">Update</button>
              <button type="button" class="btn btn-outline-danger " value="add">Danger</button>
            </div>
          </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import auth from '../../auth'
import axios from 'axios'
export default {
  data () {
    return {
      TimesheetData: '',
      PayrollData: '',
      TimeoffData: '',
      OvertimeData: '',
      EmployeeData: '',
      Timesheetperiod: '',
      present: '',
      payrollPerHours: ''
    }
  },
  created: function () {
    var app = this
    axios.get('http://localhost:8123/api/TimesheetData/')
      .then(function (response) {
        app.TimesheetData = response.data
      })
    axios.get('http://localhost:8123/api/TimeoffHistory/')
      .then(function (response) {
        app.TimeoffData = response.data
      })
    axios.get('http://localhost:8123/api/OvertimeHistory/')
      .then(function (response) {
        app.OvertimeData = response.data
      })
    axios.get('http://localhost:8123/api/ProfileEmployee/')
      .then(function (response) {
        app.EmployeeData = response.data
      })
    axios.get('http://localhost:8123/api/TimesheetPeriod/')
      .then(function (response) {
        app.Timesheetperiod = response.data
      })
    axios.get('http://localhost:8123/api/PayrollData/')
      .then(function (response) {
        app.PayrollData = response.data
        app.Timesheetperiod.forEach(period => {
          console.log(app.EmployeeData)
          app.EmployeeData.forEach(employee => {
            let payrollPerHours = app.PayrollData.find(payroll => {
              return payroll.department.id === employee.departmentCategory.id && payroll.position.id === employee.positionCategory.id
            }).payrollPerHours
            let timesheet = app.TimesheetData.find(timesheet => {
              return timesheet.period.id === period.id && timesheet.employee.id === employee.id
            })
            if (timesheet !== undefined) {
              timesheet.payroll = payrollPerHours
            }
          })
        })
      })
  },
  methods: {
    countProperties: function (obj) {
      var count = 0
      for (var property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
          count++
        }
      }
      return count
    },
    export_doc: function (filename) {
      var csv = []
      var rows = document.querySelectorAll('table tr')
      for (var i = 0; i < rows.length; i++) {
        var row = []
        var cols = rows[i].querySelectorAll('td, th')
        for (var j = 0; j < cols.length - 1; j++) {
          row.push(cols[j].innerText)
        }
        csv.push(row.join(','))
      }
      auth.download_csv(csv.join('\n'), filename)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table td, th{
  text-align: center;
  float:none;
}
</style>
