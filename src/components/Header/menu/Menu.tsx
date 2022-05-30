import React from 'react'
import { MenuStyle } from './MenuStyle'

export default function Menu() {
  return (
    <MenuStyle>
      <section>
      <h1>Logo Generation Cast</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Posts</li>
          <li>Video Cast</li>
          <li>PodCast</li>
        </ul>
      </nav>
      </section>

      <section>
        <div>search : <input type="text" placeholder="Search" /></div>
      </section>
    </MenuStyle>
  )
}
