import { Flex, List, Text } from "@mantine/core";
import { type ReactElement, useState } from "react";
import { Dots } from "./Dots";
import { HowToUsePageImageBox } from "./HowToUsePageImageBox";
import { HowToUsePageTitle } from "./HowToUsePageTitle";
import { HowToUsePageNextButton } from "./HowToUsePageNextButton";

export const HowToUsePage = () => {
	const [activePage, setActivePage] = useState("slide-1");

	const pages: Array<{
		id: string;
		title: ReactElement;
		content: ReactElement;
		alertList?: ReactElement;
	}> = [
		{
			id: "slide-1",
			title: (
				<HowToUsePageTitle
					title={<>ようこそ, comveyへ。 ご利用方法について</>}
				/>
			),
			content: <HowToUsePageImageBox src="/images/how-to-use/Step1.png" />,
		},
		{
			id: "slide-2",
			title: (
				<HowToUsePageTitle
					title={
						<>
							ホーム画面上部のボタン、もしくはカメラボタン
							<br />
							をタップ
						</>
					}
				/>
			),
			content: <HowToUsePageImageBox src="/images/how-to-use/Step2.png" />,
		},
		{
			id: "slide-3",
			title: <HowToUsePageTitle title={<>バッグの二次元コードを読み取る</>} />,
			content: <HowToUsePageImageBox src="/images/how-to-use/Step3.png" />,
		},
		{
			id: "slide-4",
			title: <HowToUsePageTitle title={<>クーポンを選択する</>} />,
			content: <HowToUsePageImageBox src="/images/how-to-use/Step4.png" />,
			alertList: (
				<List pl={16} py={16} size="md" c="text" listStyleType="disc" w="100%">
					<List.Item>
						クーポンはcomveyへの返却が確認され次
						<br />
						第、クーポンコードが発行され使える状態に
						<br />
						なります。
					</List.Item>
					<List.Item>
						一部のブランドではクーポンを発行しており
						<br />
						ません。
					</List.Item>
				</List>
			),
		},
		{
			id: "slide-5",
			title: (
				<HowToUsePageTitle
					title={<>バッグを折りたたんで、ポストに返却する</>}
				/>
			),
			content: <HowToUsePageImageBox src="/images/how-to-use/Step5.png" />,
			alertList: (
				<List pl={16} py={16} size="md" c="text" listStyleType="disc" w="100%">
					<List.Item>
						商品受け取り後、
						<Text span fw={700}>
							1週間以内
						</Text>
						に投函してくだ
						<br />
						さい。
					</List.Item>
					<List.Item>切手を貼る必要はございません。</List.Item>
					<List.Item>
						全国の全てのポストで返却可能です。（郵便
						<br />局 ・コンビニ含む）
					</List.Item>
					<List.Item>
						宅配配送伝票は剥がしてください。（多少の
						<br />
						りが残っても問題ございません）
					</List.Item>
				</List>
			),
		},
	];

	return (
		<Flex direction="column" align="center" px={16} w={390}>
			{pages.find((page) => page.id === activePage)?.title}
			{pages.find((slide) => slide.id === activePage)?.content}

			<Dots
				activePageId={activePage}
				pageIds={pages.map((slide) => slide.id)}
				onDotClick={(pageId) => {
					setActivePage(pageId);
				}}
			/>

			<HowToUsePageNextButton
				activePage={activePage}
				onClick={() => {
					setActivePage((prev) =>
						prev === "slide-5"
							? "slide-5"
							: `slide-${parseInt(prev.split("-")[1]) + 1}`,
					);
				}}
			/>
			{pages.find((slide) => slide.id === activePage)?.alertList}
		</Flex>
	);
};
