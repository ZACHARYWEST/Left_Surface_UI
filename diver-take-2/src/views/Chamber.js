
import TT1A from '../assets/images/treatmentTables/treatmentTable1AforAir.png';
import TT2A from '../assets/images/treatmentTables/treatmentTable2AforAir.png';
import TT3 from '../assets/images/treatmentTables/treatmentTable3forAir.png';
import TT4 from '../assets/images/treatmentTables/treatmentTable4.png';
import TT5 from '../assets/images/treatmentTables/treatmentTable5.png';
import TT6 from '../assets/images/treatmentTables/treatmentTable6.png';
import TT6A from '../assets/images/treatmentTables/treatmentTable6A.png';
import TT7 from '../assets/images/treatmentTables/treatmentTable7.png';
import TT860 from '../assets/images/treatmentTables/treatmentTable8for60fsw.png';
import TT8165 from '../assets/images/treatmentTables/treatmentTable8for165fsw.png';
import TT8225 from '../assets/images/treatmentTables/treatmentTable8for225fsw.png';

function Chamber(){

    return(
        <div className="container">
            <div>
                <h2 className="chamberDanger">IMPORTANT!</h2>
                <p className="chamberDanger">A Decompression Chamber must only be operated by a compotent and trained professional.</p>
                <p className="chamberDanger">Failure to comply could result in injury of death.</p>
            </div>
            <br/>
            <div>
                <h4>Treatment Table 5</h4>
                <img src={TT5} alt="Treatment table 5" className="chamberTables" />
                <br/>
                <h4>Treatment Table 6</h4>
                <img src={TT6} alt="Treatment Table 6" className="chamberTables" />
                <br/>
                <h4>Treatment Table 6A</h4>
                <img src={TT6A} alt="Treatment Table 6A" className="chamberTables" />
                <br/>
                <h4>Treatment Table 4</h4>
                <img src={TT4} alt="Treatment Table 4" className="chamberTables" />
                <br/>
                <h4>Treatment Table 7</h4>
                <img src={TT7} alt="Treatment Table 7" className="chamberTables" />
                <br/>
                <h4>Treatment Table 8 for 60 fsw</h4>
                <img src={TT860} alt="Treatment Table 8 for 60fsw" className="chamberTables" />
                <br/>
                <h4>Treatment Table 8 for 165 fsw</h4>
                <img src={TT8165} alt="Treatment Table 8 for 165 fsw" className="chamberTables" />
                <br/>
                <h4>Treatment Table 8 for 225 fsw</h4>
                <img src={TT8225} alt="Treatment Table 8 for 225 fsw" className="chamberTables" />
                <br/>
                <h4>Treatment Table 1A (Air)</h4>
                <img src={TT1A} alt="Treatment Table 1A air" className="chamberTables" />
                <br/>
                <h4>Treatment Table 2A (Air)</h4>
                <img src={TT2A} alt="Treatment Table 2A air" className="chamberTables" />
                <br/>
                <h4>Treatment Table 3 (Air)</h4>
                <img src={TT3} alt="Treatment Table 3 air" className="chamberTables" />
            </div>
        </div>
    )
}

export default Chamber;