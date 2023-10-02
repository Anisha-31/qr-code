import React ,{ Component , useState,useEffect}from "react";
import QrReader from 'react-qr-scanner';
import {Html5QrcodeScanner} from 'html5-qrcode'
import 
function App() {
const [scan, setScan] = useState(null)
useEffect(()=>{
  const scanner =new Html5QrcodeScanner('reader',{
    qrbox:{
      width:250,
      height:250,
    },
    fps:5,
  })
  scanner.render(success,error);
    function display(){
  
  
    }
    function success(result){
      scanner.clear();
      setScan(result);
  
    }
  
    function error(err){
      console.log(err)
  
    }

},[]);

  return (
    <div className="App">
      <header className="App-header">
       <div> QR code </div>
      </header>
      {
        scan?<div> success:<a  href={"tel:"+scan}>{scan}</a></div> :<div id='reader'></div>
      }
 


      
    </div>
  );
}

export default App;