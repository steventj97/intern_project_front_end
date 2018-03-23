<template lang="html">
  <div class="AddEmployeePage">
    <center>
      <div class="formfield">
        <hr>
        <div class="row">
          <h4 style="padding-top: 6px;" class="label col-md 9">Employee Input</h4>
        </div>
        <hr>
        <div class="row">
          <div class="card-block">
            <div class="form-group row">
              <label class="col-2 col-form-label">Employee ID</label>
              <div class="col-10">
                <label class="la col-form-label">{{msg}}</label>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Employee Name</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="employee Name" v-model="name">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Identity ID</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="KTP or SIM or Passport" v-model="ktp">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Address</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="Address" v-model="address">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Pos Code</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="Pos Code" v-model="posCode">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Contact Number</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="Contact Number" v-model="nomorHp">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Email</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="Contact Number" v-model="email">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Birth Place</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="Birth Place" v-model="birthPlace">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Gender</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="Gender" v-model="gender">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Married Status</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="Married Status" v-model="marriedStatus">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">ethnic</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="ethnic" v-model="ethnic">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">religion</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="religion" v-model="religion">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">language</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="language" v-model="language">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">spouse name</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="spouse name" v-model="spouseName">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">number of child</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="number of child" v-model="numberOfChild">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Resign reason</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="reason resign" v-model="resignReason">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Pas Photo</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="position" v-model="pasPhoto">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Department</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="position" v-model="departmentCategory">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-2 col-form-label">Position</label>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="position" v-model="positionCategory">
              </div>
            </div>
            <button class="btn btn-outline-primary" v-on:click="AddEmployee">Submit</button>
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
  props: ['msg'],
  components: {
  },
  name: 'AddEmployeePage',
  data () {
    return {
      id: '',
      name: '',
      ktp: '',
      address: '',
      posCode: '',
      nomorHp: '',
      email: '',
      birthPlace: '',
      gender: '',
      marriedStatus: '',
      ethnic: '',
      religion: '',
      language: '',
      spouseName: '',
      numberOfChild: '',
      resignReason: '',
      position: '',
      pasPhoto: '',
      departmentCategory: '',
      positionCategory: ''
    }
  },
  methods: {
    AddEmployee: function () {
      var app = this
      axios.post('http://localhost:8123/api/ProfileEmployee/', {
        id: app.msg,
        name: app.employeeName,
        ktp: app.identityNo,
        address: app.address,
        posCode: app.posCode,
        nomorHp: app.contactNumber,
        email: app.email,
        birthPlace: app.birthPlace,
        gender: app.gender,
        marriedStatus: app.marriedStatus,
        ethnic: app.ethnic,
        religion: app.religion,
        language: app.language,
        spouseName: app.spouseName,
        numberOfChild: app.numberOfChild,
        resignReason: app.resignReason,
        position: app.resignReason,
        pasPhoto: app.pasPhoto,
        departmentCategory: {
          id: app.departmentCategory
        },
        positionCategory: {
          id: app.positionCategory
        }
      }, {headers: {
        'Content-Type': 'application/json'
      }
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
<style lang="css">
.la {
  float: left;
}
</style>
