import React from 'react';
import '../styles/preloader.css';

const Preloader = () => {
    return(
        <div>
          <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Preloader;