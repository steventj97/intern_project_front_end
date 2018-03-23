<template>
  <div class="">
    <hr>
    <div class="row">
      <div class="col-md-9">
        <label style="padding-top: 6px;">Overtime History List</label>
      </div>
      <div class="col-md-3">
        <button type="button" class="btn btn-outline-primary" value="add" v-on:click ="export_doc('overtime_history.csv')">Export Document CSV</button>
      </div>
    </div>
    <hr>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Employee ID</th>
          <th>Name</th>
          <th>Overtime Date</th>
          <th>Total Hour</th>
          <th>Overtime type</th>
          <th>Payroll amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="overtime in overtimeHistory">
          <!-- moment("dddd, MMMM Do YYYY, h:mm:ss a") -->
          <td>{{overtime.id}}</td>
          <td>{{overtime.employee.id}}</td>
          <td>{{overtime.employee.employeeName}}</td>
          <td>{{overtime.requestDate | moment("MMMM Do YYYY") }}</td>
          <td>{{overtime.overtimeHours}}</td>
          <td>{{overtime.overtime.type}}</td>
          <td>{{overtime.compensation | currency}}</td>
        </tr>
      </tbody>
    </table>
  </div>  
</template>
<script>
import axios from 'axios'
import auth from '../../auth'
export default {
  data () {
    return {
      overtimeHistory: '',
      obj: {
        option: '',
        id: ''
      }
    }
  },
  created: function () {
    var app = this
    axios.get('http://localhost:8123/api/OvertimeHistory/')
    .then(function (response) {
      app.overtimeHistory = response.data
    })
  },
  method: {
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
