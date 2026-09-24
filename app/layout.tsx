import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={outfit.className}>
			<body>{children}</body>
		</html>
	);
}
