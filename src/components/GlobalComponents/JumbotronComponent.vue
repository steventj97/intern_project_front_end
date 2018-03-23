<template>
  <div class="text-primary">
  <center>
  <div class="jumbotron" style="width:100%;">
    <div class="row">
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-3">
          </div>
          <div class="col-md-2" style="margin-right:11%;">
            <img src="../../assets/test.png" alt="" class="img-responsive" width="100px;" height="100px;">
          </div>
          <div class="col-md-5">
            <br>
            <h4 style="">{{name}}</h4>
            <p style="">{{position}}</p>
          </div>
        </div>
      </div>
      <div class="col-md-4" style="border:1px;">
        <br>
        <h2>{{sisaCuti}} hari {{sisaJam}} jam</h2>
        <h5 style="margin-top:5%;">Cuti Tahunan</h5>
      </div>
      <div class="col-md-4">
          <h5>Time Off</h5>
          <a href="http://localhost:8099/?#/TimeOff" class="btn btn-outline-primary" style="margin-bottom: 10px;">Request Time Off</a><br>
          <p><a href="http://localhost:8099/?#/TimeOff" style="text-decoration:none;margin-top:10%;color:red;">View History</a></p>
      </div>
    </div>
  </div>
</center>
</div>
</template>

<script>
export default {
  data () {
    return {
      sisaCuti: 4,
      sisaJam: 32,
      name: 'Chiarasten',
      position: 'Assistant Staff'
    }
  }
}
</script>
.try{
}
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.try{
}
</style>
