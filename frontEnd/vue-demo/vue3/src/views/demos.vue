<template>
    <div>
        <div v-text="count">

        </div>
        <div @click="inc">
            inc
        </div>
        <div @click="dec">
            dec
        </div>
        <div @click="set">
            set
        </div>
        <div @click="reset">
            reset
        </div>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import  useCount from './useCount'
 
export default {
  name: 'CountDemo',
  props: {
    msg: String
  },
  setup() {
    const { current: count, inc, dec, set, reset } = useCount(2, {
      min: 1,
      max: 15
    })
    const msg1 = ref('Demo useCount')
 
    return {
      count,
      inc,
      dec,
      set,
      reset,
      msg1
    }
  }
}
</script>