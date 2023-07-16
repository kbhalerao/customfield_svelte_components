import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';

import LCCustomFieldFormField from '../../lib/components/LCCustomFieldFormField.svelte';

test('renders physical quantity input', () => {
	const checkboxInput = {
		id: 198,
		name: 'Acres',
		field_type: 'N',
		help_text: '',
		default_value: null,
		options: [
			{ ordering: 998, name: 'Tillable' },
			{ ordering: 999, name: 'Non-tillable' }
		],
		required: true,
		ordering: 999
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: checkboxInput
		}
	});

	// Check that the element exists
	const inputElement = screen.getByRole('textbox');
	expect(inputElement).toHaveClass('controls lc-cf-component-N');

	// Check its attributes
	expect(inputElement).toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('name', 'custom-field-198');
	expect(inputElement).toHaveAttribute('type', 'numeric');

	// Check that unit selector is present
	const unitSelector = screen.getByRole('combobox');
	expect(unitSelector).toHaveAttribute('required');

	const options = screen.getAllByRole('option');
	expect(options.length).toBe(2);
});
