import React from 'react';

const Footer = () => {
  return (
    <footer className='footer text-center'>
      <div className='btn-group' role='group'>
        <div to='/' className='btn'>
          <div>
            <i className='far fa-clone orange '></i>
          </div>
        </div>
        <div className='btn'>
          <div>
            <i className='far fa-bell orange '></i>
          </div>
        </div>
        <div className='btn'>
          <div>
            <i className='far fa-eye  orange '></i>
          </div>
        </div>
        <div className='btn'>
          <div>
            <i className='far fa-clock orange '></i>
          </div>
        </div>
      </div>

      <div>
        <p className="text-center" >
          <span>@2021</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
