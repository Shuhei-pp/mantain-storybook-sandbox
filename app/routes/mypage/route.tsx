import { Outlet } from "@remix-run/react";

export const Layout = () => {
	return (
		<>
			<header>hoge</header>
			<div className="pt-4">
				<Outlet />
			</div>
			<footer>fuga</footer>
		</>
	);
};

export default Layout;
