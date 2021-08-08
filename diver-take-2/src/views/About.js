
import pic1 from '../assets/images/pic1.jpg';
import pic2 from '../assets/images/pic2.jpg';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function About (){

    return(
        <div className="w3-content" style={{ 'max-width': '1200px' }}>
            <div className="w3-panel">
                <i className="w3-xlarge fa fa-bars"></i>
            </div>
            {/* First Grid: Logo & About   */}
            <div className="w3-row">
                <div className="w3-half w3-container">
                    <h1 className="w3-xxlarge w3-text-light-grey">Left Surface</h1>
                </div>
                <div className="w3-half w3-container w3-xlarge w3-text-grey">
                    <p>"Left Surface" is a Commercial Diver resource website that 
                        gives easy access to information a Diver would want, whether 
                        out on a job or sitting in an office. Information such as USN 
                        Dive tables are available to all, while members can save and view 
                        dive logs for themselves. To join, click <Link to="/dashboard/sign-up">here.</Link></p>
                </div>
            </div>
            <br/>
            <Row>
                <Col>
                    <div className="w3-half w3-container">
                        <img src={pic2} style={{ width: '30%' }} alt="pic1" />
                        <img src={pic1} style={{ width: '40%' }} alt="pic2" />
                    </div>
                </Col>
            </Row>
            <br/>
            <Row>
                <p className="w3-xlarge w3-text-grey">
                Capstone project by Zachary West. To learn more, view his <a href="https://github.com/ZACHARYWEST">GitHub</a> and <a href="https://www.linkedin.com/in/zacharydwest/">LinkedIn</a> pages.
                </p>
            </Row>
        </div>
    )
}

export default About;