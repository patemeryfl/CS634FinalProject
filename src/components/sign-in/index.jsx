import { h } from 'preact';
import style from './style';

const SignIn = (props) => (
	<div class={style.container}>
		<h2 class={style.title}>Perfectly</h2>
		<h2 class={style.title}>Punctual</h2>
		<label for="email" class="sr-only">Email address</label>
		<input type="email" id="email" class="form-control"
			placeholder="Email address" required autofocus onChange={props.handleChange}
		/>
		<label for="password" class="sr-only">Password</label>
		<input type="password" id="password" class="form-control" placeholder="Password" required onChange={props.handleChange} />
		<div class={style.actions}>
			<button onClick={props.signUp}>Sign Up</button>
			<button onClick={props.signIn}>Sign In</button>
		</div>
		<div><br />
			{props.errors ? 
				<div class='alert alert-warning'>
					<p>{props.errors}</p>
				</div> : <div />
			}
		</div>
	</div>
);

export default SignIn;