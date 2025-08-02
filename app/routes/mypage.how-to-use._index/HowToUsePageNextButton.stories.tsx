import type { Meta, StoryObj } from "@storybook/react-vite";
import { HowToUsePageNextButton } from "./HowToUsePageNextButton";

const meta = {
	component: HowToUsePageNextButton,
	tags: ["autodocs"],
} satisfies Meta<typeof HowToUsePageNextButton>;
export default meta;

export const Default = {
	args: {
		activePage: "slide-1",
		onClick: () => alert(`次のページに進むボタンがクリックされました`),
	},
	argTypes: {
		activePage: {
			control: { type: "select" },
			options: ["slide-1", "slide-2", "slide-3", "slide-4", "slide-5"],
		},
	},
} satisfies StoryObj<typeof HowToUsePageNextButton>;
