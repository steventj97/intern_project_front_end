<template>
  <div>
    <center>
    <hr>
    <div class="row">
      <div class="col-md-3">
        <button type="button" class="btn btn-outline-primary btn-block" v-on:click="toggle" value="addtimesheet">Add Timesheet Data</button>
      </div>
      <div class="col-md-6">
        <label style="padding-top: 6px;">Employee Data List</label>
      </div>
      <div class="col-md-3">
        <button type="button" class="btn btn-outline-primary" value="add" v-on:click ="export_doc('employee_data.csv')">Export Document CSV</button>
      </div>
    </div>
    <hr>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Timesheet ID</th>
          <th>Employee ID</th>
          <th>Year</th>
          <th>Month</th>
          <th>Present</th>
          <th>Overtime</th>
          <th>Timeoff</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in TimesheetData">
          <td>{{data.id}}</td>
          <td>{{data.employee.id}}</td>
          <td>{{data.period.month}}</td>
          <td>{{data.period.year}}</td>
          <td>{{data.present}} Hari</td>
          <td>{{data.overtime}} Jam</td>
          <td>{{data.timeoff}} Hari</td>
        </tr>
      </tbody>
    </table>
    </center>
  </div>
</template>
<script>
import auth from '../../auth'
import axios from 'axios'
export default {
  props: ['opt'],
  data () {
    return {
      TimesheetData: '',
      Overtime: '',
      Timeoff: '',
      obj: {
        option: '',
        id: ''
      }
    }
  },
  created: function () {
    var app = this
    axios.get('http://localhost:8123/api/TimesheetData/')
    .then(function (response) {
      app.TimesheetData = response.data
    })
  },
  methods: {
    toggle: function (event) {
      console.log('start the event')
      this.option = event.target.value
      this.$emit('toggle', this.option)
      console.log('end of the event' + ' ' + event.target.value)
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
.space{
  margin-top: 5%;
}
</style>
