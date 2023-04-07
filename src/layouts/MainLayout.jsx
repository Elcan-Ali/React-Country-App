import { useEffect } from 'react'
import Navbar from '../components/UI/Navbar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'


function MainLayout() {
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/country") {
            navigate("/")
        }
    }, [location, navigate])

    return (
        <>
            <header className={`bg-black p-2`}>
                <Navbar />
            </header>
            <main >
                <div className='container py-5'>
                    <Outlet />
                </div>
            </main>
            <footer className={`bg-black p-4 text-white`}>
                <div className='container'>
                    <p className='mb-0'>Copyright &copy; 2023</p>
                </div>
            </footer>

        </>
    )
}

export default MainLayout