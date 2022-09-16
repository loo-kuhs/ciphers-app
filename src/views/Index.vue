<template>
  <div class="index">
    <header class="content-frame">
      <h1 class="site-title">Cifrar</h1>
    </header>

    <main
      class="index__main content-frame"
      :inert="isModalVisible ? 'true' : 'false'"
    >
      <fixed-header> </fixed-header>
    </main>
  </div>
</template>

<script>
import FixedHeader from "vue-fixed-header";
export default {
  name: "index",
  components: { FixedHeader },
};
</script>
