<script>
	import LCCustomFieldForm from '$lib/components/LCCustomFieldForm.svelte';
	import LCCustomFieldFormField from '$lib/components/LCCustomFieldFormField.svelte';

	let formRadioInput = {
		id: 114,
		name: 'Example Radio Input',
		value: null,
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
		ordering: 999,
		value: 12
	};
	let quantityInputNoDefault = {
		id: 197,
		name: 'Nitrogen - no default',
		field_type: 'N',
		help_text: 'This is a physical quantity - please select proper units',
		options: [
			{ ordering: 998, name: 'lb/ac' },
			{ ordering: 999, name: 'kg/ha' }
		],
		required: true,
		ordering: 999
	};
	let quantityInput = {
		id: 199,
		name: 'Nitrogen with default units',
		field_type: 'N',
		help_text: 'This is a physical quantity - please select proper units',
		default_value: [25, 'kg/ha'],
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
		value: ['Corn', 'Other']
	};

	let selectboxInput = {
		id: 147,
		name: 'Current/past crop',
		field_type: 'C',
		help_text: '',
		default_value: null,
		options: [
			{ id: 1, ordering: 999, name: 'Corn' },
			{ id: 2, ordering: 999, name: 'Soybeans' },
			{ id: 3, ordering: 999, name: 'Other' }
		],
		required: true,
		ordering: 999,
		value: [1, 2]
	};

	let dateInput = {
		id: 121,
		name: 'Plant Date',
		options: [],
		ordering: 10,
		required: false,
		help_text: 'What is your cover crop target planting date for this cash crop?',
		field_type: 'D'
	};

	let dtInput = {
		id: 122,
		name: 'Event Time',
		value: '2000-10-31T01:30',
		options: [],
		ordering: 10,
		required: true,
		help_text: 'What is your cover crop target planting date for this cash crop?',
		field_type: 'M'
	};

	let userSelector = {
		id: 156,
		name: 'Assignee',
		field_type: 'U',
		help_text: '',
		options: [
			['kbhalerao', 'Kaustubh Bhalerao'],
			['ashukla', 'Aditya Shukla']
		],
		required: true,
		ordering: 999,
		value: 'ashukla'
	};
	let fileInput = {
		id: 157,
		name: 'File',
		field_type: 'F',
		help_text: 'Upload file here',
		required: false,
		multiple: true
	};

	let passwordInput = {
		id: 191,
		name: 'Password',
		field_type: 'P',
		help_text: 'Enter Password',
		options: [],
		required: true,
		ordering: 1,
		default_value: 'Demo123!'
	};

	let emailInput = {
		id: 192,
		name: 'Email',
		field_type: 'E',
		help_text: 'Enter Email here',
		options: [],
		required: true,
		ordering: 1,
		default_value: ''
	};

	let formData = [
		formRadioInput,
		textInput,
		textAreaInput,
		numericInput,
		quantityInputNoDefault,
		quantityInput,
		checkboxInput,
		dateInput,
		dtInput,
		userSelector,
		passwordInput,
		fileInput,
		emailInput
	];
</script>

<head>
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
		crossorigin="anonymous"
	/>
</head>

<h1>Example for generating a form</h1>

<div class="container">
	<form class="form-class">
		<div class="mb-3">
			<LCCustomFieldForm bind:formData />
			<LCCustomFieldFormField bind:formField={selectboxInput} select="true" />
			<input type="submit" value="Submit" class="controls" />
			<input type="button" value="Cancel" class="controls" />
		</div>
	</form>
</div>

<div class="container">
	{#each formData as formField (formField.id)}
		<p>{formField.name}: {formField.value}</p>
	{/each}
	<p>{selectboxInput.name}: {selectboxInput.value}</p>
</div>

<style>
</style>
