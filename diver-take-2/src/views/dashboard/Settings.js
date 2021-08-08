    
import { Link } from 'react-router-dom';

    function Settings(){

        return(
            <div>
                <div>
                <h1>Settings</h1>
                </div>
                <main>
                    <div>
                        <br/>
                        <button type="button"><Link to="/edit-user">Edit Personal Information</Link></button>
                    </div>
                </main>
            </div>

        )
    }

    export default Settings;