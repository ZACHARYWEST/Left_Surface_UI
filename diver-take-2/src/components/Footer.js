
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer(){

    return(
        <footer className="footer_styling">
            <br/>
            <br/>
            <p className="">Capstone project by Zachary West. To learn more, view his <a href="https://github.com/ZACHARYWEST">GitHub</a> and <a href="https://www.linkedin.com/in/zacharydwest/">LinkedIn</a> pages.</p>  
            <p className="footer_copyright"><FontAwesomeIcon icon={faCopyright}/> Left Surface 2021</p>
            <br/>
        </footer>
    )
}

export default Footer;