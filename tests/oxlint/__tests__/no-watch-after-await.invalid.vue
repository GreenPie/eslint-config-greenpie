<script lang="ts">
import { ref, watch } from 'vue';

export default {
	async setup() {
		const count = ref(0);

		await Promise.resolve();
		watch(count, () => {});

		return {
			count
		};
	}
};
</script>
