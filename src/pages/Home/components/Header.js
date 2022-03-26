import React from 'react';

function Header(){
    return(
        <div >
            
            <header className="header" >
                <div className="toolbar" >
                <div className=''>
                    <span> Conecta Dev </span>
                </div>
                <div >
                    <button>
                        Novo post 
                    </button>
                    <span>img1</span>
                    <span> img2</span>
                </div>
                </div>
            </header>
        </div>
    );
}

export default Header;