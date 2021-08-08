
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { withRouter} from 'react-router-dom';
import Layout from './views/dashboard/Layout';
import Landing from './views/Landing';
import ScrollToTop from './views/ScrollToTop';



library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div >
      <Layout />
      <ScrollToTop />
    </div>
  );
}

export default withRouter(App);
