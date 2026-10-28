import { useEffect, useState } from 'react'
import '../styles/scroll-to-top.css'

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {showButton && (
        <button
          className="scroll-to-top"
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          ↑
        </button>
      )}
    </>
  )
}

export default ScrollToTopButton
