import type { Meta, StoryObj } from "@storybook/react-vite";
import { RegisterEmailInput } from "./RegisterEmailInput";

const meta = {
	component: RegisterEmailInput,
	tags: ["autodocs"],
} satisfies Meta<typeof RegisterEmailInput>;
export default meta;

export const Default = {
	args: {
		value: "",
		label: "メールアドレス",
		error: undefined,
	},
	argTypes: {
		value: {
			control: { type: "text" },
		},
		label: {
			control: { type: "text" },
		},
		error: {
			control: { type: "text" },
		},
	},
} satisfies StoryObj<typeof RegisterEmailInput>;
