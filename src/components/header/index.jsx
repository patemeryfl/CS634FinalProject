import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import icons from '../../assets/svgs';

const Header = (props) => (
	<header class={style.header}>
		<nav>
			<Link href="/profile">
				<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
					<path d={icons.profile} />
				</svg>
			</Link>
			<h2>{props.title}</h2>
			<button onClick={props.handleClick}>
				<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
					<path d={icons.add} />
				</svg>
			</button>
		</nav>
	</header>
);

export default Header;
