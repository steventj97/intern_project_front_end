<template>
  <div class="">
    <div class="alert alert-info alert-dismissable" id="alert">
        <button v-on:click="close" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Success!</strong> Department Data successfully Deleted.
      </div>
    <hr>
    <div class="row">
      <div class="col-md-12">
        <label style="padding-top: 6px;">Overtime Adjusment</label>
      </div>

    </div>
    <hr>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Request Date</th>
          <th>Employee ID</th>
          <th>Overtime Type</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="overtime in overtimeHistory">
          <td>{{overtime.id}}</td>
          <!-- moment("dddd, MMMM Do YYYY, h:mm:ss a") -->
          <td>{{overtime.requestDate | moment("MMMM Do YYYY") }}</td>
          <td>{{overtime.employee.id}}</td>
          <td>{{overtime.overtime.type}}</td>
          <td>  {{overtime.compensation | currency}}</td>
          <td>
              <button type="button" class="btn btn-outline-primary" style="margin:auto;" v-on:click="toggle_update(overtime)" value="update">Update</button>
              <button class="btn btn-outline-danger"style="margin:auto;" v-on:click="delete_data(overtime)">Delete</button>          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
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
  methods: {
    close: function () {
      var x = document.getElementById('alert')
      x.style.display = 'none'
      x.style.transition = '0.5s'
    },
    delete_data: function (department) {
      axios.delete('http://localhost:8123/api/OvertimeHistory/' + department.id)
      .then(res => {
        console.log(res)
        console.log('it works')
        // location.reload()
        var app = this
    // var idcons = 1
        axios.get('http://localhost:8123/api/OvertimeHistory/')
        .then(function (response) {
          app.overtimeHistory = response.data
          var x = document.getElementById('alert')
          x.style.display = 'block'
          x.style.transition = '2s'
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    toggle_update: function (overtime) {
      this.obj.option = 'updatehistory'
      this.obj.id = overtime.id
      console.log(this.obj)
      this.$emit('toggle', this.obj)
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
</style>
