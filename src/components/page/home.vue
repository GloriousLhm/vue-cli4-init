<template>
  <div id="home">
    <p>Home</p>
    <span>发表时间：{{ time | dateformat("YYYY-MM-DD HH:mm:ss") }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: new Date(),
    };
  },
};
</script>
<style lang="scss">
#home {
  p {
    color: red;
    font-size: 30px;
  }
}
</style>
