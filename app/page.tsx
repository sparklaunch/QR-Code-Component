import Image from "next/image";
import qrCode from "./assets/images/qr-code.png";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.card}>
				<Image src={qrCode} alt="QR Code" />
				<h2>Improve your front-end skills by building projects</h2>
				<p>
					Scan the QR code to visit Frontend Mentor and take your
					coding skills to the next level
				</p>
			</div>
		</main>
	);
}
