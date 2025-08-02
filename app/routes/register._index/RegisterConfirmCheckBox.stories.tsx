import type { Meta, StoryObj } from "@storybook/react-vite";
import { RegisterConfirmCheckbox } from "./RegisterConfirmCheckBox";

const meta = {
	component: RegisterConfirmCheckbox,
	tags: ["autodocs"],
} satisfies Meta<typeof RegisterConfirmCheckbox>;
export default meta;

export const Default = {
	args: {
		checked: false,
		error: undefined,
	},
	argTypes: {
		checked: {
			control: { type: "boolean" },
		},
		error: {
			control: { type: "text" },
		},
	},
} satisfies StoryObj<typeof RegisterConfirmCheckbox>;
