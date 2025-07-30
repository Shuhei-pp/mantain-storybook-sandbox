import { Text, TextInput } from "@mantine/core";

export const RegisterPasswordInput = () => {
	return (
		<TextInput
			label={
				<Text fs={"16"} fw={700} lh={1.5}>
					パスワード
					<Text span={true} c={"textGray"} fs={"16"} fw={700} lh={1.5}>
						※半角英数含む8～20文字
					</Text>
				</Text>
			}
			type="password"
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
