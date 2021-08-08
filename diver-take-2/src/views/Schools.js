
import DITLogo from '../assets/images/Divers_Institute_Technology_Logo.jpg';
import CDALogo from '../assets/images/CDA_Logo.png';
import IDILogo from '../assets/images/IDI_Logo.png';
import DAILogo from '../assets/images/diversacademyinternational.jpeg'

function Schools(){

    return(
        <div>
            <h1>Top Dive Schools in the USA</h1>
            <div className="col">
                <div className="profile_card shadow-sm">
                    <a href="https://www.diversinstitute.edu/" className="align_card_img">
                        <img src={DITLogo} alt="DIT Logo" />
                    </a>
                    <div className="profile_card_body">
                        <p className="card-text">School: Divers Institute of Technology</p>
                        <p className="card-text">Address: 1341 N. Northlake Way, Suite 150 Seattle, WA 98103</p>
                        <p className="card-text">Phone: (206) 783-5542</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="profile_card shadow-sm">
                    <a href="https://www.commercialdivingacademy.com/" className="align_card_img">
                        <img src={CDALogo} alt="CDA Logo" />
                    </a>
                    <div className="profile_card_body">
                        <p className="card-text">School: CDA Technical Institute</p>
                        <p className="card-text">Address: 91 Trout River Dr, Jacksonville, FL 32208</p>
                        <p className="card-text">Phone: (888) 974-2232</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="profile_card shadow-sm">
                    <a href="https://www.idicharleston.edu/" className="align_card_img">
                        <img src={IDILogo} alt="IDI Logo" />
                    </a>
                    <div className="profile_card_body">
                        <p className="card-text">School: International Diving Institute</p>
                        <p className="card-text">Address: 2340 Avenue F, North Charleston, SC 29405</p>
                        <p className="card-text">Phone: (843) 740-1124</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="profile_card shadow-sm">
                    <a href="https://www.diversacademy.edu/" className="align_card_img">
                        <img src={DAILogo} alt="DAI Logo" style={{ width: '60%' }}/>
                    </a>
                    <div className="profile_card_body">
                        <p className="card-text">School: Divers Academy International</p>
                        <p className="card-text">Address: Lakeside Business Park 1500 Liberty Place Erial, NJ 08081</p>
                        <p className="card-text">Phone: 1-800-238-DIVE (3483)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schools;