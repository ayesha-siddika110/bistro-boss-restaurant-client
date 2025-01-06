
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../componants/Navbar/Navbar';
import Footer from '../../componants/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayouts = () => {
    const location = useLocation()

    // const [hideNav,setHIdeNav] = useState(false)
    const hideNav = location.pathname === '/login' || location.pathname === '/register'
    
    return (
        <div>
            <ToastContainer autoClose={3000} />
            {hideNav || <Navbar></Navbar>}
            <Outlet></Outlet>
            {hideNav || <Footer></Footer>}
            
        </div>
    );
};

export default MainLayouts;