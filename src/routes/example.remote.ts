import * as v from "valibot";
import { prerender } from "$app/server";

export const buildTimeEmojis = prerender(async () => {
	if (Date.now() % 2 === 0) {
		return ["😢", "😭", "🐮", "🤠", "🦧"];
	} else {
		return ["🪄", "❓", "👩‍⚕️", "🥲", "❤️"];
	}
});

async function fetchDescriptionFromFileSystem(emoji: string) {
	// imagine this actually fetches a description from the file system
	// or some other source available only at build time
	return "something related to " + emoji;
}

export const buildTimeEmojiInfo = prerender(
	v.string(),
	async (emoji: string) => {
		const description = await fetchDescriptionFromFileSystem(emoji);
		return `the emoji ${emoji} means ${description}!`;
	},
	{ inputs: async () => await buildTimeEmojis() },
);
