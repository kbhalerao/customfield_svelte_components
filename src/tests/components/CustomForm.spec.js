// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/svelte';

import LCCustomFieldFormField from '../../lib/components/LCCustomFieldFormField.svelte';

test('renders simple form', () => {
	// Check that the element exists
	const formElement = screen.getByRole('form');
	expect(formElement).toBeInTheDocument();

	// Check class
	expect(formElement).toHaveClass('lc-cf-formfield');

	// Check its attributes
	expect(formElement).not.toHaveAttribute('required');
	expect(formElement).toHaveAttribute('id', 'cf-form');
	expect(formElement).toHaveAttribute('autocomplete', 'on');

	const help_text = screen.getByText(
		'What is your cover crop target planting date for this cash crop?'
	);
	expect(help_text).toBeInTheDocument();
});
