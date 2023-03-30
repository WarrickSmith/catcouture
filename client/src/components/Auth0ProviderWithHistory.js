import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  const scope = 'read:reports';
  const redirect =
    process.env.REACT_APP_AUTH0_REDIRECT_URI || window.location.origin;

  const onRedirectCallback = (appState) => {
    const appStateReturnUri =
      appState?.returnTo === '/catcouture/dashboard' ? '/dashboard' : '';
    navigate(appStateReturnUri);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      scope={scope}
      redirectUri={redirect}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
