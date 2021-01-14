import React, { Component, useEffect, useState } from 'react';

interface DiscordLoginProps {
  clientId: string,
  redirectUri: string,
  scope?: string,
  render?: any,
}

function DiscordLogin({ clientId, scope = 'identify', render, redirectUri }: DiscordLoginProps) {
  const [ popup, setPopup ] = useState<any>()

  const handleMessage = (event: MessageEvent) => {
    console.log(event)
  }

  function onClick () {
    const dPopup = window.open(`https://discord.com/api/oauth2/authorize?response_type=token&client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`, 'discordLogin', 'height=700,width=500')
    window.addEventListener('message', handleMessage, false)
  }

  return render ? render({ onClick }) : (
    <button onClick={onClick}>
      Login with Discord
    </button>
  );
}

export default DiscordLogin;
