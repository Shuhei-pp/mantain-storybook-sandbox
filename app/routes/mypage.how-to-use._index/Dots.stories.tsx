import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dots } from "./Dots";

const meta = {
	component: Dots,
	tags: ["autodocs"],
} satisfies Meta<typeof Dots>;
export default meta;

export const Default = {
	args: {
		activePageId: "page1",
		pageIds: ["page1", "page2", "page3", "page4", "page5"],
		onDotClick: (id) => alert(`id ${id} がクリックされました`),
	},
	argTypes: {
		activePageId: {
			control: { type: "select" },
			options: ["page1", "page2", "page3", "page4", "page5"],
		},
	},
} satisfies StoryObj<typeof Dots>;
