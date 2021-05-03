<template>
  <div :style="{'background-color': color}" class="master">
    <el-image :src="imgUrl" class="imgBox" style="width: 100px; height: 100px"/>
    <div class="title">
      <slot name="title-p1"/>
    </div>
    <div class="title">
      <slot name="title-p2"/>
    </div>
    <div class="content">
      <slot name="content-p1"/>
    </div>
    <div class="content">
      <slot name="content-p2"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpaceItem",
  props: {
    imgUrl: String,
    color: String,
  },
}
</script>

<style scoped>
.master {
  width: 335px;
  height: 316px;
  border-radius: 44px;
  margin-bottom: 104px;
  font-style: normal;
}

.imgBox {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -200%);
}

.title {
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  line-height: 42px;
  color: #0b0e51;
}

.content {
  margin: 15px auto;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  color: #8789ae;
}
</style>