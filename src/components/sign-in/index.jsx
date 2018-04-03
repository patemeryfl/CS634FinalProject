import { h } from 'preact';
import style from './style';

const SignIn = (props) => (
	<div class={props.signedIn ? style.signin : style.container}>
		<form class="form-signin" onSubmit={props.handleSubmit} action="javascript:">
			<h2 class={style.title}>Perfectly</h2>
			<h2 class={style.title}>Punctual</h2>
			<label for="email" class="sr-only">Email address</label>
			<input type="email" id="email" class="form-control"
				placeholder="Email address" required autofocus onChange={props.handleChange}
			/>
			<label for="password" class="sr-only">Password</label>
			<input type="password" id="password" class="form-control" placeholder="Password" required onChange={props.handleChange} />
			<div class={style.actions}>
				<button type="submit">Sign Up</button>
				<button type="submit">Sign In</button>
			</div>
		</form>
	</div>
);

export default SignIn;