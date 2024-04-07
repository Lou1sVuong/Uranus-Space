import Header from '@/components/Header/Header'
import React from 'react'

function Mainlayout({ children }) {
    return (
        <div>
            <Header />
            <div className="mt-[5.7rem]">{children}</div>
        </div>
    )
}

export default Mainlayout
