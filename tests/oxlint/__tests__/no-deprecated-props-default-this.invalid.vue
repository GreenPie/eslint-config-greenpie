<script lang="ts">
export default {
  props: {
    source: {
      type: String,
      default: 'value'
    },

    label: {
      type: String,
      default() {
        return this.source;
      }
    }
  }
};
</script>
