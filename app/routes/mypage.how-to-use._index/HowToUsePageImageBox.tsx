import { Flex } from "@mantine/core";

export const HowToUsePageImageBox = (props: { src: string }) => (
	<Flex m={25.6} h={273.3} justify={"center"} align={"center"}>
		<img
			src={props.src}
			alt="How to use comvey"
			style={{
				height: "100%",
				width: "auto",
				maxWidth: "100%",
				objectFit: "contain",
			}}
		/>
	</Flex>
);
