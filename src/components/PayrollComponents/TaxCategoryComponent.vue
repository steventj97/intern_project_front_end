<template>
  <div class="">
    <hr>
    <div class="row">
      <div class="col-md-3">
        <button type="button" class="btn btn-outline-primary btn-block" v-on:click="toggle" value="addTax">Add Tax Regulation</button>
      </div>
      <div class="col-md-6">
        <label style="padding-top: 6px;">Tax Regulation List</label>
      </div>
      
      <div class="col-md-3">
        <button type="button" class="btn btn-outline-primary" value="add" v-on:click ="export_doc('tax_category.csv')">Export Document CSV</button>
      </div>
    </div>
    <hr>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Regulation</th>
          <th>PTKP</th>
          <th>Status Kawin</th>
          <th>Percent</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="taxCategory in taxCategory">
          <td>{{taxCategory.id}}</td>
          <td>{{taxCategory.taxRegulation}}</td>
          <td>{{taxCategory.ptkp | currency}}</td>
          <td>{{taxCategory.marriageStatus}}</td>
          <td>{{taxCategory.percentReduction}}%</td>
          <td>
            <div class="col-md-12 row">
              <button type="button" class="btn btn-outline-primary btn-bloc col-md-5" style="margin:auto;" v-on:click="toggle_update(taxCategory)" value="update">Update</button>
              <button type="button" class="btn btn-outline-danger btn-block col-md-5" v-on:click="" value="update">Danger</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import auth from '../../auth'
export default {
  props: ['opt'],
  data () {
    return {
      taxCategory: '',
      obj: {
        option: '',
        id: ''
      }
    }
  },
  created: function () {
    var app = this
    axios.get('http://localhost:8123/api/Pph21TaxGroup/')
    .then(function (response) {
      app.taxCategory = response.data
    })
  },
  methods: {
    toggle: function (event) {
      console.log('start the event')
      this.obj.option = event.target.value
      console.log(this.obj)
      this.$emit('toggle', this.obj)
      console.log('end of the event' + ' ' + this.obj.option)
    },
    toggle_update: function (taxCategory) {
      this.obj.option = 'updateTax'
      this.obj.id = taxCategory.id
      console.log(this.obj)
      this.$emit('toggle', this.obj)
    },
    export_doc: function (filename) {
      var csv = []
      var rows = document.querySelectorAll('table tr')
      for (var i = 0; i < rows.length; i++) {
        var row = []
        var cols = rows[i].querySelectorAll('td, th')
        for (var j = 0; j < cols.length - 1; j++) {
          row.push(cols[j].innerText)
        }
        csv.push(row.join(','))
      }
      auth.download_csv(csv.join('\n'), filename)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table td, th{
  text-align: center;
  float:none;
}
</style>
