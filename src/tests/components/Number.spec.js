import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';

import LCCustomFieldFormField from '../../lib/components/LCCustomFieldFormField.svelte';

test('renders pure numeric input', () => {
	const numberInput = {
		id: 198,
		name: 'Acres',
		field_type: 'NU',
		help_text: '',
		default_value: null,
		options: [],
		required: true,
		ordering: 999
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: numberInput
		}
	});

	// Check that the element exists
	const inputElement = document.getElementById('lc-cf-198');
	expect(inputElement).toBeInTheDocument();
	expect(inputElement).toHaveClass('controls lc-cf-component-NU');

	// Check its attributes
	expect(inputElement).toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('name', 'custom-field-198');
	expect(inputElement).toHaveAttribute('type', 'number');
});

test('renders pure numeric input with default value defined', () => {
	const numberInput = {
		id: 198,
		name: 'Acres',
		field_type: 'NU',
		help_text: '',
		default_value: 42,
		options: [],
		required: true,
		ordering: 999
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: numberInput
		}
	});

	// Check that the element exists
	const inputElement = document.getElementById('lc-cf-198');
	expect(inputElement).toBeInTheDocument();
	expect(inputElement).toHaveClass('controls lc-cf-component-NU');

	// Check its attributes
	expect(inputElement).toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('name', 'custom-field-198');
	expect(inputElement).toHaveAttribute('type', 'number');
	expect(inputElement).toHaveValue(42);
});

test('renders physical quantity input', () => {
	const numberInput = {
		id: 198,
		name: 'Nitrogen',
		field_type: 'NU',
		help_text: '',
		default_value: null,
		options: [],
		required: true,
		ordering: 999
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: numberInput
		}
	});

	// Check that the element exists
	const inputElement = document.getElementById('lc-cf-198');

	// Expect it to fail
	inputElement.value = 'invalid';
	expect(inputElement.value).toBeFalsy();

	// Expect it to pass
	inputElement.value = 22;
	expect(inputElement.value).toBeTruthy();
	expect(inputElement).toHaveClass('controls lc-cf-component-NU');

	// Check its attributes
	expect(inputElement).toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('name', 'custom-field-198');
	expect(inputElement).toHaveAttribute('type', 'number');
});
