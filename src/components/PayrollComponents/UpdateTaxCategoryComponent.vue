<template lang="html">
  <center>
    <div class="card">
      
        <div class="alert alert-info alert-dismissable" id="alert">
        <button v-on:click="close" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Success!</strong> Timeoff Category successfully Deleted.
      </div>
      <div class="alert alert-danger alert-dismissable" id="alert2">
        <button v-on:click="close2" id="close" class="close" data-dismiss="alert" aria-label="close">&times;</button>
        <strong>Failed!</strong> Timeoff Category is used in other data.
      </div>

      <div class="card-header">
        PPH 21 Tax Regulation form
      </div>
      <div class="card-block">
        <div class="form-group row">
          <label class="col-3 col-form-label">Tax Regulation ID</label>
          <div class="col-9">
            <label for="example-search-input" class="col-form-label" style="float:left;">{{msg}}</label>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-3 col-form-label">Tax Regulation Type</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="taxRegulation">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-3 col-form-label">PKP</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="pkp">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-3 col-form-label">PTKP</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="ptkp">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-3 col-form-label">Marriage Status</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="marriageStatus">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-3 col-form-label">jumlah tanggungan</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="tanggungan">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-3 col-form-label">Status NPWP</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="hasNpwp">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-3 col-form-label">Working Status</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="workingStatus">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-3 col-form-label">percent Reduction</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="percentReduction">
          </div>
        </div>
        <button type="button" class="btn btn-outline-primary" v-on:click="AddTaxCategory()">Insert or Update</button>
      </div>
    </div>
  </center>
</template>

<script>
import axios from 'axios'
export default {
  props: ['msg'],
  name: '',
  data () {
    return {
      id: '',
      taxRegulation: '',
      pkp: '',
      ptkp: '',
      marriageStatus: '',
      tanggungan: '',
      hasNpwp: '',
      workingStatus: '',
      percentReduction: ''
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
      axios.post('http://localhost:8123/api/Pph21TaxGroup/', {
        id: app.id,
        taxRegulation: app.taxRegulation,
        pkp: app.pkp,
        ptkp: app.ptkp,
        marriageStatus: app.marriageStatus,
        tanggungan: app.tanggungan,
        hasNpwp: app.hasNpwp,
        workingStatus: app.workingStatus,
        percentReduction: app.percentReduction
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
#alert{
  display: none;
}
#alert2{
  display: none;
}
</style>
