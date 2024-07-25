<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';
	import Label from './Label.svelte';

	export let slice: Content.RichTextSlice;
</script>

<section class="container">
	<div class="text">
		<PrismicRichText
			field={slice.primary.content}
			components={{
				label: Label
			}}
		/>
	</div>
</section>

<style>
	.container {
		max-width: 600px;
		margin: 6em auto;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
			'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	}

	.text {
		width: 100%;
		max-width: var(--size-content-3);
	}
</style>
