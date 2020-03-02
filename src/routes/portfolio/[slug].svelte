<script context="module">
    export async function preload({ params }) {
        const response = await this.fetch(`portfolio/${ params.slug }.json`);
        const project = await response.json();

        if (response.status === 200) {
			return { project };
		}
        
        this.error(response.status, project.message);
    }
</script>

<script>
    export let project;
</script>

{ @html project.html }