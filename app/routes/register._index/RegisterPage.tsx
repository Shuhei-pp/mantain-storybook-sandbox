import { Anchor, Center, Flex } from "@mantine/core";
import { PageTitle } from "~/components/PageTitle";
import { RegisterEmailInput } from "./RegisterEmaiInput";
import { RegisterPasswordInput } from "./RegisterPasswordInput";
import { RegisterConfirmCheckbox } from "./RegisterConfirmCheckBox";
import { RegisterSubmitButton } from "./RegisterSubmitButton";

export const RegisterPage = () => {
	return (
		<Flex direction="column" w={358} gap={72} pt={40}>
			<Flex direction="column" align={"center"} w={"100%"} gap={8} px={16}>
				<PageTitle title="会員登録" />

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
