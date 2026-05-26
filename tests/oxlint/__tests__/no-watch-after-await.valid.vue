<script lang="ts">
import { ref, watch } from 'vue';

export default {
	async setup() {
		const count = ref(0);

		watch(count, () => {});
		await Promise.resolve();

		return {
			count
		};
	}
};
</script>
