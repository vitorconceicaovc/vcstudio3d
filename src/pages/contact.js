'use client';
import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import styles from '../app/page.module.scss'
import Contact from '../components/ContactPage'

export default function ContactPage() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        (
          async () => {
              const LocomotiveScroll = (await import('locomotive-scroll')).default
              const locomotiveScroll = new LocomotiveScroll();
    
              setTimeout( () => {
                setIsLoading(false);
                document.body.style.cursor = 'default'
                window.scrollTo(0,0);
              }, 2000)
          }
        )()
    }, [])

    return (
        <main className={styles.main}>
            <AnimatePresence mode='wait'>
                {isLoading && <Preloader />}
            </AnimatePresence>
            <Contact />
        </main>
        
    )
}