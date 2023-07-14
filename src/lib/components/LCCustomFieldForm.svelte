<script>
	import LCCustomFieldFormField from './LCCustomFieldFormField.svelte';
	export let formData;
</script>

{#each formData as formField (formField.id)}
	<LCCustomFieldFormField bind:formField />
{/each}
