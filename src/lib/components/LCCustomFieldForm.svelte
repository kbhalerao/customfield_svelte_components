<script>
	import LCCustomFieldFormField from './LCCustomFieldFormField.svelte';
	export let formData;
	$: groupClass = 'lc-cf-formfield';
</script>

{#each formData as formField, idx (idx)}
	<LCCustomFieldFormField {groupClass} bind:formField />
{/each}
