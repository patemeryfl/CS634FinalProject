import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Header from '../../components/header';
import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';
import style from './style';
//All Users
import users from '../../tests/users';
//Default New Account
import initial from '../../state/initial';

class Account extends Component {
	state = {
        signUp: false,
		login: {
			email: '',
			password:''
        },
        newAccount: {
			first: '',
			last: '',
            school: '',
            email: '',
            password: '',
            signedIn: true
        },
		errors: false
	}
	actions = {
		validateUser: (credentials) => {
			let user = users.filter((item) => item.Profile.email === credentials.email);
			if (user) {
				if (user[0].Profile.password === credentials.password) {
					return user[0];
				}
				this.setState({ errors: 'The password does not match that email.' });
				return false;
			}
			this.setState({ errors: "Sorry, we can't seem to find that email." });
			return false;
		},
		checkForExisting: (credentials) => {
			let user = users.filter((item) => item.Profile.email === credentials.email);
			if (!user[0]) {
				return true;
			}
			return false;
		},
		handleSignInChange: e => {
			const login = this.state.login;
			login[e.target.id] =  e.target.value;
			this.setState({ login });
        },
        handleSignUpChange: e => {
			const newAccount = this.state.newAccount;
			newAccount[e.target.id] =  e.target.value;
			this.setState({ newAccount });
		},
		signIn: () => {
			//This is an anti-pattern
			if(this.state.login.email === '' || this.state.login.password === '') { 
				this.setState({ errors: "Email or Password is missing." })
			} else {
				const user = this.actions.validateUser(this.state.login);
				this.context.store.setState(user);
				this.props.dispatch({ type: 'SIGN_IN' });
			}
		},
		signUp: () => {
			const acc = this.state.newAccount;
			if( acc.first === '' || 
				acc.last === '' || 
				acc.email === '' || 
			    acc.password === '') { 
				this.setState({ errors: "Please fill out all fields." })
			} else {
				if(this.actions.checkForExisting(this.state.newAccount)) {
					const signupDetails = this.state.newAccount;
					const newUser = {...initial, Profile: signupDetails } 
					this.context.store.setState(newUser); 
					this.props.dispatch({ type: 'SIGN_UP' });
				} else {
					this.setState({ errors: 'That email account already exists. Is it yours? Click here to reset your password.' })
				}
			}
        },
        
	}

	componentWillMount() {
		const login = this.state.login;
		login.email = "";
		login.password = "";
        this.setState({ login });
	}
	render() {
        if(this.state.signUp) {
            return (
                <SignUp
					handleChange={this.actions.handleSignUpChange}
					cancel={() => this.setState({ signUp: false, errors: "" })}
					signUp={this.actions.signUp}
					errors={this.state.errors}
				/>
            )
        }
        return (
            <SignIn
                handleChange={this.actions.handleSignInChange}
                signIn={this.actions.signIn}
                signUp={() => this.setState({ signUp: true, errors: "" })}
                errors={this.state.errors}
            />
        )
    }
}

export default connect(state => state)(Account);
