'use client'
import React,{ useState,useEffect} from 'react'
import './backToTopBtn.css'

export default function BackToTopBtn() {
    const [scroll, setScroll] = useState(0);
    
        useEffect(() => {
                window.addEventListener('scroll', () => {
                    setScroll(window.scrollY);
                })
                return () => {
                    window.removeEventListener('scroll', () => {
                        setScroll(window.scrollY);
                    })
                }
            }, [scroll])

        const backToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
  
  
    return (
        <a
           onClick={backToTop}
           className={`back-to-top d-flex align-items-center justify-content-center ${
  scroll > 100 ? 'active' : ''
}`}
        >
            <i className="bi bi-arrow-up-short"></i>
        </a>
    )
}
