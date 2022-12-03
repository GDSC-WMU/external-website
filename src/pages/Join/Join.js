import React from 'react'
import './Join.css'

function Join() {
  return (
    <div className='joinContainer'>
      <div id='joinHeader'>
        <h2>We would be excited to see you in our team!</h2>
      </div>
      <div id='content'>
        <div id='joinLinks'>
            <button class="button-56" role="button"><a id="newsletter" href='http://eepurl.com/ifjj8v'>Sign up for our newsletter</a></button>
            <button class="button-54" role="button"><a id="gdsc" href='https://gdsc.community.dev/western-michigan-university/'>Join GDSC WMU Community</a></button>
            <button class="button-55" role="button"><a id="discord" href='https://discord.gg/UfKbpNGx'>Join our Discord server</a></button>
            
        </div>
        <div id='jobPosting'>
            <h3>Open Roles</h3>
        </div>

      </div>
    </div>
  )
}

export default Join
