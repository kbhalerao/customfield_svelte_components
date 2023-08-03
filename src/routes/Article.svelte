<article class="markdown-body entry-content container-lg" itemprop="text"><h1 tabindex="-1" dir="auto"><a id="user-content-customfield_svelte_components" class="anchor" aria-hidden="true" href="#customfield_svelte_components"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>customfield_svelte_components</h1>
<p dir="auto">A reusable NPM module to generate form fields based on LabCore's <code>customfields</code> data structure.</p>
<p dir="auto">The data structure for a LabCore <code>customfield</code> looks like this:</p>
<div class="highlight highlight-source-json notranslate position-relative overflow-auto" dir="auto"><pre>&lbrace;
	<span class="pl-ent">"id"</span>: <span class="pl-c1">114</span>,
	<span class="pl-ent">"name"</span>: <span class="pl-s"><span class="pl-pds">"</span>Name of CustomField<span class="pl-pds">"</span></span>,
	<span class="pl-ent">"value"</span>: [],
	<span class="pl-ent">"default_value"</span>: <span class="pl-s"><span class="pl-pds">"</span>text of default<span class="pl-pds">"</span></span>,
	<span class="pl-ent">"options"</span>: [
		&lbrace;
			<span class="pl-ent">"name"</span>: <span class="pl-s"><span class="pl-pds">"</span>Option 1<span class="pl-pds">"</span></span>,
			<span class="pl-ent">"ordering"</span>: <span class="pl-c1">1</span>
		&rbrace;,
		&lbrace;
			<span class="pl-ent">"name"</span>: <span class="pl-s"><span class="pl-pds">"</span>Option 2<span class="pl-pds">"</span></span>,
			<span class="pl-ent">"ordering"</span>: <span class="pl-c1">2</span>
		&rbrace;,
		&lbrace;
			<span class="pl-ent">"name"</span>: <span class="pl-s"><span class="pl-pds">"</span>Option 3<span class="pl-pds">"</span></span>,
			<span class="pl-ent">"ordering"</span>: <span class="pl-c1">3</span>
		&rbrace;
	],
	<span class="pl-ent">"ordering"</span>: <span class="pl-c1">4</span>,
	<span class="pl-ent">"required"</span>: <span class="pl-c1">true</span>,
	<span class="pl-ent">"help_text"</span>: <span class="pl-s"><span class="pl-pds">"</span>Helpful prompt for this field<span class="pl-pds">"</span></span>,
	<span class="pl-ent">"field_type"</span>: <span class="pl-s"><span class="pl-pds">"</span>R<span class="pl-pds">"</span></span>
&rbrace;</pre><div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="&lbrace;
	&quot;id&quot;: 114,
	&quot;name&quot;: &quot;Name of CustomField&quot;,
	&quot;value&quot;: [],
	&quot;default_value&quot;: &quot;text of default&quot;,
	&quot;options&quot;: [
		&lbrace;
			&quot;name&quot;: &quot;Option 1&quot;,
			&quot;ordering&quot;: 1
		&rbrace;,
		&lbrace;
			&quot;name&quot;: &quot;Option 2&quot;,
			&quot;ordering&quot;: 2
		&rbrace;,
		&lbrace;
			&quot;name&quot;: &quot;Option 3&quot;,
			&quot;ordering&quot;: 3
		&rbrace;
	],
	&quot;ordering&quot;: 4,
	&quot;required&quot;: true,
	&quot;help_text&quot;: &quot;Helpful prompt for this field&quot;,
	&quot;field_type&quot;: &quot;R&quot;
&rbrace;" tabindex="0" role="button" style="display: none;">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div></div>
<h2 tabindex="-1" dir="auto"><a id="user-content-description" class="anchor" aria-hidden="true" href="#description"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>Description</h2>
<p dir="auto">The keys in the JSON represent the following:</p>
<ul dir="auto">
<li><code>id</code>: The primary key of the <code>CustomField</code> in the backend database</li>
<li><code>name</code>: The name of the custom field. To be rendered as the <code>&lt;label&gt;</code> of the form field.</li>
<li><code>field_type</code>: This can be <code>T</code> - text, <code>R</code> - radio, <code>C</code> - checkbox, <code>D</code> - date, <code>M</code>, date-time, <code>N</code> numeric or <code>U</code> user or <code>A</code> - textarea.</li>
<li><code>required</code>: This is true or false, which can be used in form validation.</li>
<li><code>help_text</code>: This is a prompt that can get displayed under the input as help text.</li>
<li><code>options</code>: This is a list of objects, each containing the <code>name</code> and <code>ordering</code> of options. Options are required in the case of <code>radio</code>
and <code>checkbox</code>. If a <code>numeric</code> field has options, then the field is treated as a physical quantity input field, and the options are
considered to be units associated with the physical quantity. Options are ignored for other field types.</li>
<li><code>value</code>: This is the current value of the field. When creating a form object, this is blank, but when editing, it may have a value.
This value is always a string (empty or otherwise), unless the <code>field_type</code> is a <code>C</code>, in which case it is an array of strings.</li>
<li><code>default_value</code>: When rendering a form field, and the value is empty, this value should be used as the default input if present.
Follows the same rules as <code>value</code>.</li>
<li><code>ordering</code> This defines the order in which form fields appear, and can be generally ignored, since the database will send the
fields in the proper ordering.</li>
</ul>
<h2 tabindex="-1" dir="auto"><a id="user-content-usage" class="anchor" aria-hidden="true" href="#usage"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>Usage</h2>
<p dir="auto">Install this library using</p>
<div class="snippet-clipboard-content notranslate position-relative overflow-auto"><pre class="notranslate"><code>npm i customfield_svelte_components
</code></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="npm i customfield_svelte_components" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div></div>
<p dir="auto">In your svelte LabCore project, you will get a data structure comprising of a list of fields like above. You can create a form with them using something like this on your svelte page:</p>
<div class="highlight highlight-source-svelte notranslate position-relative overflow-auto" dir="auto"><pre>&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1">	<span class="pl-k">import</span> &lbrace; <span class="pl-smi">CustomFieldForm</span> &rbrace; <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>customfield_svelte_components<span class="pl-pds">'</span></span>;</span>
<span class="pl-s1"></span>&lt;/<span class="pl-ent">script</span>&gt;

&lt;<span class="pl-ent">div</span>&gt;
	&lt;<span class="pl-ent">form</span>&gt;
		LCCustomFieldForm bind:formData&gt;
		&lt;<span class="pl-ent">input</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>submit<span class="pl-pds">"</span></span> /&gt;
	&lt;/<span class="pl-ent">form</span>&gt;
&lt;/<span class="pl-ent">div</span>&gt;</pre><div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="<script>
	import &lbrace; CustomFieldForm &rbrace; from 'customfield_svelte_components';
</script>

<div>
	<form>
		LCCustomFieldForm bind:formData>
		<input type=&quot;submit&quot; />
	</form>
</div>" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div></div>
<p dir="auto">The svelte page is responsible for providing form tags and input submit buttons etc. The preferred way is to use form actions to submit the data to the server.</p>
<p dir="auto">Individual form fields may also be rendered independently for more control, like so:</p>
<div class="highlight highlight-source-svelte notranslate position-relative overflow-auto" dir="auto"><pre>&lt;<span class="pl-ent">script</span>&gt;<span class="pl-s1"></span>
<span class="pl-s1">    <span class="pl-k">import</span> &lbrace; <span class="pl-smi">CustomFieldFormField</span> &rbrace; <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>customfield_svelte_components<span class="pl-pds">'</span></span>;</span>
<span class="pl-s1"></span>&lt;/<span class="pl-ent">script</span>&gt;

&lt;<span class="pl-ent">div</span>&gt;
    &lt;<span class="pl-ent">form</span>&gt;
        &lbrace;<span class="pl-k">#each</span> <span class="pl-smi">formField</span> <span class="pl-k">in</span> <span class="pl-smi">formData</span>, (<span class="pl-smi">formField</span>.<span class="pl-c1">id</span>)&rbrace;
            <span class="pl-smi">LCCustomFieldFormField</span> <span class="pl-en">bind</span>:<span class="pl-smi">formField</span><span class="pl-k">&gt;</span>
        &lbrace;<span class="pl-k">/</span><span class="pl-smi">each</span>&rbrace;
        <span class="pl-k">&lt;</span><span class="pl-smi">input</span> <span class="pl-smi">type</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>submit<span class="pl-pds">"</span></span><span class="pl-k">&gt;</span>
    <span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-smi">form</span><span class="pl-k">&gt;</span>
<span class="pl-k">&lt;</span><span class="pl-k">/</span><span class="pl-smi">div</span><span class="pl-k">&gt;</span></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="<script>
    import &lbrace; CustomFieldFormField &rbrace; from 'customfield_svelte_components';
</script>

<div>
    <form>
        &lbrace;#each formField in formData, (formField.id)&rbrace;
            LCCustomFieldFormField bind:formField>
        &lbrace;/each&rbrace;
        <input type=&quot;submit&quot;>
    </form>
</div>" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
</svg>
    </clipboard-copy>
  </div></div>
</article>