import { useState, useEffect } from 'react'

function useScroll() {
    const [scrollingUp, setScrollingUp] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY

            if (scrollTop > 600) {
                setScrollingUp(false)
            } else {
                setScrollingUp(true)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return scrollingUp
}

export default useScroll
