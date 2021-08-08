import Altitude from '../assets/images/Altitude.png';
import NoDecoTable from '../assets/images/NoDecoTable.png';
import RNT from '../assets/images/RNT.png';

function DiveTables(){

    return(
        
            <div className="w3-content">  
                    <div className="w3-half w3-container">
                        <h1 className="w3-xxlarge w3-text-light-grey">US Navy Dive Tables, rev.7</h1>
                    </div>
                    <div className="w3-half w3-container w3-xlarge w3-text-grey">
                        <p className="">These dive tables are set forth by the US Navy and are subject to change.</p>
                    </div>

                <div className="w3-panel w3-text-grey">
                    <h4>Altitude</h4>
                </div>
                <div className="w3-row">
                    <div className="w3-half w3-container">
                        <img src={Altitude}  style={{ width: '100%' }}/>
                    </div>
                </div>

                <div className="w3-panel w3-text-grey">
                    <h4>No Decompression</h4>
                </div>
                <div className="w3-row">
                    <div className="w3-half w3-container">
                        <img src={NoDecoTable} style={{ width: '100%' }}/>
                    </div>
                </div>

                <div className="w3-panel w3-text-grey">
                    <h4>Reserved Nitrogen Time</h4>
                </div>
                <div className="w3-row">
                    <div className="w3-half w3-container">
                        <img src={RNT} style={{ width: '100%' }} />
                    </div>
                </div>

            </div>
        
    )
}

export default DiveTables;