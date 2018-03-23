<template lang="html">
  <div>
    <button class="btn btn-outline-primary col-12" v-on:click="toggleFunction()">Ongoing Task List</button>
    <hr class="bg-primary">
    <div class="div" id="ToggleDiv">
      <div class="card mb-3 space card-outline-primary" style="color:blue;" >
        <div class="card-block text-primary" >
          <h5 class="card-title">Annual Meeting</h5>
          <p class="card-text">shareholder annual discussion with stakeholder</p>
          <p class="date">{{date|moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>
          <a href="#" class="btn btn-outline-primary">View Task</a>
        </div>
        <div class="card-block text-primary" >
          <h5 class="card-title">Adjust Timesheet report</h5>
          <p class="card-text">SKKP and JKK adjustment</p>
          <p class="date">{{date|moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>
          <a href="#" class="btn btn-outline-primary">View Task</a>
        </div>
        <div class="card-block text-primary" >
          <h5 class="card-title">provide payroll consolidation</h5>
          <p class="card-text">for accouting procedure purpose.</p>
          <p class="date">{{date|moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>
          <a href="#" class="btn btn-outline-primary">View Task</a>
        </div>
        <a href="#" class="btn btn-primary">Add New Task</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      date: '2020-06-20'
    }
  },
  methods: {
    toggleFunction: function () {
      var x = document.getElementById('ToggleDiv')
      if (x.style.display === 'block') {
        x.style.display = 'none'
        x.style.transition = '0.5s'
      } else {
        x.style.display = 'block'
        x.style.transition = '0.5s'
      }
    }
  }
}
</script>
<style lang="css">
.blos{
  color: white;
}
.date{
  font-size: 11px;
}
.tryborder{
  border-style: solid;
  border-color: blue;
}
.div{
  display: none;
  transition: height 4s;
}
</style>
