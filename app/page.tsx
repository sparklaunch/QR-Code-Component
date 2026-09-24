import Image from "next/image";
import QRCode from "../public/assets/images/QRCode.png";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.card}>
				<Image src={QRCode} alt="QR Code Image" />
				<h2>Improve your front-end skills by building projects</h2>
				<p>
					Scan the QR code to visit Frontend Mentor and take your
					coding skills to the next level
				</p>
			</div>
		</main>
	);
}
