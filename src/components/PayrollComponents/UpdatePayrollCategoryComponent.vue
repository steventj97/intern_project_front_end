<template lang="html">
  <center>
    <div class="card">
      <div class="card-header">
        Payroll Data form
      </div>
      <div class="card-block">
        <div class="form-group row">
          <label class="col-3 col-form-label">Payroll ID</label>
          <div class="col-9">
            <label for="example-search-input" class="col-form-label" style="float:left;">{{msg}}</label>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-3 col-form-label">Position ID</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="positionid ">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-3 col-form-label">Department ID</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="departmentid">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-3 col-form-label">Payroll/Hour</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="payrollhour">
          </div>
        </div>
        </div>
        <button type="button" class="btn btn-outline-primary col-md-2" v-on:click="AddTaxCategory()">Insert or Update</button>
        <div class="alert alert-info alert-dismissable" id="alert">
        <button v-on:click="close" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Success!</strong> Timeoff Category successfully Deleted.
      </div>
      <div class="alert alert-danger alert-dismissable" id="alert2">
        <button v-on:click="close2" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Failed!</strong> Timeoff Category is used in other data.
      </div>

        <br>
      </div>
    </div>
  </center>
</template>

<script>
import axios from 'axios'
export default {
  props: ['msg'],
  data () {
    return {
      id: '',
      positionid: '',
      departmentid: '',
      payrollhour: ''
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
    AddTaxCategory: function () {
      var app = this
      axios.post('http://localhost:8123/api/PayrollData/', {
        id: app.msg,
        position: {
          id: app.positionid
        },
        department: {
          id: app.departmentid
        },
        payrollPerHours: app.payrollhour
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
  }
}
</script>
<style lang="css">
#alert{

  margin-top: 3%;
  display: none;
}
#alert2{
  display: none;
}
</style>
