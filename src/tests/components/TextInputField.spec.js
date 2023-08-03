// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, screen, act, fireEvent } from '@testing-library/svelte';
import jest from 'jest-mock';

import LCCustomFieldFormField from '../../lib/components/LCCustomFieldFormField.svelte';

test('renders simple optional text input', () => {
	const textInput = {
		id: 188,
		name: 'Title',
		field_type: 'T',
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
	const label = screen.getByLabelText('Title');
	expect(label).toBeInTheDocument();

	// Check that the element exists
	const inputElement = screen.getByRole('textbox');
	expect(inputElement).toBeInTheDocument();

	// Check class
	expect(inputElement).toHaveClass('controls lc-cf-component-T');

	// Check its attributes
	expect(inputElement).not.toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('id', 'lc-cf-188');
	expect(inputElement).toHaveAttribute('name', 'custom-field-188');
	expect(inputElement).toHaveAttribute('type', 'text');

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
		options: [],
		required: true,
		ordering: 1,
		default_value: 'present'
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: textInput
		}
	});

	const inputElement = screen.getByRole('textbox');
	expect(inputElement).toHaveValue('present');
});

test('editing value sets formfield value', async () => {
	const textInput = {
		id: 188,
		name: 'Title',
		field_type: 'T',
		help_text: 'A title for your annotation',
		options: [],
		required: true,
		ordering: 1,
		default_value: 'present'
	};

	const { getByLabelText, component } = render(LCCustomFieldFormField, {
		// store the return so we can access the component
		props: {
			formField: textInput
		}
	});

	const inputElement = screen.getByRole('textbox');
	expect(inputElement).toHaveValue('present');

	const mock = jest.fn(); // set up a mock callback function
	component.$on('input', mock); // listen for on:change event

	await act(() => fireEvent.input(inputElement, { target: { value: 'modified' } }));
	expect(inputElement.value).toBe('modified'); // input field value is changed

	await act(() => fireEvent.change(inputElement));
	// expect(mock).toHaveBeenCalled();
});
