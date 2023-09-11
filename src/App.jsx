import Jobs from './Jobs'

function App() {

  return (
    <div className='w-[100%]'>
      <img src="/assets/bg-header-desktop.svg" alt="" className='bg-[#5da5a4] w-[100%] hidden lg:block' />
      <img src="/assets/bg-header-mobile.svg" alt="" className='bg-[#5da5a4] w-[100%] lg:hidden' />
      <Jobs/>
      </div>
  )
}

export default App
