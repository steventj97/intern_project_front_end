<template lang="html">
  <center>
    <div class="card">
      <div class="card-header">
        Time Off Policy Update Form
      </div>
      <div class="card-block">
      <div class="form-group row">
          <label for="example-search-input" class="col-3 col-form-label">Time Off ID</label>
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
          <label for="example-search-input" class="col-3 col-form-label">Maximum days</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="maximumDay">
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-3 col-form-label">Concurency</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="concurency">
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-3 col-form-label">Accumulation</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="accumulation">
          </div>
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
  props: ['msg'],
  name: '',
  components: {

  },
  data () {
    return {
      type: '',
      maximumDay: '',
      concurency: '',
      accumulation: ''
    }
  },
  methods: {
    AddPolicy: function () {
      var app = this
      axios.post('http://localhost:8123/api/timeoffpolicy', {
        id: app.msg,
        type: app.type,
        maximumDay: app.maximumDay,
        concurency: app.concurency,
        accumulation: app.accumulation
      })
        .then(
          console.log('post success')
        ).catch(
          console.log('post unsuccess')
        )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
