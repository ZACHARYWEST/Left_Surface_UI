
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';

import Header from './../../components/Header';
import Landing from './../Landing';
import Footer from './../../components/Footer';


library.add(fab, faCheckSquare, faCoffee)

const Layout = (props) =>{

    return(
        <div>
            <Header />
                <Route path="/" component={Dashboard} />
            <Footer />
        </div>
    )
}

export default Layout;