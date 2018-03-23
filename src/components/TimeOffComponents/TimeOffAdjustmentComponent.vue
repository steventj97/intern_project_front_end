<template>
<div class="">
  <div class="alert alert-info alert-dismissable" id="alert">
        <button v-on:click="close" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Success!</strong> Department Data successfully Deleted.
      </div>
    <hr>
    <div class="row">
      <div class="col-md-12">
        <label style="padding-top: 6px;">Overtime History List</label>
      </div>

    </div>
    <hr>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Employee ID</th>
          <th>Name</th>
          <th>Timeoff Date</th>
          <th>Timeoff type</th>
          <th>Timeoff Reason</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="timeoff in timeoffHistory">
          <!-- moment("dddd, MMMM Do YYYY, h:mm:ss a") -->
          <td>{{timeoff.id}}</td>
          <td>{{timeoff.employee.id}}</td>
          <td>{{timeoff.employee.employeeName}}</td>
          <td>{{timeoff.requestDate | moment("MMMM Do YYYY") }}</td>
          <td>{{timeoff.timeoff.type}}</td>
          <td>{{timeoff.timeoffReason}}</td>
           <td>
              <button type="button" class="btn btn-outline-primary btn-bloc col-md-5" style="margin:auto;" v-on:click="toggle_update(timeoff)" value="update">Update</button>
              <button class="btn btn-outline-danger"style="margin:auto;" v-on:click="delete_data(timeoff)">Delete</button>
          </td>
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
      timeoffHistory: '',
      obj: {
        option: '',
        id: ''
      }
    }
  },
  created: function () {
    var app = this
    axios.get('http://localhost:8123/api/TimeoffHistory/')
    .then(function (response) {
      app.timeoffHistory = response.data
    })
  },
  methods: {
    close: function () {
      var x = document.getElementById('alert')
      x.style.display = 'none'
      x.style.transition = '0.5s'
    },
    delete_data: function (department) {
      axios.delete('http://localhost:8123/api/TimeoffHistory/' + department.id)
      .then(res => {
        console.log(res)
        console.log('it works')
        // location.reload()
        var app = this
    // var idcons = 1
        axios.get('http://localhost:8123/api/TimeoffHistory/')
        .then(function (response) {
          app.timeoffHistory = response.data
          var x = document.getElementById('alert')
          x.style.display = 'block'
          x.style.transition = '2s'
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    toggle_update: function (timeoff) {
      this.obj.option = 'updatehistory'
      this.obj.id = timeoff.id
      console.log(this.obj)
      this.$emit('toggle', this.obj)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#alert{
  display: none;
} 
</style>
