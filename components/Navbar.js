import React from 'react'
// import styles from '../styles/navbar.scss'
import styles from '../styles/navbar.module.scss';
import {saveAs} from 'file-saver';
// import resume from '../images/DhruvLatestResume.pdf'
function Navbar() {
    const saveFile = () => {
        saveAs(
          "https://drive.google.com/file/d/1m4plsqXGUAODaiPWeN0e95y1vRBy5mLq/view?usp=drive_link",
          "myResume"
        );
      };
  return (
    <div className={styles.container}>
        <div style={{width:'90%',display:'flex',width:'90%',justifyContent:'space-between'}}>
        <div className={styles.nav}>
                Dhruv Gupta 
        </div>
        <div className={styles.navbarsub}>
            <p style={{fontSize:'20px'}}>
                About
            </p>
            <p style={{fontSize:'20px'}}>
                Contact
            </p>
            
                <p onClick={saveFile} style={{fontSize:'20px',color:'white',textDecoration:'none'}}>
                    Download
                    </p>

        </div>
        </div>
    </div>
  )
}

export default Navbar