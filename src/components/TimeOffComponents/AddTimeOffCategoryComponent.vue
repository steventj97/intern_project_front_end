<template lang="html">
  <center>
    <div class="card">
      <div class="alert alert-info alert-dismissable" id="alert">
        <button v-on:click="close" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Success!</strong> Department Data successfully Deleted.
      </div>
      <div class="card-header">
        Time Off Policy Form
      </div>
      <div class="card-block">
        <div class="form-group row">
          <label for="example-search-input" class="col-2 col-form-label">Time Off ID</label>
          <div class="col-4">
            <input class="form-control" type="search" id="example-search-input" v-model="id">
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-2 col-form-label">Type</label>
          <div class="col-4">
            <input class="form-control" type="search" id="example-search-input" v-model="type">
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-2 col-form-label">Maximum days</label>
          <div class="col-4">
            <input class="form-control" type="search" id="example-search-input" v-model="maximumDay">
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-2 col-form-label">Concurency</label>
          <div class="col-4">
            <input class="form-control" type="search" id="example-search-input" v-model="concurency">
          </div>
          <label for="example-search-input" class="col-2 col-form-label">Accumulation</label>
          <div class="col-4">
            <input class="form-control" type="search" id="example-search-input" v-model="accumulation">
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-2 col-form-label">Privilleges</label>
        </div>
        <hr>
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
      maximumDay: '',
      concurency: '',
      accumulation: ''
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
      axios.post('http://localhost:8123/api/timeoffpolicy', {
        id: app.id,
        type: app.type,
        maximumDay: app.maximumDay,
        concurency: app.concurency,
        accumulation: app.accumulation
      })
        .then(function (response) {
          app.timeoffPolicy = response.data
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
