// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, screen, act, fireEvent } from '@testing-library/svelte';
import jest from 'jest-mock';

import LCCustomFieldFormField from '../../lib/components/LCCustomFieldFormField.svelte';

test('renders simple optional password input', () => {
	const passwordInput = {
		id: 191,
		name: 'Password',
		field_type: 'P',
		help_text: 'Enter Password',
		options: [],
		required: false,
		ordering: 1
	};
	render(LCCustomFieldFormField, {
		props: {
			formField: passwordInput
		}
	});

	// Check label
	const label = screen.getByLabelText('Password');
	expect(label).toBeInTheDocument();

	// Check that the element exists
	const inputElement = screen.getByLabelText('Password');
	expect(inputElement).toBeInTheDocument();

	// Check class
	expect(inputElement).toHaveClass('controls lc-cf-component-P');

	// Check its attributes
	expect(inputElement).not.toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('id', 'lc-cf-191');
	expect(inputElement).toHaveAttribute('name', 'custom-field-191');
	expect(inputElement).toHaveAttribute('type', 'password');

	// Check help text
	const help_text = screen.getByText('Enter Password');
	expect(help_text).toBeInTheDocument();
});

test('renders simple required password input', () => {
	const passwordInput = {
		id: 191,
		name: 'Password',
		field_type: 'P',
		help_text: 'Enter Password',
		options: [],
		required: true,
		ordering: 1
	};
	render(LCCustomFieldFormField, {
		props: {
			formField: passwordInput
		}
	});

	const inputElement = screen.getByLabelText('Password*');
	// Check its attributes
	expect(inputElement).toHaveAttribute('required');
});

test('renders password input with value', () => {
	const passwordInput = {
		id: 191,
		name: 'Password',
		field_type: 'P',
		help_text: 'Enter Password',
		options: [],
		required: false,
		ordering: 1,
		value: 'Password@123'
	};
	render(LCCustomFieldFormField, {
		props: {
			formField: passwordInput
		}
	});

	const inputElement = screen.getByLabelText('Password');
	// Check its attributes
	expect(inputElement).toHaveValue('Password@123');
});

test('renders password input with default value', () => {
	const passwordInput = {
		id: 191,
		name: 'Password',
		field_type: 'P',
		help_text: 'Enter Password',
		options: [],
		required: false,
		ordering: 1,
		default_value: 'Password1!'
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: passwordInput
		}
	});

	const inputElement = screen.getByLabelText('Password');
	expect(inputElement).toHaveValue('Password1!');
});

test('editing value sets formfield value', async () => {
	const passwordInput = {
		id: 191,
		name: 'Password',
		field_type: 'P',
		help_text: 'Enter Password',
		options: [],
		required: false,
		ordering: 1,
		value: 'Password1!'
	};

	const { getByLabelText, component } = render(LCCustomFieldFormField, {
		// store the return so we can access the component
		props: {
			formField: passwordInput
		}
	});

	const inputElement = screen.getByLabelText('Password');
	expect(inputElement).toHaveValue('Password1!');

	const mock = jest.fn(); // set up a mock callback function
	component.$on('input', mock); // listen for on:change event

	await act(() => fireEvent.input(inputElement, { target: { value: 'modified' } }));
	expect(inputElement.value).toBe('modified'); // input field value is changed

	await act(() => fireEvent.change(inputElement));
	// expect(mock).toHaveBeenCalled();
});
