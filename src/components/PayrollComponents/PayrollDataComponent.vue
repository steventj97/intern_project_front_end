<template>    
  <div class="">
      <div class="alert alert-info alert-dismissable" id="alert">
        <button v-on:click="close" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Success!</strong> Timeoff Category successfully Deleted.
      </div>
      <div class="alert alert-danger alert-dismissable" id="alert2">
        <button v-on:click="close2" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Failed!</strong> Timeoff Category is used in other data.
      </div>

    <hr>
    <div class="row">
        <div class="col-md-3 ">
          <button type="button" class="btn btn-outline-primary btn-block" v-on:click="toggle" value="addpayroll">Add Payroll Data</button>
        </div>
        <div class="col-md-6">
          <label style="padding-top: 6px;">Payroll Category Data</label>
        </div>
        
        <div class="col-md-3">
        <button type="button" class="btn btn-outline-primary" value="add" v-on:click ="export_doc('payroll_category.csv')">Export Document CSV</button>
      </div>
      </div>
    <hr>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>No</th>
          <th>Department Name</th>
          <th>Position Name</th>
          <th>Rate per Hour</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="PayrollData in PayrollData">
          <td>{{PayrollData.id}}</td>
          <td>{{PayrollData.department.departmentName}}</td>
          <td>{{PayrollData.position.positionName}}</td>
          <td>{{PayrollData.payrollPerHours|currency}}</td>
          <td>
            <div class="col-md-12 row">
              <button type="button" class="btn btn-outline-primary btn-bloc col-md-5" style="margin:auto;" v-on:click="toggle_update(PayrollData)" value="updatecategory">Update</button>
              <button class="btn btn-outline-danger"style="margin:auto;" v-on:click="delete_data(PayrollData)">Delete</button>
            </div>
          </td>
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
      PayrollData: '',
      obj: {
        option: '',
        id: ''
      }
    }
  },
  created: function () {
    var app = this
    axios.get('http://localhost:8123/api/PayrollData')
    .then(function (response) {
      app.PayrollData = response.data
    })
  },
  methods: {
    toggle_update: function (timeoff) {
      this.obj.option = 'updatecategory'
      this.obj.id = timeoff.id
      console.log(this.obj)
      this.$emit('toggle', this.obj)
    },
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
    delete_data: function (department) {
      axios.delete('http://localhost:8123/api/PayrollData/' + department.id)
      .then(res => {
        console.log(res)
        console.log('it works')
        // location.reload()
        var app = this
    // var idcons = 1
        axios.get('http://localhost:8123/api/PayrollData/')
        .then(function (response) {
          app.PayrollData = response.data
          var x = document.getElementById('alert')
          x.style.display = 'block'
          x.style.transition = '2s'
        })
      })
      .catch(function (error) {
        console.log(error)
        var x = document.getElementById('alert2')
        x.style.display = 'block'
        x.style.transition = '2s'
      })
    },
    toggle: function (event) {
      console.log('start the event')
      this.obj.option = event.target.value
      this.$emit('toggle', this.obj)
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
.table td, th{
  text-align: center;
  float:none;
}
#alert{
  display: none;
}
#alert2{
  display: none;
}
</style>
