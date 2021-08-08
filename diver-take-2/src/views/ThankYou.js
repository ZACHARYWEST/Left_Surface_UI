import './ThankYou.css';

function ThankYou (){

    return(
            <div className="thankyoudiv">
                <div>
                    <h1 className="thankyoubanner">Thank You!</h1>
                </div>
                <div className="w3-half w3-container w3-xlarge w3-text-grey">
                    <p className="">You have been successfully registered. A confirmation E-Mail has been sent to you.</p>
                    <p>You can now sign in with your E-Mail and password.</p>
                </div>
            </div>
    )
}

export default ThankYou;