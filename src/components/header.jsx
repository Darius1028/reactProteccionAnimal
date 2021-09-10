import {
  Link
} from "react-router-dom";

const Header = () => {
  return (
    <header className="header container ">
        <div className="row flex-nowrap justify-content-between align-items-center mt-4 mb-4">
          <div className="col-4 pt-1">
            <Link to="/" className="text-1" >Subscribe</Link>
          </div>
          <div className="col-4 text-center">
            <Link to="/" className=" text-1" >Protección Animal</Link> 
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <Link to="/" className="text-1" >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
            </Link> 
            <Link to="/" className="btn btn-sm btn-outline-secondary" >Sign up</Link> 
          </div>
        </div>
    </header>
  );
};

export default Header;
