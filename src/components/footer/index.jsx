import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Footer = () => (
	<header class={style.header}>
		<nav>
			<Link activeClassName={style.active} href="/">Upcoming</Link>
			<Link activeClassName={style.active} href="/calendar">Calendar</Link>
			<Link activeClassName={style.active} href="/assignments">Assignments</Link>
			<Link activeClassName={style.active} href="/courses">Courses</Link>
		</nav>
	</header>
);

export default Footer;