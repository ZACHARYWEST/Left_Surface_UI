
import mermaid from '../assets/images/transparentmermaid.png'
import React, { useEffect, useState } from 'react';


export default function ScrollToTop() {

    const [isVisible, setIsVisible] = useState(false);
    
    const toggleVisibility = () => {
        if(window.pageYOffset > 300){
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(()=> {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return(
        <div className="scroll-to-top">
            {isVisible &&
            <div onClick={scrollToTop}>
                <img src={mermaid} alt="Return to Surface"/>
            </div>}
        </div>
    );
}