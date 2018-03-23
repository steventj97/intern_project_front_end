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
      <div class="col-md-9">
        <label style="padding-top: 6px;">Timesheet Period List</label>
      </div>
      <div class="col-md-3">
        <button type="button" class="btn btn-outline-primary btn-block" v-on:click="toggle" value="addcategory">Add Timesheet Period</button>
      </div>
    </div>
    <hr>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Timesheet ID</th>
          <th>Year</th>
          <th>Month</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="TimesheetPeriod in TimesheetPeriod">
          <td>{{TimesheetPeriod.id}}</td>
          <td>{{TimesheetPeriod.month}}</td>
          <td>{{TimesheetPeriod.year}} </td>
          <td>
              <button type="button" class="btn btn-outline-primary" style="margin:auto;" v-on:click="toggle_update(TimesheetPeriod)" value="update">Update</button>
              <button class="btn btn-outline-danger"style="margin:auto;" v-on:click="delete_data(TimesheetPeriod)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: ['opt'],
  data () {
    return {
      TimesheetPeriod: '',
      obj: {
        option: '',
        id: ''
      }
    }
  },
  created: function () {
    var app = this
    axios.get('http://localhost:8123/api/TimesheetPeriod/')
    .then(function (response) {
      app.TimesheetPeriod = response.data
    })
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
    delete_data: function (department) {
      axios.delete('http://localhost:8123/api/TimesheetPeriod/' + department.id)
      .then(res => {
        console.log(res)
        console.log('it works')
        // location.reload()
        var app = this
    // var idcons = 1
        axios.get('http://localhost:8123/api/TimesheetPeriod/')
        .then(function (response) {
          app.TimesheetPeriod = response.data
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
    toggle_update: function (TimesheetPeriod) {
      this.obj.option = 'updatecategory'
      this.obj.id = TimesheetPeriod.id
      console.log(this.obj)
      this.$emit('toggle', this.obj)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.space{
  margin-top: 5%;
}
#alert{
  display: none;
}
#alert2{
  display: none;
}
</style>
