import { defineWindiSetup } from "@slidev/types";
import { resolve } from "path";

export default defineWindiSetup(() => ({
	extract: {
		include: [resolve(__dirname, "../**/*.{vue,ts}")]
	},
	shortcuts: {
		// custom the default background
		"bg-main": "bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])"
	}
}));
