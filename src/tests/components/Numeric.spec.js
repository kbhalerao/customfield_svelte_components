import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';

import LCCustomFieldFormField from '../../lib/components/LCCustomFieldFormField.svelte';

test('renders physical quantity input', () => {
	const numericInput = {
		id: 198,
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

	render(LCCustomFieldFormField, {
		props: {
			formField: numericInput
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

test('renders physical quantity with value present', () => {
	const numericInput = {
		id: 198,
		name: 'Nitrogen',
		field_type: 'N',
		help_text: '',
		default_value: null,
		options: [
			{ ordering: 998, name: 'lb/ac' },
			{ ordering: 999, name: 'kg/ha' }
		],
		required: true,
		ordering: 999,
		value: [140, 'lb/ac']
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: numericInput
		}
	});

	// Check that the element exists
	const inputElement = screen.getByRole('textbox');
	expect(inputElement).toHaveValue('140');

	const unitSelector = screen.getByRole('combobox');
	expect(unitSelector).toHaveValue('lb/ac');
});
