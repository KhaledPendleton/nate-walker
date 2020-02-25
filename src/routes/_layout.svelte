<script>
	import FullPageNav from '../components/Navigation/FullPageNav.svelte';
	import PrimaryNav from '../components/Navigation/PrimaryNav.svelte';
	import { primaryNavLinks } from '../constants.js';
	export let segment;

	const indexRoute = '/';
</script>

{#if segment}
	<PrimaryNav
		{indexRoute}
		links={primaryNavLinks}
		page={segment}
	/>

	<main>
		{segment}
		<slot></slot>
	</main>
{:else}
	<FullPageNav links={primaryNavLinks} />
{/if}