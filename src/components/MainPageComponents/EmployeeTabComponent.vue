<template>
<div onload="displayEmployee()">
    <div class="col-md-12">
             <div id="element1">
                 <hr>
                 <div class="row">
                   <div class="col-md-3 ">
                    <button type="button" class="btn btn-outline-primary btn-block" v-on:click="toggle" value="add">Add Employee Data</button>
                   </div>
                   <div class="col-md-6">
                     <label style="padding-top: 6px;">Employee List</label>
                   </div>
                    <div class="col-md-3">
                     <button type="button" class="btn btn-outline-primary" value="add" v-on:click ="export_doc('employee_list.csv')">Export Document CSV</button>
                    </div>
                 </div>
                 <hr>
                 <table class="table col-md-12 table-bordered">
                   <thead>
                     <tr>
                       <th align="center">No</th>
                       <th align="center">Firstname</th>
                       <th align="center">Position</th>
                       <th align="center">Gender</th>
                       <th align="center">Action</th>
                    </tr>
                   </thead>
                   <tbody>
                     <tr v-for="employee in employeeObject">
                       <td>{{employee.id}}</td>
                       <td>{{employee.employeeName}}</td>
                       <td>{{employee.positionCategory.positionName}}</td>
                       <td>{{employee.gender}}</td>
                       <td>
                         <button type="button" class="btn btn-outline-primary btn-bloc" style="margin:auto;" v-on:click="toggle_update(employee)" value="update">Update</button>
                         <button href="#" class="btn btn-outline-danger">Delete</button>
                       </td>
                     </tr>
                   </tbody>
                 </table>
             </div>
           </div>
        </div>
 </div>

</template>

<script>
import axios from 'axios'
import auth from '../../auth'
export default {
  data () {
    return {
      employeeObject: '',
      obj: {
        option: '',
        id: ''
      }
    }
  },
  created: function () {
    var app = this
    axios.get('http://localhost:8123/api/ProfileEmployee')
    .then(function (response) {
      app.employeeObject = response.data
    })
  },
  methods: {
    toggle: function (event) {
      console.log('start the event')
      this.obj.option = event.target.value
      this.$emit('toggle', this.obj)
      console.log('end of the event' + ' ' + event.target.value)
    },
    toggle_update: function (overtime) {
      this.obj.option = 'updatehistory'
      this.obj.id = overtime.id
      console.log(this.obj)
      this.$emit('toggle', this.obj)
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
