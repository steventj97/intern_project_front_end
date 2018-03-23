<template lang="html">
  <center>
    <div class="card">
      <div class="alert alert-info alert-dismissable" id="alert">
        <button v-on:click="close" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Success!</strong> Timeoff Category successfully Deleted.
      </div>
      <div class="card-header">
        Overtime category form
      </div>
      <div class="card-block">
        <div class="form-group row">
          <label for="example-search-input" class="col-2 col-form-label">Overtime Catgory ID</label>
          <div class="col-10">
            <input class="form-control" type="search" id="example-search-input" v-model="id">
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-2 col-form-label">Type</label>
          <div class="col-10">
            <input class="form-control" type="search" id="example-search-input" v-model="type">
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-2 col-form-label">Compensation Rate</label>
          <div class="col-10">
            <input class="form-control" type="search" id="example-search-input" v-model="compensationRate">
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-2 col-form-label">Rate Multiplier</label>
          <div class="col-10">
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
  data () {
    return {
      id: '',
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
    AddPolicy: function () {
      var app = this
      axios.post('http://localhost:8123/api/overtimepolicy/', {
        id: app.id,
        type: app.type,
        compensationRate: app.compensationRate,
        multiplier: app.multiplier
      }, {headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(function (response) {
        var x = document.getElementById('alert')
        x.style.display = 'block'
        x.style.transition = '2s'
      }).catch(
        console.log('post unsuccess')
      )
    }
  }
}
</script>
<style lang="css">
#alert{
  display: none;
}
</style>
