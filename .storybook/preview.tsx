import type { Preview } from "@storybook/react-vite";
import { addons } from "@storybook/manager-api";
import { MantineProvider } from "@mantine/core";
import { mantineTheme } from "../app/root";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: "todo",
		},
	},
};

export default preview;

const channel = addons.getChannel();

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
	// const { setColorScheme } = useMantineColorScheme();
	// const handleColorScheme = (value: boolean) =>
	// 	setColorScheme(value ? "dark" : "light");

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	// useEffect(() => {
	// 	channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
	// 	return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
	// }, [channel]);

	return <>{children}</>;
}

export const decorators = [
	(renderStory: any) => (
		<ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>
	),
	(renderStory: any) => (
		<MantineProvider theme={mantineTheme}>{renderStory()}</MantineProvider>
	),
];
