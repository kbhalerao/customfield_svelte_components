<script>
	export let formField;
	export let select = false;
	export let groupClass = 'lc-cf-formfield';
	$: componentClass = `controls lc-cf-component-${formField.field_type}`;
	$: cfid = `lc-cf-${formField.id}`;
	$: cfname = `custom-field-${formField.id}`;
	$: required = formField.required ? true : false;
	$: value = formField.value
		? formField.value
		: formField.default_value
		? formField.default_value
		: undefined;
	$: numeric_value =
		formField.field_type === 'N' && value
			? formField.options.length > 0
				? Number(value[0])
				: Number(value)
			: undefined;
	$: numeric_units =
		formField.field_type === 'N' && formField.options.length > 0 && value ? value[1] : undefined;

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
</script>

<div class={groupClass}>
	<label for={cfid} class="lc-cf-control-label">
		{formField.name}{formField.required ? '*' : ''}
	</label>

	{#if formField.field_type === 'A'}
		<textarea id={cfid} class={componentClass} name={cfname} {required}>{formField.value}</textarea>
	{:else if ['T', 'D', 'M'].indexOf(formField.field_type) > -1}
		<input
			type={fieldTypes[formField.field_type]}
			id={cfid}
			class={componentClass}
			name={cfname}
			value={formField.value}
			default_value={formField.value}
			{required}
		/>
	{:else if ['R', 'C'].includes(formField.field_type) && !select}
		{#each formField.options as option}
			<label
				><input
					type={fieldTypes[formField.field_type]}
					value={option.name}
					checked={option.name === formField.value || formField.value?.includes(option.name)}
					class={componentClass}
					name={cfname}
				/>{option.name}</label
			>
		{/each}
	{:else if ['R', 'C'].indexOf(formField.field_type) > -1 && select}
		<select name={cfname} id={cfid} {required} multiple={formField.field_type === 'C'}>
			{#each formField.options as option}
				<option value={option.name}>{option.name}</option>
			{/each}
		</select>
	{:else if formField.field_type === 'N'}
		<input
			type="numeric"
			id={cfid}
			class={componentClass}
			name={cfname}
			value={numeric_value}
			{required}
		/>
		{#if formField.options.length}
			<select name={cfname} id={cfid} required>
				{#each formField.options as option}
					<option value={option.name} selected={numeric_units === option.name}>{option.name}</option
					>
				{/each}
			</select>
		{/if}
	{:else if formField.field_type === 'U'}
		<select name={cfname} id={cfid} {required} class={componentClass}>
			{#each formField.options as option (option[0])}
				<option value={option[0]}>{option[1]}</option>
			{/each}
		</select>
	{:else}
		<input type="hidden" />
	{/if}
	<div class="help-block">{formField.help_text}</div>
</div>
