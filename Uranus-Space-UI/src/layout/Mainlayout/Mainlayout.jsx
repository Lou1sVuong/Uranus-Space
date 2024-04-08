import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="">{children}</div>
            <Footer/>
        </div>
    )
}

export default MainLayout
