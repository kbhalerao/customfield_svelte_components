<script>
	import { onMount } from 'svelte';
	import { create } from 'filepond';
	import 'filepond/dist/filepond.css';
	// Settable parameters
	export let formField;
	export let select = false;
	export let groupClass = 'form-group';
	export let groupId = 'default-id';

	// Generated IDs, names, and other attributes
	const bsComponentClass =
		formField.field_type === 'C'
			? 'form-check-input'
			: formField.field_type === 'R' && !formField.dropdown
			? 'form-check-input'
			: 'form-control';
	const componentClass = select
		? `form-select controls lc-cf-component-${formField.field_type}`
		: `${bsComponentClass} controls lc-cf-component-${formField.field_type}`;

	const bsLabelClass =
		formField.field_type === 'C'
			? 'form-check-label'
			: formField.field_type === 'R' && !formField.dropdown
			? 'form-check-label'
			: 'form-label';
	const labelClass = `lc-cf-control-label ${bsLabelClass}`;

	const divClass = `${groupClass} position-relative`;
	const cfid = `lc-cf-${formField.id}`;
	const cfname = `custom-field-${formField.id}`;
	const required = formField.required ? true : false;
	const autocomplete = `on`;
	const fieldTypes = {
		T: 'text',
		R: 'radio',
		C: 'checkbox',
		D: 'date',
		M: 'datetime-local',
		N: 'number',
		U: 'user',
		A: 'textarea',
		P: 'password',
		F: 'file',
		E: 'email'
	};

	// Reconcile default value with actual value
	const setInitialValue = (f) => {
		let val = f.value || f.default_value || '';
		// console.log({ f, val });
		return val;
	};

	formField.value = setInitialValue(formField);

	// Extract numerical value and units for field_type === "N"
	$: numeric_value =
		formField.field_type === 'N' && formField.value
			? formField.options.length > 0
				? Number(formField.value[0])
				: Number(formField.value)
			: '';
	$: numeric_units =
		formField.field_type === 'N' && formField.options.length > 0 && formField.value
			? formField.value[1]
			: '';

	function setValue(val) {
		if (formField.field_type === 'N') {
			formField.value = formField.options.length ? [val, numeric_units] : val;
		} else if (formField.field_type === 'C') {
			formField.value = val;
		} else {
			formField.value = val;
		}
	}

	// Update value on input change.
	function updateValue(e) {
		// handle update values.
		setValue(e.target.value);
	}

	function updateUnits(e) {
		formField.value = [numeric_value, e.target.value];
	}

	let show_password = false;
	$: formField.field_type == 'P'
		? (fieldTypes[formField.field_type] = show_password ? 'text' : 'password')
		: '';

	onMount(() => {
		// Get a file input reference
		const input = document.querySelector('input[type="file"]');

		// Create a FilePond instance
		create(input, {
			storeAsFile: true
		});
	});
</script>

<div class={divClass} id={groupId} {autocomplete}>
	<label for={cfid} class={labelClass}>
		{formField.name}{formField.required ? '*' : ''}
	</label>

	{#if formField.field_type === 'A'}
		<textarea id={cfid} class={componentClass} name={cfname} {required} on:change={updateValue}
			>{formField.value}</textarea
		>
	{:else if ['T', 'D', 'M', 'P', 'E'].includes(formField.field_type)}
		<input
			type={fieldTypes[formField.field_type]}
			id={cfid}
			class={componentClass}
			name={cfname}
			on:change={updateValue}
			value={formField.value}
			{required}
		/>
		{#if ['P'].includes(formField.field_type)}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class={`${componentClass} passwordField`}
				on:click={() => (show_password = !show_password)}
			>
				<span class={show_password ? 'text-danger' : 'text-success'}
					>{show_password ? 'Hide' : 'Show'}</span
				>
			</div>
		{/if}
	{:else if 'C' === formField.field_type && !select}
		{#each formField.options as option, idx}
			<div class="form-check">
				<input
					type="checkbox"
					id={`${formField.id}_${idx}`}
					value={option.name}
					class={componentClass}
					name={cfname}
					{required}
					bind:group={formField.value}
				/>
				<label for={`${formField.id}_${idx}`} class={labelClass}>{option.name}</label>
			</div>
		{/each}
	{:else if 'C' === formField.field_type && select}
		<select
			name={cfname}
			id={cfid}
			{required}
			bind:value={formField.value}
			class={componentClass}
			multiple
		>
			{#each formField.options as option}
				<option value={option.id} selected={formField.value.includes(option.name)}
					>{option.name}</option
				>
			{/each}
		</select>
	{:else if 'R' === formField.field_type && !select && !formField.dropdown}
		{#each formField.options as option, idx}
			<div class="form-check">
				<input
					type="radio"
					value={option.name}
					id={`${formField.id}_${idx}`}
					{required}
					checked={option.name === formField.value}
					class={componentClass}
					name={cfname}
					on:change={updateValue}
				/>
				<label for={`${formField.id}_${idx}`}>{option.name}</label>
			</div>
		{/each}
	{:else if 'R' === formField.field_type && select && !formField.dropdown}
		<select
			name={cfname}
			id={cfid}
			{required}
			class={componentClass}
			on:change={updateValue}
			multiple={formField.field_type === 'C'}
		>
			{#each formField.options as option}
				<option value={option.name}>{option.name}</option>
			{/each}
		</select>
	{:else if 'R' === formField.field_type && !select && formField.dropdown}
		<select
			name={cfname}
			id={cfid}
			{required}
			on:change={updateValue}
			value={formField.value}
			class={componentClass}
		>
			<option value="Select" selected disabled hidden>Select</option>
			{#each formField.options as option}
				<option value={option.name} selected={formField.value === option.name}>{option.name}</option
				>
			{/each}
		</select>
	{:else if formField.field_type === 'N'}
		<div class="d-flex">
			<input
				type="number"
				id={cfid}
				class={componentClass}
				on:change={updateValue}
				name={cfname}
				value={numeric_value}
				{required}
			/>
			{#if formField.options.length}
				<select
					name={cfname}
					id={cfid}
					on:change={updateUnits}
					class={`${componentClass} flex-grow-1`}
					{required}
					value={numeric_units}
				>
					<option value="" selected disabled hidden>Select units</option>
					{#each formField.options as option}
						<option value={option.name} selected={numeric_units === option.name}
							>{option.name}</option
						>
					{/each}
				</select>
			{/if}
		</div>
	{:else if formField.field_type === 'U'}
		<select
			name={cfname}
			id={cfid}
			{required}
			on:change={updateValue}
			value={formField.value}
			class={componentClass}
		>
			<option value="Select" selected disabled hidden>Select</option>
			{#each formField.options as option (option[0])}
				<option value={option[0]} selected={formField.value === option[0]}>{option[1]}</option>
			{/each}
		</select>
	{:else if formField.field_type === 'F'}
		<input
			type={fieldTypes[formField.field_type]}
			class={componentClass}
			id={cfid}
			name={cfname}
			{required}
			multiple={formField.multiple}
		/>
	{:else}
		<input type="hidden" />
	{/if}
	<div class="help-block form-text">{formField.help_text}</div>
</div>

<style>
	.passwordField {
		position: absolute;
		right: 0;
		top: 32px;
		cursor: pointer;
		width: 60px;
	}
</style>
