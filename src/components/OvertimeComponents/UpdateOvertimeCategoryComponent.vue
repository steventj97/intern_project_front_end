<template>
  <center>
    <div class="card">
      <div class="card-header">
        Overtime category form
      </div>
      <div class="alert alert-info alert-dismissable" id="alert">
        <button v-on:click="close" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Success!</strong> Timeoff Category successfully Deleted.
      </div>
      <div class="alert alert-danger alert-dismissable" id="alert2">
        <button v-on:click="close2" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Failed!</strong> Timeoff Category is used in other data.
      </div>

      <div class="card-block">
        <div class="form-group row">
          <label for="example-search-input" class="col-3 col-form-label">Overtime Catgory ID</label>
          <div class="col-9">
            <label for="example-search-input" class="col-form-label" style="float:left;">{{msg}}</label>
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-3 col-form-label">Type</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="type">
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-3 col-form-label">Compensation Rate</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="compensationRate">
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-3 col-form-label">Rate Multiplier</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="multiplier">
          </div>
        </div>
        <button type="button" class="btn btn-outline-primary" v-on:click="AddPolicy()">Insert or Update</button>
      </div>
    </div>
  </center>
</template>
<script>
import axios from 'axios'
export default {
  props: ['msg'],
  name: '',
  components: {

  },
  data () {
    return {
      option: '',
      type: '',
      compensationRate: '',
      multiplier: ''
    }
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
    AddPolicy: function () {
      var app = this
      axios.post('http://localhost:8123/api/overtimepolicy/', {
        id: app.msg,
        type: app.type,
        compensationRate: app.compensationRate,
        multiplier: app.multiplier
      }, {headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(function (response) {
        app.PayrollData = response.data
        var x = document.getElementById('alert')
        x.style.display = 'block'
        x.style.transition = '2s'
      })
      .catch(function (error) {
        console.log(error)
        var x = document.getElementById('alert2')
        x.style.display = 'block'
        x.style.transition = '2s'
      })
    }
  },
  created: function () {
    var app = this
    console.log(app.msg)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#alert{
  display: none;
}
#alert2{
  display: none;
}
</style>
