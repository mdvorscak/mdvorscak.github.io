<template>
    <iframe src="https://docs.google.com/document/d/1_vbE-am7F7u5byRzxnS22jQiXNxMjGHt3lLz1PWUMNo/edit?usp=sharing&amp;rm=minimal" width="100%" frameBorder='0' seamless='seamless'></iframe>
</template>

<script type="text/javascript">
  const HEIGHT_DIFFERENCE = 6;
  export default {
    mounted() {
      this.$nextTick(() => {
        $('iframe').height(window.innerHeight - $('.navbar-fixed').height() - HEIGHT_DIFFERENCE);
      });
    }
  };
</script>
<style>
</style>