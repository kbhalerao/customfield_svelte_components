import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';

import LCCustomFieldFormField from '../../lib/components/LCCustomFieldFormField.svelte';

test('renders pure number input', () => {
	const numericInput = {
		id: 198,
		name: 'Acres',
		field_type: 'N',
		help_text: '',
		default_value: null,
		options: [],
		required: true,
		ordering: 999
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: numericInput
		}
	});

	// Check that the element exists
	const inputElement = document.getElementById(`lc-cf-${numericInput.id}`);
	expect(inputElement).toHaveClass('controls lc-cf-component-N');

	// Check its attributes
	expect(inputElement).toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('name', 'custom-field-198');
	expect(inputElement).toHaveAttribute('type', 'number');

	// Check that unit selector is NOT present
	const unitSelectors = screen.queryAllByRole('combobox');
	expect(unitSelectors.length).toBe(0);
});

test('renders pure number input with default value defined', () => {
	const numericInput = {
		id: 198,
		name: 'Acres',
		field_type: 'N',
		help_text: '',
		default_value: 42,
		options: [],
		required: true,
		ordering: 999
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: numericInput
		}
	});

	// Check that the element exists
	const inputElement = document.getElementById(`lc-cf-${numericInput.id}`);

	expect(inputElement).toHaveClass('controls lc-cf-component-N');

	// Check its attributes
	expect(inputElement).toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('name', 'custom-field-198');
	expect(inputElement).toHaveAttribute('type', 'number');
	expect(inputElement).toHaveValue(42);

	// Check that unit selector is NOT present
	const unitSelectors = screen.queryAllByRole('combobox');
	expect(unitSelectors.length).toBe(0);
});

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
	const inputElement = document.getElementById(`lc-cf-${numericInput.id}`);

	expect(inputElement).toHaveClass('controls lc-cf-component-N');

	// Check its attributes
	expect(inputElement).toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('name', 'custom-field-198');
	expect(inputElement).toHaveAttribute('type', 'number');

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
	const inputElement = document.getElementById(`lc-cf-${numericInput.id}`);

	expect(inputElement).toHaveValue(140);

	const unitSelector = screen.getByRole('combobox');
	expect(unitSelector).toHaveValue('lb/ac');
});
