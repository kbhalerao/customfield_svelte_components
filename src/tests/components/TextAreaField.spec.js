// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';

import LCCustomFieldFormField from '../../lib/components/LCCustomFieldFormField.svelte';

test('renders optional textarea widget', () => {
	const textInput = {
		id: 188,
		name: 'Description',
		field_type: 'A',
		help_text: 'A title for your annotation',
		default_value: null,
		options: [],
		required: false,
		ordering: 1
	};
	render(LCCustomFieldFormField, {
		props: {
			formField: textInput
		}
	});

	// Check label
	const label = screen.getByLabelText('Description');
	expect(label).toBeInTheDocument();

	// Check that the element exists
	const inputElement = screen.getByRole('textbox');
	expect(inputElement).toBeInTheDocument();

	// Check class
	expect(inputElement).toHaveClass('controls lc-cf-component-A');

	// Check its attributes
	expect(inputElement).not.toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('id', 'lc-cf-188');
	expect(inputElement).toHaveAttribute('name', 'custom-field-188');
	expect(inputElement).not.toHaveAttribute('type', 'text');

	const help_text = screen.getByText('A title for your annotation');
	expect(help_text).toBeInTheDocument();
});

test('renders simple required text input', () => {
	const textInput = {
		id: 188,
		name: 'Title',
		field_type: 'T',
		help_text: 'A title for your annotation',
		default_value: null,
		options: [],
		required: true,
		ordering: 1
	};
	render(LCCustomFieldFormField, {
		props: {
			formField: textInput
		}
	});

	const inputElement = screen.getByRole('textbox');
	// Check its attributes
	expect(inputElement).toHaveAttribute('required');
});

test('renders text input with value', () => {
	const textInput = {
		id: 188,
		name: 'Title',
		field_type: 'T',
		help_text: 'A title for your annotation',
		default_value: null,
		options: [],
		required: true,
		ordering: 1,
		value: 'present'
	};
	render(LCCustomFieldFormField, {
		props: {
			formField: textInput
		}
	});

	const inputElement = screen.getByRole('textbox');
	// Check its attributes
	expect(inputElement).toHaveValue('present');
});

test('renders text input with default value', () => {
	const textInput = {
		id: 188,
		name: 'Title',
		field_type: 'T',
		help_text: 'A title for your annotation',
		default_value: 'present',
		options: [],
		required: true,
		ordering: 1
	};
	render(LCCustomFieldFormField, {
		props: {
			formField: textInput
		}
	});

	const inputElement = screen.getByRole('textbox');
	expect(inputElement).toHaveValue('present');
});
