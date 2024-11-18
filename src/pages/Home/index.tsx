import {
	Container,
	BackgroundImg,
	CardCalc,
	ImgCalc,
	TextCalc,
} from "./styles";
import { Link } from "react-router-dom";

import fibonacciImg from "../../assets/image_calculator/fibonacci.png";
import mathbasic from '../../assets/image_calculator/mathbasic.png'

export default function Home(): JSX.Element {
	const listTypeCalc: Array<{ url: string; nameCalc: string; link: string }> = [
		{
			url: mathbasic,
			nameCalc: "Matemática básica",
			link: "/mathbasic",
		},
		{
			url: fibonacciImg,
			nameCalc: "Fibonacci",
			link: "/fibonacci",
		},
	];

	return (
		<Container>
			<BackgroundImg />
			{listTypeCalc.map((typeCalc) => (
				<div key={typeCalc.nameCalc}>
					<Link className="linkTypeCalc" to={typeCalc.link}>
						<CardCalc>
							<ImgCalc src={typeCalc.url} alt={typeCalc.nameCalc} />
							<TextCalc>{typeCalc.nameCalc}</TextCalc>
						</CardCalc>
					</Link>
				</div>
			))}
		</Container>
	);
}
