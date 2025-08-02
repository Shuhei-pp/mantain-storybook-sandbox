import type { Meta, StoryObj } from "@storybook/react-vite";
import { HowToUsePageImageBox } from "./HowToUsePageImageBox";

const meta = {
	component: HowToUsePageImageBox,
	tags: ["autodocs"],
} satisfies Meta<typeof HowToUsePageImageBox>;
export default meta;

export const Default = {
	args: {
		src: "/images/how-to-use/Step1.png",
	},
	argTypes: {
		src: {
			control: { type: "select" },
			options: [
				"/images/how-to-use/Step1.png",
				"/images/how-to-use/Step2.png",
				"/images/how-to-use/Step3.png",
				"/images/how-to-use/Step4.png",
				"/images/how-to-use/Step5.png",
			],
		},
	},
} satisfies StoryObj<typeof HowToUsePageImageBox>;
