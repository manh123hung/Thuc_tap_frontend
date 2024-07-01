// App.tsx
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './index3.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import { DocumentData, collection, getDocs } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { firestore } from '../firebase';
import Hinh from '../picture/Rectangle1524.png';
import Hinh2 from '../picture/Group17.png';
import Hinh3 from '../picture/png-transparent-facebook-icon-social-media-computer-icons-facebook-facebook-rectangle-logo-website.jpg';
import Hinh4 from '../picture/png-transparent-youtube-play-button-computer-icons-youtube-television-angle-rectangle.png'
import Hinh5 from '../picture/instagram-logos-png-images-free-download-11641669602cekuhoqisp.png'
import Hinh6 from '../picture/Map-26-6_ver1 1.png';
import { Dropdown, DropdownItem } from "flowbite-react";

function Khampha() {
  const navigate = useNavigate();
  const [data, setData] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const quanlyRef = await getDocs(collection(firestore, "users"));
        const fetchedData: DocumentData[] = [];

        quanlyRef.forEach((doc) => {
          fetchedData.push(doc.data());
        });

        setData(fetchedData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {data.length > 0 && (
          <div>
            <h2>Fetched Data:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </header>
    </div>
    */
    <div className="bs">
    
    <div className="container-fluid">
    <div className="row">
    <div className="col-md-3 left-side" style={{ width: '250px' }}>   
    <div className="left-side-content">
          <div className="menu-icon">≡</div>
          <Link to="/" className="menu-item" >TRANG CHỦ</Link>
          <Link to="/khampha" className="menu-item" style={{ textDecoration: 'underline', color: 'black' }}>KHÁM PHÁ</Link>
          <div className="relative-container">
          <Dropdown  color='#259E58' className="btn btn-success  absolute-dropdown  " label="GIỚI THIỆU" placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'white'}}>
          <DropdownItem className="btn btn-white" ><Link to="/settings" >Lịch sử hình thành</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/settings" >Thành viên</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/settings" >Chính sách bảo mật</Link></DropdownItem>

          
          </Dropdown>
          </div>
          
          <Dropdown  color='#259E58' className="btn btn-success  absolute-dropdown  " label="GIÁ VÉ " placement="right" style={{ backgroundColor: '#259E58', border: '#4CAF50', fontWeight: 'bold', fontStyle: 'italic', lineHeight: '34.05px', fontFamily: 'Bangers', fontSize: '20px',color:'white' ,listStyleType:'none'}}>
          <DropdownItem className="btn btn-white" ><Link to="/settings" >Vé trong công viên</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/settings" >Vé tập thể</Link></DropdownItem>
          <DropdownItem className="btn btn-white" ><Link to="/settings" >Vé dịch vụ</Link></DropdownItem>
            <DropdownItem className="btn btn-white" ><Link to="/settings" >Vé tập thể dục</Link></DropdownItem>

          
          </Dropdown>
          <Link to="/su-kien" className="menu-item">SỰ KIỆN</Link>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <img src={Hinh2} alt="Đầm Sen Park" className="logo1" />
          <div className="bd">
            <div className="social-icons1">
              <a href="#"><img src={Hinh3} alt="fb" className="social-icon3" /></a>
              <a href="#"><img src={Hinh4} alt="youtube" className="social-icon3" /></a>
              <a href="#"><img src={Hinh5} alt="fb" className="social-icon3" /></a>
            </div>
          </div>
        </div>
  </div>
  <div className="col-md-10 right-side" style={{ 
  backgroundColor: "#E6FFD2",
  top: 0,
  right: 0,
  bottom: 0,
  width: '83%',
  
}}>
  <div className="col-md-10 right-side" style={{ 
  backgroundColor: "#E6FFD2",
  top: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  marginTop:-40
}}>
  <div className="map-container bs3" >
    <img src={Hinh6} alt="caijdo"  />
  </div>
</div>

</div>
</div>
</div>
</div>
  );
}

export default Khampha;
