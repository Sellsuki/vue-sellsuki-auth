<template lang="html">
  <div>
    <div v-show="PdogLoad" style="width: 100%;height: 100%;">
            <img src="https://app.sellsuki.com/img/dog_loading.gif" style="    position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;">
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      CookieData: '',
      initData: null,
      PdogLoad: true
    }
  },
  computed: {},
  mounted () {
    this.$sellsuki_auth.validateAuth()
  }
}
</script>
