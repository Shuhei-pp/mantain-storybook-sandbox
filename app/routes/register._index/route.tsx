import { Anchor, Center, Flex } from "@mantine/core";
import { RegisterConfirmCheckbox } from "./RegisterConfirmCheckBox";
import { RegisterEmailInput } from "./RegisterEmaiInput";
import { RegisterPasswordInput } from "./RegisterPasswordInput";
import { PageTitle } from "~/components/PageTitle";
import { RegisterSubmitButton } from "./RegisterSubmitButton";

export default function Index() {
	return (
		<Flex direction="column" align={"center"}>
			<RegisterPage />
		</Flex>
	);
}

const RegisterPage = () => {
	return (
		<Flex direction="column" w={358} gap={72} pt={40}>
			<Flex direction="column" align={"center"} w={"100%"} gap={8} px={16}>
				<PageTitle />

				<Flex direction="column" align={"center"} w="90%">
					<Flex direction="column" gap={16} w="100%" pt={8} pb={48}>
						<RegisterEmailInput />
						<RegisterPasswordInput />
					</Flex>
					<RegisterConfirmCheckbox />
					<RegisterSubmitButton />
				</Flex>
			</Flex>
			<Center>
				<Anchor c="text2">Topページに戻る</Anchor>
			</Center>
		</Flex>
	);
};
