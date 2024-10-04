import { motion } from 'framer-motion'
import './App.css'
import Expertise from './pages/Expertise'
import Intro from './pages/Intro'


function App() {


  return (
    <div className='mt-10 container mx-auto flex justify-center px-8 max-w-lg py-8'>
      <div className='gap-4 flex flex-col justify-center items-center '>
        <Intro />
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
        >
          <Expertise />
        </motion.div>


      </div>

    </div>
  )
}

export default App
