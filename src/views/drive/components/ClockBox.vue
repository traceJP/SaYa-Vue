<template>
  <div class="clock-box">
    <clock></clock>
  </div>
</template>

<script>
import Clock from 'vue-clock2'

export default {
  name: "ClockBox",
  components: {Clock},
}
</script>

<style scoped>
.clock-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.clock-box .clock {
  margin: auto 0;
  border: none;
}
</style>