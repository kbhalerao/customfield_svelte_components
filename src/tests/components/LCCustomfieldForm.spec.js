// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom';

import { render, fireEvent, screen } from '@testing-library/svelte';

import LCCustomFieldFormField from '../../lib/components/LCCustomFieldFormField.svelte';
import LCCustomFieldForm from '../../lib/components/LCCustomFieldForm.svelte';

// test('shows proper heading when rendered', () => {
// 	render(LCCustomFieldForm, { name: 'World' });
// 	const heading = screen.getByText('Hello World!');
// 	expect(heading).toBeInTheDocument();
// });

test('renders simple input', () => {
	render(LCCustomFieldFormField, {});
	const heading = screen.getByText('Hello World!');
	expect(heading).toBeInTheDocument();
});
