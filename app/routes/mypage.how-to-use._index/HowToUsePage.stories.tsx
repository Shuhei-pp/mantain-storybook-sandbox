import type { Meta, StoryObj } from "@storybook/react-vite";
import { HowToUsePage } from "./HowToUsePage";

const meta = {
	component: HowToUsePage,
	tags: ["autodocs"],
} satisfies Meta<typeof HowToUsePage>;
export default meta;

export const Default = {} satisfies StoryObj<typeof HowToUsePage>;
