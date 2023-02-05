import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='container-xxl'>
        <div className='py-4 md:flex md:flex-row items-center md:justify-between flex flex-col justify-center text-white md:space-y-0 space-y-5'>
          <div className="logo">
            <h1 className='text-4xl font-bold cursor-pointer md:text-start text-center'><Link to="/">Sia.</Link></h1>
          </div>
          <nav>
            <ul className='flex items-center md:space-x-14 space-x-4 md:text-xl text-sm font-medium cursor-pointer md:text-start text-center'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/service'>Services</Link></li>
              <li><Link to='/pricing'>Pricing</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
