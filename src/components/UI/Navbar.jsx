import React, { useState } from 'react';

export default function Nav({ links }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
       {/* <button onClick={()=>setDropdown(!dropdown)} className="navbar-toggler me-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="d-flex justify-content-start px-3" id="">
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
            {links.map((link) => link)}
            {/* {dropdown ? links.map((link) => link) : '' } */}
          {/* </ul> */}
      </div>
    </nav>
  );
}


