import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navigation from './componants/navigation';
import HeroSection from './componants/Hero';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
 
      <Navigation/>
      <HeroSection/>
    
    </div>
  )
}

export default App;
