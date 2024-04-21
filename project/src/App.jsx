import About from '../components/About'
import Info from '../components/Info'
import Interest from '../components/Interest'
import Socials from '../components/Socials'
import './App.css'

export default function App(){
  return(
    <>
    <div className='container'>
      <div className='content'>
      <Info></Info>
      <About></About>
      <Interest></Interest>
      <Socials></Socials>
      </div>
    </div>
    </>
  )
}