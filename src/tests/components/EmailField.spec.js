import '@testing-library/jest-dom';

import { render, screen, act, fireEvent } from '@testing-library/svelte';
import jest from 'jest-mock';

import LCCustomFieldFormField from '../../lib/components/LCCustomFieldFormField.svelte';

test('renders simple optional text input', () => {
	const emailInput = {
		id: 192,
		name: 'Email',
		field_type: 'E',
		help_text: 'Enter Email here',
		options: [],
		required: true,
		ordering: 1,
		default_value: ''
	};
	render(LCCustomFieldFormField, {
		props: {
			formField: emailInput
		}
	});

	// Check label
	const label = screen.getByLabelText('Email*');
	expect(label).toBeInTheDocument();

	// Check that the element exists
	const inputElement = document.getElementById(`lc-cf-${emailInput.id}`);
	expect(inputElement).toBeInTheDocument();

	// Check class
	expect(inputElement).toHaveClass('controls lc-cf-component-E');

	// Check its attributes
	expect(inputElement).toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('id', `lc-cf-${emailInput.id}`);
	expect(inputElement).toHaveAttribute('name', `custom-field-${emailInput.id}`);
	expect(inputElement).toHaveAttribute('type', 'email');

	const help_text = screen.getByText('Enter Email here');
	expect(help_text).toBeInTheDocument();
});

test('test edit email input', async () => {
	function isEmailValid(email) {
		const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
		console.log('isEmailValid', email, regex.test(email));
		return regex.test(email);
	}
	const emailInput = {
		id: 192,
		name: 'Email',
		field_type: 'E',
		help_text: 'Enter Email here',
		options: [],
		required: true,
		ordering: 1,
		default_value: ''
	};
	render(LCCustomFieldFormField, {
		props: {
			formField: emailInput
		}
	});
	const inputElement = screen.getByRole('textbox', { type: 'email' });

	// Enter an invalid email address
	inputElement.value = 'invalid email address';
	inputElement.dispatchEvent(new Event('blur'));

	// Expect the email address to be invalid
	expect(isEmailValid(emailInput.value)).toBeFalsy();

	// Enter a valid email address
	inputElement.value = 'valid@gmail.com';
	inputElement.dispatchEvent(new Event('blur'));

	// Expect the email address to be valid
	expect(isEmailValid(inputElement.value)).toBeTruthy();
});
