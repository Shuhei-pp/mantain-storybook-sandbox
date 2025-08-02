import { Anchor, Checkbox, type CheckboxProps, Text } from "@mantine/core";

export const RegisterConfirmCheckbox = (props: CheckboxProps) => {
	return (
		<Checkbox
			w={"100%"}
			styles={{
				body: {
					alignItems: "center",
				},
			}}
			label={
				<Text fs={"16"} fw={400} lh={1.5}>
					<Anchor underline="not-hover">プライバシーポリシー</Anchor>と
					<Anchor underline="not-hover">利用規約</Anchor>
					に同意します。
				</Text>
			}
			{...props}
		/>
	);
};
