const Navbar = () => {
  return (
    <>
      <div className='container-xxl'>
        <div className='py-4 md:flex md:flex-row items-center md:justify-between flex flex-col justify-center text-white md:space-y-0 space-y-5'>
          <div className="logo">
            <h1 className='text-4xl font-bold cursor-pointer md:text-start text-center'>Sia.</h1>
          </div>
          <nav>
            <ul className='flex items-center md:space-x-14 space-x-4 md:text-md text-sm font-medium cursor-pointer md:text-start text-center'>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
