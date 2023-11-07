import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>
        <main className='container mx-auto bg-gray-200  md:flex md:justify-center'>
            <div className='w-full'>
                <Outlet/>
            </div>
        </main>
    </>
  )
}

export default AuthLayout