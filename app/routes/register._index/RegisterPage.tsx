import { Anchor, Center, Flex } from "@mantine/core";
import { PageTitle } from "~/components/PageTitle";
import { RegisterEmailInput } from "./RegisterEmailInput";
import { RegisterPasswordInput } from "./RegisterPasswordInput";
import { RegisterConfirmCheckbox } from "./RegisterConfirmCheckBox";
import { RegisterSubmitButton } from "./RegisterSubmitButton";
import { useForm } from "@mantine/form";
import { schema } from "./route";
import type z from "zod";
import { zod4Resolver } from "mantine-form-zod-resolver";

type Props = {
	initialValues: z.infer<typeof schema>;
};

export const RegisterPage = ({ initialValues }: Props) => {
	const form = useForm<z.infer<typeof schema>>({
		initialValues,
		validate: zod4Resolver(schema),
	});
	return (
		<Flex direction="column" w={358} gap={72} pt={40}>
			<form
				onSubmit={form.onSubmit((values) => {
					console.log("Form submitted with values:", values);
				})}
			>
				<Flex direction="column" align={"center"} w={"100%"} gap={8} px={16}>
					<PageTitle title="会員登録" />

					<Flex direction="column" align={"center"} w="90%">
						<Flex direction="column" gap={16} w="100%" pt={8} pb={48}>
							<RegisterEmailInput {...form.getInputProps("email")} />
							<RegisterPasswordInput {...form.getInputProps("password")} />
						</Flex>
						<RegisterConfirmCheckbox {...form.getInputProps("agreeToTerms")} />
						<RegisterSubmitButton />
					</Flex>
				</Flex>
			</form>
			<Center>
				<Anchor c="text2">Topページに戻る</Anchor>
			</Center>
		</Flex>
	);
};
