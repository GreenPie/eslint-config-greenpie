<script lang="ts">
export default {
  data() {
    return {
      count: 1
    };
  },

  computed: {
    doubled() {
      return this.count * 2;
    }
  }
};
</script>
