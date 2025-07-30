import { Title } from "@mantine/core";

type Props = {
	title: string;
};

export const PageTitle = ({ title }: Props) => {
	return (
		<Title
			c="text"
			fw="700"
			fz={20}
			pb={8}
			lh={1.6}
			w={"100%"}
			ta="center"
			className="border-b border-solid border-opacity-[0.16] border-b-black"
		>
			{title}
		</Title>
	);
};
