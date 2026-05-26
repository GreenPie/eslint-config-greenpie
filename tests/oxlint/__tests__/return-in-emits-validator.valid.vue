<script lang="ts">
export default {
  emits: {
    submit(payload) {
      return payload.length > 0;
    }
  }
};
</script>
