import { Outlet } from 'react-router-dom';
import Heading from './Heading';

const Layout = () => {
  return (
    <div>
      <Heading />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
