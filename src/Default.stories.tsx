import React from 'react';
import DiscordLogin from './DiscordLogin';

export const Default = () => (
  <DiscordLogin
    clientId="796378239802671154"
    redirectUri="http://2b0e3a08a54a.ngrok.io/?path=/story/discord-login-callback--callback"
  />
);

export default {
  title: 'Discord Login/Default',
  component: Default,
}
