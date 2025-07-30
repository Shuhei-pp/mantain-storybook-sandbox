import { Button } from "@mantine/core";

export const RegisterSubmitButton = () => {
	return (
		<Button
			type="submit"
			w={"75%"}
			className="bg-black bg-opacity-[0.16]"
			mt={16}
			styles={() => ({
				inner: {
					fontSize: 16,
					fontWeight: 700,
					lineHeight: 1.75,
					color: "black",
					opacity: 0.26,
				},
			})}
		>
			新規登録
		</Button>
	);
};
