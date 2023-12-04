import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientID = "1073671516569-f78dsslte5hclh6mtjbfdv2s9b9t26tq.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        console.log("Log out successfully");
    }
    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId= {clientId}
                buttonText= {"Logout"}
                onLogoutSuccess={onLSuccess}
            />
        </div>
    )
}

export default Logout;