import WebHeader from './Components/WebHeader'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <WebHeader/>
            <main>
                <Outlet /> {}
            </main>
        </>
    )

}

export default Layout