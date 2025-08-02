import { Title } from "@mantine/core";
import type { ReactElement } from "react";

export const HowToUsePageTitle = (props: { title: ReactElement }) => (
	<Title size="md" fw={700} c="text" ta="center">
		{props.title}
	</Title>
);
