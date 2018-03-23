<template lang="html">
  <div class="AddDepartmentPage">
    <center>
      <div class="alert alert-info alert-dismissable" id="alert">
        <button v-on:click="close" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Success!</strong> Department Data successfully input.
      </div>
      <div class="formfield">
            <hr>
                <div class="row">
                    <h4 style="padding-top: 6px;" class="label col-md 9">Department Input</h4>
                </div>
            <hr>
        <div class="row">
          <div class="card-block">
                <div class="form-group row">
                    <label class="col-2 col-form-label">Department ID</label>
                    <div class="col-10">
                        <input class="form-control" type="text" placeholder="Department id" v-model="id">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-2 col-form-label">Dept Name</label>
                    <div class="col-10">
                            <input class="form-control" type="text" placeholder="Department Name" v-model="name">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-2 col-form-label">Department size</label>
                    <div class="col-10">
                            <input class="form-control" type="text" placeholder="Department Name" v-model="number">
                    </div>
                </div>
                <button class="btn btn-outline-primary" v-on:click="AddDepartment">Submit</button>
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
  name: 'AddDepartmentPage',
  data () {
    return {
      id: '',
      name: '',
      number: ''
    }
  },
  methods: {
    close: function () {
      var x = document.getElementById('alert')
      x.style.display = 'none'
      x.style.transition = '0.5s'
    },
    AddDepartment: function () {
      var app = this
      axios.post('http://localhost:8123/api/DepartmentCategory/', {
        id: app.id,
        departmentName: app.name,
        departmentNumber: app.number
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
