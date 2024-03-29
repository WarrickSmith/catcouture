import { useAuth0 } from '@auth0/auth0-react';
import Loader from './Loader';

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <button>
        <Loader />
      </button>
    );
  }

  if (isAuthenticated) {
    return (
      <button
        onClick={() =>
          logout({
            returnTo:
              process.env.REACT_APP_AUTH0_REDIRECT_URI ||
              window.location.pathname,
          })
        }
      >
        Log Out
      </button>
    );
  }

  return (
    <>
      <button className="btn-login" onClick={() => loginWithRedirect()}>
        Log In
      </button>
      <p style={{ fontSize: '0.75rem' }}>( guest@guest.com pw: guest )</p>
    </>
  )
};

export default LoginButton;
