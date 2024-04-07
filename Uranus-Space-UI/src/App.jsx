import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes/index'
import MainLayout from './layout/Mainlayout/Mainlayout'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component
                        const Layout = route.layout || MainLayout
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        {' '}
                                        <Page />{' '}
                                    </Layout>
                                }
                            />
                        )
                    })}
                    <Route
                        path="*"
                        element={
                            <MainLayout> {/* <NotFound />{' '} */}</MainLayout>
                        }
                    />
                </Routes>
            </Router>
        </>
    )
}

export default App
