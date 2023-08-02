<script>
	import { onMount } from 'svelte';
	// Settable parameters
	export let formField;
	export let select = false;
	export let groupClass = 'form-group';
	export let groupId = 'default-id';

	// Generated IDs, names, and other attributes
	const componentClass = `controls lc-cf-component-${formField.field_type}`;
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
		N: 'numeric',
		U: 'user',
		A: 'textarea'
	};

	// Reconcile default value with actual value
	const setInitialValue = (f) => {
		let val = f.value || f.default_value || '';
		console.log({ f, val });
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

	// Extract multiselect / checkbox options
	let groupSelection = formField.field_type === 'C' ? formField.value : [];

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
		// handle update values. Special cases are numeric and checkbox.
		setValue(e.target.value);
	}

	function updateUnits(e) {
		formField.value = [numeric_value, e.target.value];
	}

	function updateGroupSelection(g) {
		if (formField.field_type === 'C') {
			formField.value = g;
		}
	}

	$: updateGroupSelection(groupSelection);
</script>

<div class={groupClass} id={groupId} {autocomplete}>
	<label for={cfid} class="lc-cf-control-label">
		{formField.name}{formField.required ? '*' : ''}
	</label>

	{#if formField.field_type === 'A'}
		<textarea id={cfid} class={componentClass} name={cfname} {required} on:change={updateValue}
			>{formField.value}</textarea
		>
	{:else if ['T', 'D', 'M'].includes(formField.field_type)}
		<input
			type={fieldTypes[formField.field_type]}
			id={cfid}
			class={componentClass}
			name={cfname}
			on:change={updateValue}
			value={formField.value}
			{required}
		/>
	{:else if 'C' === formField.field_type && !select}
		{#each formField.options as option}
			<label
				><input
					type="checkbox"
					value={option.name}
					checked={option.name === formField.value ||
						formField.value?.includes(option.name) ||
						formField.default_value?.includes(option.name)}
					class={componentClass}
					name={cfname}
					bind:group={groupSelection}
				/>{option.name}</label
			>
		{/each}
	{:else if 'C' === formField.field_type && select}
		<select
			name={cfname}
			id={cfid}
			{required}
			on:change={updateValue}
			multiple={formField.field_type === 'C'}
		>
			{#each formField.options as option}
				<option value={option.name}>{option.name}</option>
			{/each}
		</select>
	{:else if 'R' === formField.field_type && !select}
		{#each formField.options as option}
			<label
				><input
					type="radio"
					value={option.name}
					checked={option.name === formField.value ||
						formField.value?.includes(option.name) ||
						formField.default_value?.includes(option.name)}
					class={componentClass}
					name={cfname}
					on:change={updateValue}
				/>{option.name}</label
			>
		{/each}
	{:else if 'R' === formField.field_type && select}
		<select
			name={cfname}
			id={cfid}
			{required}
			on:change={updateValue}
			multiple={formField.field_type === 'C'}
		>
			{#each formField.options as option}
				<option value={option.name}>{option.name}</option>
			{/each}
		</select>
	{:else if formField.field_type === 'N'}
		<input
			type="numeric"
			id={cfid}
			class={componentClass}
			on:change={updateValue}
			name={cfname}
			value={numeric_value}
			{required}
		/>
		{#if formField.options.length}
			<select name={cfname} id={cfid} on:change={updateUnits} required>
				{#each formField.options as option}
					<option value={option.name} selected={numeric_units === option.name}>{option.name}</option
					>
				{/each}
			</select>
		{/if}
	{:else if formField.field_type === 'U'}
		<select name={cfname} id={cfid} {required} on:change={updateValue} class={componentClass}>
			{#each formField.options as option (option[0])}
				<option value={option[0]}>{option[1]}</option>
			{/each}
		</select>
	{:else}
		<input type="hidden" />
	{/if}
	<div class="help-block">{formField.help_text}</div>
</div>
