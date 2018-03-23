<template lang="html">
  <div class="AddEmployeePage">
    <center>
      <div class="alert alert-info alert-dismissable" id="alert">
        <button v-on:click="close" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Success!</strong> Position Data successfully input.
      </div>
      <div class="formfield">
            <hr>
                <div class="row">
                    <h4 style="padding-top: 6px;" class="label col-md 9">Position Input</h4>
                </div>
            <hr>
        <div class="row">
          <div class="card-block">
                <div class="form-group row">
                    <label class="col-2 col-form-label">Timesheet ID</label>
                    <div class="col-10">
                        <input class="form-control" type="text" placeholder="Timesheet id" v-model="id">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-2 col-form-label">Employee ID</label>
                    <div class="col-10">
                            <input class="form-control" type="text" placeholder="Employee ID" v-model="employee">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-2 col-form-label">Period ID</label>
                    <div class="col-10">
                            <input class="form-control" type="text" placeholder="Period ID" v-model="period">
                    </div>
                </div>
                <button class="btn btn-outline-primary" v-on:click="AddPeriod">Submit</button>
            </div>   
        </div>
        <hr>
      </div>
    </center>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {
  },
  name: 'AddEmployeePage',
  data () {
    return {
      id: '',
      employee: '',
      period: ''
    }
  },
  methods: {
    close: function () {
      var x = document.getElementById('alert')
      x.style.display = 'none'
      x.style.transition = '0.5s'
    },
    AddPeriod: function () {
      var app = this
      axios.post('http://localhost:8123/api/TimesheetData/', {
        id: app.id,
        period: {
          id: app.period
        },
        employee: {
          id: app.employee
        },
        present: 40,
        ovetime: 0,
        timeoff: 0
      }, {headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(
        console.log('post success')
      ).catch(
        console.log('post unsuccess')
      )
      var x = document.getElementById('alert')
      x.style.display = 'block'
      x.style.transition = '2s'
    }
  }
}
</script>
<style lang="css">

#alert{
  display: none;
}
</style>
