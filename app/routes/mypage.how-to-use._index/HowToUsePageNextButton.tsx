import { Button } from "@mantine/core";
interface Props {
	activePage: string;
	onClick: () => void;
}

export const HowToUsePageNextButton = ({ activePage, onClick }: Props) => (
	<Button
		color="buttonBlack"
		type="button"
		h={60}
		w={268.5}
		radius={12}
		onClick={onClick}
		fs={"md"}
		fw={700}
		lh={1.75}
	>
		{activePage === "slide-5" ? "はじめる" : "次へ"}
	</Button>
);
