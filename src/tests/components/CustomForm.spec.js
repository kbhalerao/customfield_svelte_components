// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';

import LCCustomFieldForm from '../../lib/components/LCCustomFieldForm.svelte';

test('renders simple form', () => {
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
		required: false,
		ordering: 999
	};

	render(LCCustomFieldForm, {
		props: {
			formData: [checkboxInput]
		}
	});

	// Check that the element exists
	const formElement = document.querySelector('cf-form');

	// expect(formElement).toBeInTheDocument();

	// Check class
	// expect(formElement).toHaveClass('lc-cf-formfield');

	// Check its attributes
	// expect(formElement).not.toHaveAttribute('required');
	// expect(formElement).toHaveAttribute('id', 'cf-form');
	// expect(formElement).toHaveAttribute('autocomplete', 'on');

	// const help_text = screen.getByText(
	// 	'What is your cover crop target planting date for this cash crop?'
	// );
	// expect(help_text).toBeInTheDocument();
});
