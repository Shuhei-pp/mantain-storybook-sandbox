import type { Meta, StoryObj } from "@storybook/react-vite";
import { RegisterPage } from "./RegisterPage";

const meta = {
	component: RegisterPage,
	tags: ["autodocs"],
} satisfies Meta<typeof RegisterPage>;
export default meta;

export const Default = {
	args: {
		initialValues: {
			email: "",
			password: "",
			agreeToTerms: false,
		},
	},
} satisfies StoryObj<typeof RegisterPage>;
