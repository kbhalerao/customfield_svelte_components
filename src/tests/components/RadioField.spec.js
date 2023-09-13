import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';

import LCCustomFieldFormField from '../../lib/components/LCCustomFieldFormField.svelte';

test('renders radio input', () => {
	const radioInput = {
		id: 183,
		name: 'Crop',
		field_type: 'R',
		help_text: 'What crop did you plant',
		default_value: null,
		options: [
			{ ordering: 1, name: 'Corn' },
			{ ordering: 2, name: 'Soybeans' },
			{ ordering: 999, name: 'Other' }
		],
		required: false,
		ordering: 1
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: radioInput
		}
	});

	// Check that the element exists
	const inputElements = screen.getAllByRole('radio');
	expect(inputElements.length).toBe(3);

	const inputElement = inputElements[0];
	// Check class
	expect(inputElement).toHaveClass('controls lc-cf-component-R');

	// Check its attributes
	expect(inputElement).not.toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('name', 'custom-field-183');
	expect(inputElement).toHaveAttribute('type', 'radio');

	const help_text = screen.getByText('What crop did you plant');
	expect(help_text).toBeInTheDocument();
});

test('renders radio input with value present', () => {
	const radioInput = {
		id: 183,
		name: 'Crop',
		field_type: 'R',
		help_text: 'What crop did you plant',
		default_value: null,
		value: 'Corn',
		options: [
			{ ordering: 1, name: 'Corn' },
			{ ordering: 2, name: 'Soybeans' },
			{ ordering: 999, name: 'Other' }
		],
		required: true,
		ordering: 1
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: radioInput
		}
	});

	const corncheckbox = screen.getByLabelText('Corn');
	expect(corncheckbox).toBeChecked();
	const othercheckbox = screen.getByLabelText('Other');
	expect(othercheckbox).not.toBeChecked();
	const soybeanscheckbox = screen.getByLabelText('Soybeans');
	expect(soybeanscheckbox).not.toBeChecked();
});

test('renders radio input with default value present', () => {
	const radioInput = {
		id: 183,
		name: 'Crop',
		field_type: 'R',
		help_text: 'What crop did you plant',
		default_value: 'Other',
		options: [
			{ ordering: 1, name: 'Corn' },
			{ ordering: 2, name: 'Soybeans' },
			{ ordering: 999, name: 'Other' }
		],
		required: true,
		ordering: 1
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: radioInput
		}
	});

	const corncheckbox = screen.getByLabelText('Corn');
	expect(corncheckbox).not.toBeChecked();
	const othercheckbox = screen.getByLabelText('Other');
	expect(othercheckbox).toBeChecked();
	const soybeanscheckbox = screen.getByLabelText('Soybeans');
	expect(soybeanscheckbox).not.toBeChecked();
});
