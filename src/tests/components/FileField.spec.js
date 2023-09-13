import '@testing-library/jest-dom';

import { act, fireEvent, render, screen } from '@testing-library/svelte';

import LCCustomFieldFormField from '../../lib/components/LCCustomFieldFormField.svelte';

test('renders file input', async () => {
	const fileInput = {
		id: 157,
		name: 'filepond',
		field_type: 'F',
		help_text: '',
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

	// Check its attributes
	expect(inputElement).not.toHaveAttribute('required');
	expect(inputElement).toHaveAttribute('name', `custom-field-${fileInput.id}`);
	expect(inputElement).toHaveAttribute('type', 'file');

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
