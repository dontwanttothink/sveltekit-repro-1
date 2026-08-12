import * as v from "valibot";
import { prerender } from "$app/server";

async function getBuildTimeEmojis() {
	await Promise.resolve(); // imagine something that can only be done at build time

	if (Date.now() % 2 === 0) {
		return ["😢", "😭", "🐮", "🤠", "🦧"];
	} else {
		return ["🪄", "❓", "👩‍⚕️", "🥲", "❤️"];
	}
}

export const buildTimeEmojis = prerender(async () => {
	return getBuildTimeEmojis();
});

async function fetchDescriptionFromFileSystem(emoji: string) {
	// imagine this actually fetches a description from the file system
	// or some other source available only at build time
	return "this emoji means something related to " + emoji;
}

export const buildTimeEmojiInfo = prerender(
	v.string(),
	async (emoji: string) => {
		const description = await fetchDescriptionFromFileSystem(emoji);
		return `the emoji ${emoji} means ${description}!`;
	},
	{ inputs: async () => ["hi", "hello"] },
);
