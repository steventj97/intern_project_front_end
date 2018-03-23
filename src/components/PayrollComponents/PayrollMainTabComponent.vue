<template>
<div>
  <div class="col-md-12">
      <div class="list-group">
          <button type="button" class="btn btn-outline-primary btn-block" v-on:click="toggle" value="history">Payroll History</button>
          <button type="button" class="btn btn-outline-primary btn-block" v-on:click="toggle" value="data">Payroll Data</button>
          <button type="button" class="btn btn-outline-primary btn-block" v-on:click="toggle" value="tax">Tax Category</button>
          <app-addinfo-component class="space"></app-addinfo-component>          
      </div>
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
