# customfield_svelte_components

A reusable NPM module to generate form fields based on LabCore's `customfields` data structure.

The data structure for a LabCore `customfield` looks like this:

```json
{
	"id": 114,
	"name": "Name of CustomField",
	"value": [],
	"default_value": "text of default, see below",
	"options": [
		{
			"name": "Option 1",
			"ordering": 1
		},
		{
			"name": "Option 2",
			"ordering": 2
		},
		{
			"name": "Option 3",
			"ordering": 3
		}
	],
	"ordering": 4,
	"required": true,
	"help_text": "Helpful prompt for this field",
	"field_type": "R"
}
```

## Description

The keys in the JSON represent the following:

- `id`: The primary key of the `CustomField` in the backend database
- `name`: The name of the custom field. To be rendered as the `<label>` of the form field.
- `field_type`: This can be `T` - text, `R` - radio, `C` - checkbox, `D` - date, `M`, date-time, `N` numeric or `U` user or `A` - textarea.
- `required`: This is true or false, which can be used in form validation.
- `help_text`: This is a prompt that can get displayed under the input as help text.
- `options`: This is a list of objects, each containing the `name` and `ordering` of options. Options are required in the case of `radio` and `checkbox`. If a `numeric` field has options, then the field is treated as a physical quantity input field, and the options are considered to be units associated with the physical quantity. For the User selection field, options are provided as a list of arrays like so: `[['username', 'UserFirst UserLast"]]`.
  Options are ignored for other field types.
- `value`: This is the current value of the field. When creating a form object, this is blank, but when editing, it may have a value. This value is always a string (empty or otherwise), with the following exceptions:
  - If the `field_type` is a `C`, we store an array of strings, which can be empty if no options are selected.
  - If the `field_type` is `N` and no options are present, we store it as a number
  - If the `field_type` is `N` and options are present (i.e. this is a physical quantity), then we store it as an array of a number and its units as a string, e.g. [45, 'lb/ac']
- `default_value`: When rendering a form field, and the value is empty, this value should be used as the default input if present. Follows the same rules as `value`, including the exceptions.
- `ordering` This defines the order in which form fields appear, and can be generally ignored, since the database will send the
  fields in the proper ordering.

## Usage

Install this library using

```
npm i @agsci/customfield-svelte-components
```

In your svelte LabCore project, you will get a data structure comprising of a list of fields like above. You can create a form with them using something like this on your svelte page:

```svelte
<script>
	import { LCCustomFieldForm } from '@agsci/customfield-svelte-components';
</script>

<div>
	<form>
		<LCCustomFieldForm bind:formData>
		<input type="submit" />
	</form>
</div>
```

The svelte page is responsible for providing form tags and input submit buttons etc. The preferred way is to use form actions to submit the data to the server.

Individual form fields may also be rendered independently for more control, like so:

```svelte
<script>
    import { LCCustomFieldFormField } from '@agsci/customfield-svelte-components';
</script>

<div>
    <form>
        {#each formField in formData, (formField.id)}
            LCCustomFieldFormField bind:formField>
        {/each}
        <input type="submit">
    </form>
</div>
```

## REPL

Here's a live <a href="https://svelte.dev/repl/56f439bb8e06435a92c4a69ef43e54f4?version=4.1.2">example</a>

## Styling

The form and fields currently use Bootstrap 5 class names for styling, (which provides some default style options).
It also provides the following class names that can be used to customize the styling:

```html
<div class="mb-3">
	<div class="lc-cf-formfield">
		<label class="lc-cf-control-label"> </label>
		<input class="controls lc-cf-component-[R|C|T...]" />
	</div>
</div>
```

The inputs can be styled together using the `controls` class, or you can style each component type distinctly
using the `lc-cf-component-X` classname.

The radio and checkbox widgets are nested in one more level of divs and follow the Bootstrap 5 pattern, where
the `<label>` and `<input>` tags are siblings rather than nested.

# Changelog

- v0.0.7 Sep 2 2023. Small update to formatting
- v0.0.6 Aug 22 2023. Updated dependencies to allow installation without --force
- v0.0.5 Aug 17 2023. Updated checkbox component to be reactive to changes in data packet.
- v0.0.4 Aug 6 2023. Updated index.js to allow for proper imports into other projects.
- v0.0.2 Aug 3 2023. Bugfixes so that checkbox and multiselect are now working better.
- v0.0.1 Aug 2 2023. First commit

# Contributors

Aditya Shukla, EC Infosolutions.
Kaustubh Bhalerao, AgSci LLC
Chetan Bawankule, EC Infosolutions.
