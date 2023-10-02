import React ,{ Component , useState,useEffect}from "react";
import QrReader from 'react-qr-scanner';
import {Html5QrcodeScanner} from 'html5-qrcode'

function Dashboard() {
const [scan, setScan] = useState(null)

useEffect(()=>{
  const scanner =new Html5QrcodeScanner('reader',{
    qrbox:{
      width:150,
      height:150,
    },
    fps:5,
  })
  scanner.render(success,error);
    
    function success(result){
      scanner.clear();
      setScan(result);
      console.log(result);
      // scanned = result;
  
    }
  
    function error(err){
      console.log(err)
  
    }

},[]);

  return (
    <div className="qr-code">
      <header className="App-header">
       <div className="title"> QR code </div>
      </header>
      {
        scan?<div> success:<a  href={scan}>{scan}</a></div> :<div id='reader'></div>
      }
 
      {/* <div>{ scanned ?<div> make changes</div> : <div>nothing </div>}</div> */}

      
    </div>
  );
}


export default Dashboard;