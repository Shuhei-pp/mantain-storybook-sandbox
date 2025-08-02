import type { Meta, StoryObj } from "@storybook/react-vite";
import { RegisterPasswordInput } from "./RegisterPasswordInput";

const meta = {
	component: RegisterPasswordInput,
	tags: ["autodocs"],
} satisfies Meta<typeof RegisterPasswordInput>;
export default meta;

export const Default = {
	args: {
		value: "",
		error: undefined,
	},
	argTypes: {
		value: {
			control: { type: "text" },
		},
		error: {
			control: { type: "text" },
		},
	},
} satisfies StoryObj<typeof RegisterPasswordInput>;
