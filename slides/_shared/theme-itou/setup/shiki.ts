import { defineShikiSetup } from "@slidev/types";

export default defineShikiSetup(() => ({
	theme: {
		dark: "dracula",
		// Dracula 是為深色背景設計的（前景文字接近白色）。淺色模式的程式碼區塊
		// 背景被 layout.css 強制改成 #f8f8f8，若這裡仍用 dracula，一般文字
		// （非關鍵字）會變成「近白色文字疊在近白色背景上」，整段幾乎看不見，
		// 只剩下高飽和度的關鍵字顏色還看得到。換成專為淺色背景設計的主題。
		light: "vitesse-light"
	}
}));
