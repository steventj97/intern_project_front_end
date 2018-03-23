<template>
  <div class="">
    <div class="alert alert-info alert-dismissable" id="alert">
        <button v-on:click="close" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Success!</strong> Timeoff Category successfully Deleted.
      </div>
    <hr>
    <div class="row">
      <div class="col-md-3">
        <button type="button" class="btn btn-outline-primary btn-block" v-on:click="toggle" value="add">Add Time Off Policies</button>
      </div>
      <div class="col-md-6">
        <label style="padding-top: 6px;">Time Off Policy List</label>
      </div>
      <div class="col-md-3">
        <button type="button" class="btn btn-outline-primary" value="add" v-on:click ="export_doc('timeoff_policy.csv')">Export Document CSV</button>
      </div>
    </div>
    <hr>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Maximum Days</th>
          <th>Concurence</th>
          <th>Accumulation</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="timeoff in timeoffPolicy">
          <td>{{timeoff.id}}</td>
          <td>{{timeoff.type}}</td>
          <td>{{timeoff.maximumDay}} Days</td>
          <td>{{timeoff.concurence}} Days</td>
          <td>{{timeoff.accumulation}} Year</td>
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
import auth from '../../auth'
import axios from 'axios'
export default {
  props: ['opt'],
  data () {
    return {
      timeoffPolicy: '',
      obj: {
        option: '',
        id: ''
      }
    }
  },
  created: function () {
    var app = this
    axios.get('http://localhost:8123/api/timeoffpolicy/')
    .then(function (response) {
      app.timeoffPolicy = response.data
    })
  },
  methods: {
    close: function () {
      var x = document.getElementById('alert')
      x.style.display = 'none'
      x.style.transition = '0.5s'
    },
    delete_data: function (department) {
      axios.delete('http://localhost:8123/api/timeoffpolicy/' + department.id)
      .then(res => {
        console.log(res)
        console.log('it works')
        // location.reload()
        var app = this
    // var idcons = 1
        axios.get('http://localhost:8123/api/timeoffpolicy/')
        .then(function (response) {
          app.timeoffPolicy = response.data
          var x = document.getElementById('alert')
          x.style.display = 'block'
          x.style.transition = '2s'
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    toggle: function (event) {
      console.log('start the event')
      this.obj.option = event.target.value
      console.log(this.obj)
      this.$emit('toggle', this.obj)
      console.log('end of the event' + ' ' + this.obj.option)
    },
    toggle_update: function (timeoff) {
      this.obj.option = 'update'
      this.obj.id = timeoff.id
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
#alert{
  display: none;
}
</style>
