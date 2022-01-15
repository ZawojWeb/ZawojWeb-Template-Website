import { motion } from "framer-motion"

export const FramerTest = () => (
  <div className='example-container mt-5 flex justify-center content-center'>
    <SCotactStyle whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />

    <h2 className='flex self-center ml-8 text-white font-bold'>
      {" "}
      <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 mr-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 16l-4-4m0 0l4-4m-4 4h18' />
      </svg>{" "}
      Click this
    </h2>
  </div>
)

const SCotactStyle = styled(motion.div)`
  /* There you can add your custom styles */
`
