import '@testing-library/jest-dom';

import { act, fireEvent, render, screen } from '@testing-library/svelte';

import LCCustomFieldFormField from '../../lib/components/LCCustomFieldFormField.svelte';

test('renders file input', async () => {
	const fileInput = {
		id: 157,
		name: 'filepond',
		field_type: 'F',
		help_text: 'Upload file here',
		required: false,
		multiple: true
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: fileInput
		}
	});

	// Check that the element exists
	const inputElement = document.querySelector('input[type="file"]');

	// Check class
	expect(inputElement).toHaveClass('controls lc-cf-component-F');

	// Check its attributes
	expect(inputElement).not.toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('id', 'lc-cf-157');
	expect(inputElement).toHaveAttribute('name', `custom-field-${fileInput.id}`);
	expect(inputElement).toHaveAttribute('type', 'file');

	// Check help text
	const help_text = screen.getByText('Upload file here');
	expect(help_text).toBeInTheDocument();

	// Check file upload
	const file1 = new File(['test file content'], 'test1.txt', {
		type: 'text/plain'
	});

	const file2 = new File(['test file content'], 'test2.txt', {
		type: 'text/plain'
	});

	await act(() =>
		fireEvent.change(inputElement, {
			target: { files: [file1, file2] }
		})
	);
	expect(inputElement.files).toEqual([file1, file2]);
});

test('renders simple required file input', async () => {
	const fileInput = {
		id: 157,
		name: 'filepond',
		field_type: 'F',
		help_text: 'Upload file here',
		required: true,
		multiple: true
	};

	render(LCCustomFieldFormField, {
		props: {
			formField: fileInput
		}
	});

	// Check that the element exists
	const inputElement = document.querySelector('input[type="file"]');
	// Check its attributes
	expect(inputElement).toHaveAttribute('required');
});
