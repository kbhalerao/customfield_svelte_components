<script>
	import LcCustomFieldForm from '$lib/components/LCCustomFieldForm.svelte';
	import LCCustomFieldForm from '$lib/components/LCCustomFieldForm.svelte';
	import LcCustomFieldFormField from '$lib/components/LCCustomFieldFormField.svelte';

	let formRadioInput = {
		id: 114,
		name: 'Example Radio Input',
		value: [],
		default_value: 'Option 2',
		options: [
			{
				name: 'Option 1',
				ordering: 1
			},
			{
				name: 'Option 2',
				ordering: 2
			},
			{
				name: 'Option 3',
				ordering: 3
			}
		],
		ordering: 4,
		required: true,
		help_text: 'Help text - default value chosen is `Option 2`',
		field_type: 'R'
	};

	let textInput = {
		id: 188,
		name: 'Title',
		field_type: 'T',
		help_text: 'A title for your annotation',
		options: [],
		required: true,
		ordering: 1,
		default_value: 'present'
	};

	let textAreaInput = {
		id: 189,
		name: 'Description',
		field_type: 'A',
		help_text: 'A long description for your annotation',
		options: [],
		required: true,
		ordering: 1,
		default_value: 'present'
	};

	let numericInput = {
		id: 198,
		name: 'Acres',
		field_type: 'N',
		help_text: '',
		default_value: null,
		options: [],
		required: true,
		ordering: 999
	};

	let quantityInput = {
		id: 199,
		name: 'Nitrogen',
		field_type: 'N',
		help_text: '',
		default_value: null,
		options: [
			{ ordering: 998, name: 'lb/ac' },
			{ ordering: 999, name: 'kg/ha' }
		],
		required: true,
		ordering: 999
	};
	let checkboxInput = {
		id: 146,
		name: 'Current/past crop',
		field_type: 'C',
		help_text: '',
		default_value: null,
		options: [
			{ ordering: 999, name: 'Corn' },
			{ ordering: 999, name: 'Soybeans' },
			{ ordering: 999, name: 'Other' }
		],
		required: true,
		ordering: 999,
		value: ['Other']
	};

	let selectboxInput = {
		id: 147,
		name: 'Current/past crop',
		field_type: 'C',
		help_text: '',
		default_value: null,
		options: [
			{ ordering: 999, name: 'Corn' },
			{ ordering: 999, name: 'Soybeans' },
			{ ordering: 999, name: 'Other' }
		],
		required: true,
		ordering: 999,
		value: ['Other']
	};

	let dateInput = {
		id: 121,
		name: 'Cover Crop',
		options: [],
		ordering: 10,
		required: false,
		help_text: 'What is your cover crop target planting date for this cash crop?',
		field_type: 'D'
	};

	let dtInput = {
		id: 122,
		name: 'Cover Crop',
		value: '2000-10-31T01:30',
		options: [],
		ordering: 10,
		required: true,
		help_text: 'What is your cover crop target planting date for this cash crop?',
		field_type: 'M'
	};

	let formData = [
		formRadioInput,
		textInput,
		textAreaInput,
		numericInput,
		quantityInput,
		checkboxInput,
		dateInput,
		dtInput
	];
</script>

<h1>Example for generating a form</h1>

<form class="form-class">
	<LCCustomFieldForm bind:formData />
	<LcCustomFieldFormField bind:formField={selectboxInput} select="true" />
	<input type="submit" value="Submit" class="controls" />
	<input type="button" value="Cancel" class="controls" />
</form>

{#each formData as formField (formField.id)}
	<p>{formField.name}: {formField.value}</p>
{/each}
<p>{selectboxInput.name}: {selectboxInput.value}</p>

<style>
	:global(.controls) {
		margin-bottom: 0.75em;
	}
	:global(.help-block) {
		margin-bottom: 1em;
	}
</style>
