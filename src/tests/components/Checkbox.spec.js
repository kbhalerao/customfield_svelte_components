import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';

import LCCustomFieldFormField from '../../lib/components/LCCustomFieldFormField.svelte';

test('renders checkbox input', () => {
	const checkboxInput = {
		id: 146,
		name: 'Current/past crop',
		field_type: 'C',
		help_text: '',
		default_value: null,
		options: [
			{ ordering: 999, name: 'Corn' },
			{ ordering: 999, name: 'Soybeans' },
			{ ordering: 999, name: 'Other' }
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
	const inputElements = screen.getAllByRole('checkbox');
	expect(inputElements.length).toBe(3);

	const inputElement = inputElements[0];
	// Check class
	expect(inputElement).toHaveClass('controls lc-cf-component-C');

	// Check its attributes
	expect(inputElement).not.toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('name', 'custom-field-146');
	expect(inputElement).toHaveAttribute('type', 'checkbox');
});

test('renders checkbox input with value present', () => {
	const checkboxInput = {
		id: 146,
		name: 'Current/past crop',
		field_type: 'C',
		help_text: '',
		value: ['Other'],
		options: [
			{ ordering: 999, name: 'Corn' },
			{ ordering: 999, name: 'Soybeans' },
			{ ordering: 999, name: 'Other' }
		],
		required: true,
		ordering: 999
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: checkboxInput
		}
	});

	const othercheckbox = screen.getByLabelText('Other');
	expect(othercheckbox).toBeChecked();
	const corncheckbox = screen.getByLabelText('Corn');
	expect(corncheckbox).not.toBeChecked();
});
