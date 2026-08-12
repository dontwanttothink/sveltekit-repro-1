<script lang="ts">
	import { buildTimeEmojis, buildTimeEmojiInfo } from "./example.remote";
</script>

{#each await buildTimeEmojis() as emoji}
	<h2>{emoji}</h2>
	<p>{await buildTimeEmojiInfo(emoji)}</p>
{/each}
