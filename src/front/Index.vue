<template>
  <div class="master">
    <div class="header">
      <Header/>
    </div>
    <div class="space">
      <Space/>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "@/front/Header";
import Space from "@/front/Space";
import Footer from "@/front/Footer";

export default {
  name: "Index",
  components: {Footer, Space, Header}
}
</script>

<style scoped>
.master {
  height: 100%;
}

.header {
  height: 600px;
  background-color: #ECEFFF;
}

.footer {
  height: 600px;
  background-color: #ECEFFF;
}
</style>