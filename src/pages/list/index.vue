<template>
	<uuTab @clickTab="clickTab">
	</uuTab>
</template>

<script setup lang="ts">
import uuTab from "@/component/common/uu-tab.vue";

const clickTab = (e:any) => {
	console.log(e,111)
}

</script>
<style lang='less' scoped>


</style>

