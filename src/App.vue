<template>
  <vs-row
    vs-align="center"
    vs-type="flex" vs-justify="space-around" vs-w="12">
    <vs-col vs-type="flex" vs-w="12" vs-justify="center">{{count}}</vs-col>
    <vs-col vs-w="12" vs-type="flex" vs-justify="center">
      <vs-button @click="increment">Up</vs-button>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      count: 0
    }
  },
  methods : {
    increment(){
      this.count++;
    }
  }
}
</script>

<style>

</style>
