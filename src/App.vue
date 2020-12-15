<template>
  <vs-row
    vs-align="center"
    vs-type="flex" vs-justify="space-around" vs-w="12">
    <vs-col vs-type="flex" vs-w="12" vs-justify="center">{{ count }}</vs-col>
    <vs-col vs-w="12" vs-type="flex" vs-justify="center">
      <vs-button @click="INCREMENT">Up</vs-button>
    </vs-col>
  </vs-row>
</template>

<script>
import {INCREMENT} from "./store/mutation-types";
import {mapMutations, mapState} from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations([INCREMENT])
  }
}
</script>

<style>

</style>
