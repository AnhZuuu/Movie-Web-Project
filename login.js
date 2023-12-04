import { GoogleLogin } from 'react-google-login';

const clientID = "1073671516569-f78dsslte5hclh6mtjbfdv2s9b9t26tq.apps.googleusercontent.com";

function Login() {
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILURE! res ", res);
    }
    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )

}

export default Login;