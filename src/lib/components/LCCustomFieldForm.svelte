<script>
	import LCCustomFieldFormField from './LCCustomFieldFormField.svelte';
	export let formData;
	$: groupClass = 'lc-cf-formfield';
	$: groupId = 'cf-form';
</script>

{#each formData as formField (formField.id)}
	<LCCustomFieldFormField {groupClass} {groupId} bind:formField />
{/each}
