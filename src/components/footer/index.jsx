import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Footer = () => (
	<header class={style.header}>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/page2">Page 2</Link>
			<Link activeClassName={style.active} href="/page3">Page 3</Link>
		</nav>
	</header>
);

export default Footer;