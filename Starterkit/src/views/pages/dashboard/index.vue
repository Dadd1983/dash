<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "../../../components/page-header.vue";

/**
 * Dashboard component
 */
export default {
  components: {
    Layout,
    PageHeader
  },
  data() {
    return {
      title: "Dashboard",
      items: [
        {
          text: "Nazox"
        },
        {
          text: "Dashboard",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
  </Layout>
</template>