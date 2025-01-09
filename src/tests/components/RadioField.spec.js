import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/svelte';

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

test('renders dropdown input', () => {
	const dropdownInput = {
		id: 184,
		name: 'Fertilizer',
		field_type: 'R',
		help_text: 'Which fertilizer did you use?',
		dropdown: true, // Ensures dropdown logic is triggered
		options: [
			{ ordering: 1, name: 'Urea' },
			{ ordering: 2, name: 'DAP' },
			{ ordering: 999, name: 'Other' }
		],
		value: null,
		required: true,
		ordering: 1
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: dropdownInput
		}
	});

	// Check if the <select> element is rendered
	const selectElement = screen.getByRole('combobox');
	expect(selectElement).toBeInTheDocument();
	expect(selectElement).toHaveAttribute('name', 'custom-field-184');
	expect(selectElement).toHaveClass('controls lc-cf-component-R');

	// Check that the "Select" placeholder and options are rendered
	const placeholderOption = screen.getByText('Select');
	expect(placeholderOption).toBeInTheDocument();
	expect(placeholderOption).toHaveAttribute('disabled');
	expect(placeholderOption).toHaveAttribute('hidden');

	const ureaOption = screen.getByText('Urea');
	const dapOption = screen.getByText('DAP');
	const otherOption = screen.getByText('Other');
	expect(ureaOption).toBeInTheDocument();
	expect(dapOption).toBeInTheDocument();
	expect(otherOption).toBeInTheDocument();
});

test('renders dropdown with default value', () => {
	const dropdownInput = {
		id: 184,
		name: 'Fertilizer',
		field_type: 'R',
		help_text: 'Which fertilizer did you use?',
		dropdown: true,
		options: [
			{ ordering: 1, name: 'Urea' },
			{ ordering: 2, name: 'DAP' },
			{ ordering: 999, name: 'Other' }
		],
		value: 'DAP', // Default value
		required: true,
		ordering: 1
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: dropdownInput
		}
	});

	const selectElement = screen.getByRole('combobox');
	expect(selectElement).toBeInTheDocument();

	// Ensure "DAP" is selected by default
	expect(selectElement).toHaveValue('DAP');
});

test('handles dropdown value change', async () => {
	const dropdownInput = {
		id: 184,
		name: 'Fertilizer',
		field_type: 'R',
		help_text: 'Which fertilizer did you use?',
		dropdown: true,
		options: [
			{ ordering: 1, name: 'Urea' },
			{ ordering: 2, name: 'DAP' },
			{ ordering: 999, name: 'Other' }
		],
		value: null,
		required: true,
		ordering: 1
	};

	const { component } = render(LCCustomFieldFormField, {
		props: {
			formField: dropdownInput
		}
	});

	const selectElement = screen.getByRole('combobox');

	// Listen for change event
	await fireEvent.change(selectElement, { target: { value: 'Urea' } });

	// Verify the value updates correctly
	expect(selectElement).toHaveValue('Urea');

	// Optional: verify component's state changes, if any event handler is used
	component.$on('change', (event) => {
		expect(event.detail.value).toBe('Urea');
	});
});
