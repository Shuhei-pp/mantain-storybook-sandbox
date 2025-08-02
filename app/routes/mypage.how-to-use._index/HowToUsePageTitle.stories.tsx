import type { Meta, StoryObj } from "@storybook/react-vite";
import { HowToUsePageTitle } from "./HowToUsePageTitle";

const meta = {
	component: HowToUsePageTitle,
	tags: ["autodocs"],
} satisfies Meta<typeof HowToUsePageTitle>;
export default meta;

export const Default = {
	args: {
		title: <>ようこそ, comveyへ。 ご利用方法について</>,
	},
	argTypes: {
		title: {
			control: { type: "text" },
		},
	},
} satisfies StoryObj<typeof HowToUsePageTitle>;
