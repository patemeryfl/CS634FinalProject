import { h } from 'preact';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<h1>CS634 App</h1>
		<nav>
			<button>Sign In</button>
		</nav>
	</header>
);

export default Header;
