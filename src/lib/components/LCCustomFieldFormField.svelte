<script>
	export let formField;
	export let select = false;
	export let groupClass = 'lc-cf-formfield';
	export let inputClass = 'lc-cf-input';
	$: componentClass = `controls lc-cf-component-${formField.field_type}`;
	$: cfid = `lc-cf-${formField.pk}`;
	$: cfname = `custom-field-${formField.pk}`;
	$: required = formField.required == true;
	$: inputType = ['T', 'D', 'M'].indexOf(formField.field_type) > -1;

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

	{#if formField.field_type === 'T'}
		<textarea id={cfid} class={inputClass} name={cfname} {required}>{formField.value}</textarea>
	{:else if ['T', 'D', 'M'].indexOf(formField.field_type) > -1}
		<input
			type={fieldTypes[formField.field_type]}
			id={cfid}
			class={inputClass}
			name={cfname}
			value={formField.value}
			{onChange}
			{required}
		/>
	{:else if ['R', 'C'].indexOf(formField.field_type) > -1 && !select}
		{#each formField.options as option}
			<label
				><input
					type={fieldTypes[formField.field_type]}
					value={option.name}
					checked={option.name === formField.value || formField.value.indexOf(option) > -1}
					class={inputClass}
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
			class={inputClass}
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
