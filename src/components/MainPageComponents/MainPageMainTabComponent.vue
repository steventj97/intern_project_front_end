<template>
<div>
  <div class="col-md-12">
      <div class="list-group">
          <button type="button" class="btn btn-outline-primary btn-block" v-on:click="toggle" value="employee">Employee</button>
          <button type="button" class="btn btn-outline-primary btn-block" v-on:click="toggle" value="calculator">Payroll Calculator</button>
          <!-- <button type="button" class="btn btn-outline-primary btn-block" v-on:click="toggle" value="payroll">Payroll  Component</button>
          <button type="button" class="btn btn-outline-primary btn-block" v-on:click="toggle" value="report">Reports</button> -->
      </div>
      <app-addinfo-component class="space"></app-addinfo-component>
  </div>
</div>
</template>

<script>
import AdditionalInfo from '../GlobalComponents/AdditionalInfoComponent.vue'
export default {
  components: {
    'app-addinfo-component': AdditionalInfo
  },
  props: ['opt'],
  data () {
    return {
      option: ''
    }
  },
  methods: {
    toggle: function (event) {
      console.log('start the event')
      this.option = event.target.value
      this.$emit('toggle', this.option)
      console.log('end of the event' + ' ' + event.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.space{
  margin-top: 5%;
}
</style>
