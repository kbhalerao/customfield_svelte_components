// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';

import LCCustomFieldFormField from '../../lib/components/LCCustomFieldFormField.svelte';

test('renders simple optional date input', () => {
	const dateInput = {
		id: 121,
		name: 'Cover Crop',
		options: [],
		ordering: 10,
		required: false,
		help_text: 'What is your cover crop target planting date for this cash crop?',
		field_type: 'D'
	};
	render(LCCustomFieldFormField, {
		props: {
			formField: dateInput
		}
	});

	// Check that the element exists
	const inputElement = document.querySelector('#lc-cf-121');
	expect(inputElement).toBeInTheDocument();

	// Check class
	expect(inputElement).toHaveClass('controls lc-cf-component-D');

	// Check its attributes
	expect(inputElement).not.toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('id', 'lc-cf-121');
	expect(inputElement).toHaveAttribute('name', 'custom-field-121');
	expect(inputElement).toHaveAttribute('type', 'date');

	const help_text = screen.getByText(
		'What is your cover crop target planting date for this cash crop?'
	);
	expect(help_text).toBeInTheDocument();
});

test('renders simple required date', () => {
	const dateInput = {
		id: 121,
		name: 'Cover Crop',
		options: [],
		ordering: 10,
		required: true,
		help_text: 'What is your cover crop target planting date for this cash crop?',
		field_type: 'D'
	};
	render(LCCustomFieldFormField, {
		props: {
			formField: dateInput
		}
	});

	const inputElement = document.querySelector('#lc-cf-121');
	// Check its attributes
	expect(inputElement).toHaveAttribute('required');
});

test('renders date input with value', () => {
	const dateInput = {
		id: 121,
		name: 'Cover Crop',
		value: '2000-10-31T01:30:00.000-05:00',
		options: [],
		ordering: 10,
		required: true,
		help_text: 'What is your cover crop target planting date for this cash crop?',
		field_type: 'T'
	};
	render(LCCustomFieldFormField, {
		props: {
			formField: dateInput
		}
	});

	const inputElement = document.querySelector('#lc-cf-121');
	// Check its attributes
	expect(inputElement).toHaveDisplayValue('2000-10-31T01:30:00.000-05:00');
});

test('renders date input with default value', () => {
	const dateInput = {
		id: 121,
		name: 'Cover Crop',
		options: [],
		ordering: 10,
		required: true,
		default_value: '2000-10-31T01:30:00.000-05:00',
		help_text: 'What is your cover crop target planting date for this cash crop?',
		field_type: 'T'
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: dateInput
		}
	});

	const inputElement = document.querySelector('#lc-cf-121');
	expect(inputElement).toHaveDisplayValue('2000-10-31T01:30:00.000-05:00');
});
