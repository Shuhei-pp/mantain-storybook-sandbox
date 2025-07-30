import type { Meta } from "@storybook/react-vite";
import { PageTitle } from "./PageTitle";

const meta = {
	component: PageTitle,
} satisfies Meta<typeof PageTitle>;
export default meta;

export const Default = {
	args: {
		title: "Page Title",
	},
};
