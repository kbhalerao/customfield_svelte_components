<script>
	import LCCustomFieldFormField from './LCCustomFieldFormField.svelte';
	export let formData;
	$: groupClass = 'lc-cf-formfield';
</script>

{#each formData as formField (formField.id)}
	<LCCustomFieldFormField {groupClass} bind:formField />
{/each}
