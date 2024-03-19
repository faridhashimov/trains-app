import { Outlet } from 'react-router-dom'
import { Trains } from '../../components'
import './Home.css'

const Home = () => {
    return (
        <main className="main">
            <Trains />
            <Outlet />
        </main>
    )
}

export default Home
