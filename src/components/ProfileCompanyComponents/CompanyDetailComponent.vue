<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-block">
          <h4 class="card-title">Company Details</h4>
          <hr>
          <div class="form-group row">
            <label for="example-search-input" class="col-2 col-form-label">Company Name </label>
            <div class="col-6">
              <input class="form-control block" type="search" value="Euphoria" id="example-search-input">
            </div>
          </div>
          <div class="form-group row">
            <label for="example-search-input" class="col-2 col-form-label">Company Address </label>
            <div class="col-6">
              <input class="form-control block" type="search" value="Jln Warna No 1" id="example-search-input">
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-md-4">
              <label for="example-search-input" class="col-12 col-form-label">State / province</label>
              <div class="col-12">
                <input class="form-control block" type="search" value="Sumatera Utara" id="example-search-input">
              </div>
            </div>
            <div class="col-md-4">
              <label for="example-search-input" class="col-12 col-form-label">City</label>
              <div class="col-12">
                <input class="form-control block" type="search" value="Medan" id="example-search-input">
              </div>
            </div>
            <div class="col-md-4">
              <label for="example-search-input" class="col-12 col-form-label">Postal Code</label>
              <div class="col-12">
                <input class="form-control block" type="search" value="Jln 20159" id="example-search-input">
              </div>
            </div>
          </div>
          <hr>
          <div class="form-group row">
            <label for="example-search-input" class="col-2 col-form-label">E-mail Address </label>
            <div class="col-6">
              <input class="form-control block" type="search" value="Euphoria@gmail.com" id="example-search-input">
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label for="example-search-input" class="col-12 col-form-label">Tax Person Name</label>
              <div class="col-12">
                <input class="form-control block" type="search" value="Medan" id="example-search-input">
              </div>
            </div>
            <div class="col-md-6">
              <label for="example-search-input" class="col-12 col-form-label">Tax Person NPWP</label>
              <div class="col-12">
                <input class="form-control block" type="search" value="Jln 20159" id="example-search-input">
              </div>
            </div>
          </div>
          <hr>
          <a href="#" class="btn btn-outline-primary">Update Company Details</a>
        </div>
      </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
