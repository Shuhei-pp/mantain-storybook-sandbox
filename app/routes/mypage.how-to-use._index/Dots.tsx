import { Flex } from "@mantine/core";

interface DotsProps {
	activePageId: string;
	pageIds: string[];
	onDotClick: (index: string) => void;
}

export const Dots = ({ pageIds, activePageId, onDotClick }: DotsProps) => {
	return (
		<Flex align={"center"} className={`justify-center space-x-2`} h={24}>
			{pageIds.map((id, index) => (
				<button
					key={id}
					type="button"
					onClick={() => onDotClick?.(id)}
					aria-label={`スライド ${index + 1} へ移動`}
					className={`w-2 h-2 rounded-full transition-all duration-300 ${
						activePageId === id ? "bg-[#333333]" : "bg-black bg-opacity-[0.26]"
					}`}
				/>
			))}
		</Flex>
	);
};
