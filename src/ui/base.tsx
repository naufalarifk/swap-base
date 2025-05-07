import { Outlet } from 'react-router'
import { Navbar } from '../components/Navbar'

export const Base = () => {
    return (
        <div className="relative h-full min-h-screen bg-dark-primary bg-[url('/images/bg-create-token.webp')] bg-cover bg-center bg-no-repeat">
            <div>
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}