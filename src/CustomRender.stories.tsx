import React from 'react';
import { render } from 'react-dom';
import DiscordLogin from './DiscordLogin';

export const CustomRender = () => (
  <DiscordLogin
    clientId="796378239802671154"
    redirectUri="http://2b0e3a08a54a.ngrok.io/?path=/story/discord-login-callback--callback"
    render={(renderProps) => (
      <button onClick={renderProps.onClick}>
        Button with custom render
      </button>
    )}
  />
)

export default {
  title: 'Discord Login/Custom Render',
  component: CustomRender,
}
