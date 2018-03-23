<template>
  <div id="element1">
      <hr>
      <div class="row">
        <div class="col-md-9">
          <label style="padding-top: 6px;">Report List</label>
        </div>
        <div class="col-md-3 ">
          <form role="form" action="">
            <button type="submit" class="btn btn-outline-primary">Add Report Category</button>
          </form>
        </div>
      </div>
      <hr>
      <table class="table col-md-12 table-bordered" style="clear:both;">
        <thead>
          <tr>
            <th align="center">No</th>
            <th align="center">Report Type</th>
            <th align="center">Month</th>
            <th align="center">Years</th>
            <th align="center">Action</th>
         </tr>
        </thead>
        <tbody>
          <tr v-for="report in report">
            <td>{{report.id}}</td>
            <td>{{report.type}}</td>
            <td>
              <input class="form-control " type="search" value="" id="example-search-input">
            </td>
            <td>
              <input class="form-control " type="search" value="" id="example-search-input">
            </td>
            <td>
              <button type='submit' class='btn btn-outline-primary'>Download Report</button>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      report: [
        {
          'id': 1,
          'type': 'Tax Report'
        },
        {
          'id': 2,
          'type': 'Salary Report'
        },
        {
          'id': 3,
          'type': 'BPJS Report'
        },
        {
          'id': 4,
          'type': 'Turnover Report'
        },
        {
          'id': 5,
          'type': 'Attandance Report'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table td, th{
  text-align: center;
}
</style>
