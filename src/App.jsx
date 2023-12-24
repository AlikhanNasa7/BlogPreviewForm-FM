import { useState } from 'react'
import './App.css'
import svg from '../public/images/illustration-article.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='card'>
      <img src={svg} alt="icon" className='main_icon' />
      <p className='current-state'>Learning</p>
      <p className='publish-date'>Published 21 Dec 2023</p>
      <h2 className='title'>HTML & CSS foundations</h2>
      <p className='info'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
      <p className='author-info'><img src="../images/image-avatar.webp" alt="" /><p>Greg Hooper</p></p>
    </div>
  )
}

export default App
