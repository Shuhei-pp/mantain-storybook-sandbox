import { Flex } from "@mantine/core";
import { RegisterPage } from "./RegisterPage";
import z from "zod";

export const schema = z.object({
	email: z.email("無効なメールアドレスです"),
	password: z.string().min(8, "パスワードは8文字以上である必要があります"),
	agreeToTerms: z
		.boolean()
		.refine((val) => val, "規約には同意する必要があります"),
});

export default function Index() {
	return (
		<Flex direction="column" align={"center"}>
			<RegisterPage
				initialValues={{
					email: "",
					password: "",
					agreeToTerms: false,
				}}
			/>
		</Flex>
	);
}
