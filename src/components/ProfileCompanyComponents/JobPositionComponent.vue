<template>
  <div class="">
    <div class="alert alert-info alert-dismissable" id="alert">
        <button v-on:click="close" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Success!</strong> Department Data successfully Deleted.
      </div>
    <hr>
    <div class="row">
      <div class="col-md-3">
        <button type="button" class="btn btn-outline-primary" value="addposition" v-on:click ="toggle">Add position category</button>
      </div>
      <div class="col-md-6">
        <label style="padding-top: 6px;">Job Position List</label>
      </div>
      <div class="col-md-3">
        <button type="button" class="btn btn-outline-primary" value="add" v-on:click ="export_doc('job_category.csv')">Export Document CSV</button>
      </div>
    </div>
    <hr>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>position ID</th>
          <th>Position Name</th>
          <th>Position size</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="position in positionCategory">
          <td>{{position.id}}</td>
          <td>{{position.positionName}}</td>
          <td>{{position.positionNumber}}</td>
          <td>
              <button type="button" class="btn btn-outline-primary " style="margin:auto;" v-on:click="toggle_update(position)">Update</button>
             <button class="btn btn-outline-danger"style="margin:auto;" v-on:click="delete_data(position)">Delete</button>
          </td>
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
      size: '',
      positionCategory: '',
      employees: '',
      tempoCategory: '',
      obj: {
        option: '',
        id: ''
      }
    }
  },
  created: function () {
    var app = this
    // var idcons = 1
    axios.get('http://localhost:8123/api/PositionCategory/')
    .then(function (response) {
      app.positionCategory = response.data
      axios.get('http://localhost:8123/api/ProfileEmployee/')
      .then(function (response) {
        app.employees = response.data
        for (const key of Object.keys(app.positionCategory)) {
          app.tempoCategory = app.positionCategory[key]
          for (const key of Object.keys(app.employees)) {
            if (app.employees[key].positionCategory.positionName === app.tempoCategory.positionName) {
              app.tempoCategory.positionNumber = app.tempoCategory.positionNumber + 1
            }
          }
        }
      })
    })
  },
  methods: {
    close: function () {
      var x = document.getElementById('alert')
      x.style.display = 'none'
      x.style.transition = '0.5s'
    },
    delete_data: function (department) {
      axios.delete('http://localhost:8123/api/PositionCategory/' + department.id)
      .then(res => {
        console.log(res)
        console.log('it works')
        // location.reload()
        var app = this
    // var idcons = 1
        axios.get('http://localhost:8123/api/PositionCategory/')
        .then(function (response) {
          app.positionCategory = response.data
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
    toggle_update: function (position) {
      this.obj.option = 'updateposition'
      this.obj.id = position.id
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
#alert{
  display: none;
} 
</style>
