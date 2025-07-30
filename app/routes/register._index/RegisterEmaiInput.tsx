import { TextInput } from "@mantine/core";

export const RegisterEmailInput = () => {
	return (
		<TextInput
			label={"メールアドレス"}
			labelProps={{
				style: {
					fontSize: 16,
					fontWeight: 700,
					lineHeight: 1.5,
				},
			}}
			type="email"
			wrapperProps={{
				style: {
					width: "100%",
					display: "flex",
					gap: 8,
					flexDirection: "column",
				},
			}}
			styles={(theme) => ({
				input: {
					backgroundColor: theme.colors.inputBg[0],
					borderColor: theme.colors.inputBg[0],
				},
			})}
		/>
	);
};
