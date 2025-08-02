import type { Meta, StoryObj } from "@storybook/react-vite";
import { RegisterSubmitButton } from "./RegisterSubmitButton";
import { fn } from "storybook/test";

const meta = {
	component: RegisterSubmitButton,
	tags: ["autodocs"],
} satisfies Meta<typeof RegisterSubmitButton>;
export default meta;

export const Default = {
	args: { onClick: fn(() => alert("登録ボタンがクリックされました")) },
} satisfies StoryObj<typeof RegisterSubmitButton>;
