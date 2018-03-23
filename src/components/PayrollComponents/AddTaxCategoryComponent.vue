<template lang="html">
  <center>
    <div class="card">
      <div class="card-header">
        PPH 21 Tax Regulation form
      </div>
      <div class="card-block">
        <div class="form-group row">
          <label class="col-3 col-form-label">Tax Regulation ID</label>
          <div class="col-9">
            <input class="form-control" type="search" id="example-search-input" v-model="id">
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
</style>
