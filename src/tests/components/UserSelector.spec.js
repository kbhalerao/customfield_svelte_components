import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';

import LCCustomFieldFormField from '../../lib/components/LCCustomFieldFormField.svelte';

test('renders user selector input', () => {
	const userSelector = {
		id: 146,
		name: 'Assignee',
		field_type: 'U',
		help_text: '',
		default_value: null,
		options: [
			['kbhalerao', 'Kaustubh Bhalerao'],
			['ashukla', 'Aditya Shukla']
		],
		required: true,
		ordering: 999
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: userSelector
		}
	});

	// Check that the element exists
	const inputElement = screen.getByRole('combobox');
	// Check class
	expect(inputElement).toHaveClass('controls lc-cf-component-U');

	// Check its attributes
	expect(inputElement).toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('name', 'custom-field-146');
});

test('renders user selector input with value defined', () => {
	const userSelector = {
		id: 146,
		name: 'Assignee',
		field_type: 'U',
		help_text: '',
		options: [
			['kbhalerao', 'Kaustubh Bhalerao'],
			['ashukla', 'Aditya Shukla']
		],
		required: true,
		ordering: 999,
		value: 'ashukla'
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: userSelector
		}
	});

	// Check that the element exists
	const inputElement = screen.getByRole('combobox');
	expect(inputElement).toHaveValue('kbhalerao');
});

test('renders user selector input with default value defined', () => {
	const userSelector = {
		id: 146,
		name: 'Assignee',
		field_type: 'U',
		help_text: '',
		options: [
			['kbhalerao', 'Kaustubh Bhalerao'],
			['ashukla', 'Aditya Shukla']
		],
		required: true,
		ordering: 999,
		default_value: 'ashukla'
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: userSelector
		}
	});

	// Check that the element exists
	const inputElement = screen.getByRole('combobox');
	expect(inputElement).toHaveValue('kbhalerao');
});
