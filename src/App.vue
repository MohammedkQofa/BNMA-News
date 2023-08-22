<template>
  <app-header />
  <router-view />
  <app-footer/>
</template>
<script>
import AppHeader from "@/components/glopal/AppHeader.vue";
import AppFooter from "@/components/glopal/AppFooter.vue";
export default {
  name: "MasterPage",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
