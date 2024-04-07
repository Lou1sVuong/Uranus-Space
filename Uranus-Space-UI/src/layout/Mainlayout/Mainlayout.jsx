import Header from '@/components/Header/Header'

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="mt-[5.7rem]">{children}</div>
        </div>
    )
}

export default MainLayout
