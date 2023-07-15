<script>
	export let formField;
	export let select = false;
	export let groupClass = 'lc-cf-formfield';
	$: componentClass = `controls lc-cf-component-${formField.field_type}`;
	$: cfid = `lc-cf-${formField.id}`;
	$: cfname = `custom-field-${formField.id}`;
	$: required = formField.required ? true : false;

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

	const onChange = (e) => {
		formField.value = e.target.value;
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
			{onChange}
			{required}
		/>
	{:else if ['R', 'C'].includes(formField.field_type) && !select}
		{#each formField.options as option}
			<label
				><input
					type={fieldTypes[formField.field_type]}
					value={option.name}
					checked={option.name === formField.value || formField.value?.indexOf(option) > -1}
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
			value={formField.value}
			{onChange}
			{required}
		/>
		{#if formField.options}
			<select name={cfname} id={cfid} {required} multiple={formField.field_type === 'C'}>
				{#each formField.options as option}
					<option value={option.name}>{option.name}</option>
				{/each}
			</select>
		{/if}
	{:else if formField.field_type === 'U'}
		<select name={cfname} id={cfid} {required}>
			{#each formField.options as option}
				<option value={option.name}>{option.name}</option>
			{/each}
		</select>
	{:else}
		<input type="hidden" />
	{/if}
	<div class="help-block">{formField.help_text}</div>
</div>
