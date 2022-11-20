import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='homeContainer'>
      <div id='introContainer'>

        <div id='level1'>
          <img id='gdscLogo' src='gdsc_logo.png'></img>
        </div>
        
        <div id='level2'>
          <div id="part1">
              <h1>Welcome</h1>
              
              <h3>To</h3>
          </div>
          <div id="part2">
            <h1 id='G'>G</h1>
            <h1 id='D'>D</h1>
            <h1 id='S'>S</h1>
            <h1 id='C'>C</h1>
          </div>
        </div>

        <div id='level3'>
          <h2>WMU</h2>
        </div>

      </div>

      <div id='coreValue'>
        <div id='val1'>
          val1
        </div>
        <div id='val2'>
          val2
        </div>
        <div id='val3'>
          val3
        </div>

      </div>
      
    </div>
  )
}

export default Home
