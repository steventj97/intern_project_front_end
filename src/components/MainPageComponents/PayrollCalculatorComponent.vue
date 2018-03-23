<template>
  <div class="card">
    <div class="card-header">
      <h5>Payroll Calculator</h5>
    </div>
    <div class="card-block">
        <hr>
          <h5>Employee Information</h5>
        <hr>
        <div class="form-group row">
          <label for="example-search-input" class="col-2 col-form-label">Employee ID :</label>
          <div class="col-4">
            <input class="form-control block" type="search" value="Insert ID" id="example-search-input">
          </div>
        </div>
        <div class="form-group row">
          <label for="example-search-input" class="col-2 col-form-label">Check Date :</label>
          <div class="col-4">
            <input class="form-control block" type="search" value="28 /12 /2017" id="example-search-input">
          </div>
        </div>
        <hr>
          <h5>Earnings Calculation</h5>
        <hr>
        <table class="table col-md-12" style="clear:both;">
          <thead>
            <tr>
              <th align="center">Earnings</th>
              <th align="center">Rate</th>
              <th align="center">Hours</th>
              <th align="center">Pay</th>
              <th align="center">Total</th>
           </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <hr>
          <h5>Tax Calculation</h5>
        <hr>
        <table class="table col-md-12" style="">
          <thead>
            <tr>
              <th align="center">Tax Type</th>
              <th align="center">Marriage Status</th>
              <th align="center">Exmption</th>
              <th align="center">Dependents</th>
              <th></th>
              <th align="center">Percent</th>
              <th>Flat</th>
           </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="">
                  <div class="">
                    <label for="example-search-input" class="col-md-12 form-label">{{type}} tax</label>
                    <label for="example-search-input" class="col-md-12 form-label">(primary)</label>
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div class="">
                  <div class="">
                    <label for="example-search-input" class="col-md-12 form-label">Federal Tax</label>
                    <label for="example-search-input" class="col-md-12 form-label">(additional)</label>
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <div class="">
                  <div class="">
                    <input class="form-control" type="search" value="" id="example-search-input">
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <hr>
        <button type="button" name="button" class="btn btn-outline-primary">Calculate Gross Tax</button>
        <hr>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: 'Regional'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
