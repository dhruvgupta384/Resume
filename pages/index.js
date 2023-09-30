import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Navbar from '../components/Navbar';
import Image from 'next/image'
import coder from '../images/coder.jpg'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar/>

      <div style={{display:'flex',width:'60%',alignItems:'center',justifyContent:'space-around',height:'100vh'}}>
        <div>
        <p style={{fontSize:'50px',color:'#c32865'}}>
          Howdy!
        </p>
        <p style={{fontSize:'50px'}}>
          My name is Dhruv Gupta
        </p>
        </div>
        <div>
        <Image style={{borderRadius:'10px'}} src={coder} alt='Coder' width={500} height={500}>
        </Image>
        </div>
        
      </div>
    </div>
  );
}
