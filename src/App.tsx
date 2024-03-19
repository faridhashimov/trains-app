import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages'
import { Characteristics } from './components'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/:trainId" element={<Characteristics />} />
            </Route>
        </Routes>
    )
}

export default App
