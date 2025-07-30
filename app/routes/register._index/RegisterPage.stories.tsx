import type { Meta } from "@storybook/react-vite";
import { RegisterPage } from "./RegisterPage";

const meta = {
	component: RegisterPage,
} satisfies Meta<typeof RegisterPage>;
export default meta;

export const Default = {
	args: {},
};
