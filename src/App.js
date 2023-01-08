// import React, {
//   useState
// } from "react";
// import QrReader from "react-web-qr-reader";

// const Example = () => {
//   const delay = 500;

//   const previewStyle = {
//     height: 240,
//     width: 320
//   };

//   const [result, setResult] = useState("Scan any QR");

//   const handleScan = (result) => {
//     if (result) {
//       setResult(result.data);
//     }
//   };

//   const handleError = (error) => {
//     console.log(error);
//   };

//   return (
//     <>
//       <QrReader
//         delay={delay}
//         style={previewStyle}
//         onError={handleError}
//         onScan={handleScan}
//       /><br/><br/><br/><br/>
//       <a href={result}>{result}</a>
//     </>
//   );
// };

// export default Example;
import './App.css'
import Hacknitr from './components/hacknitr'
const App=()=>{
  return(
      <Hacknitr/>
    );
}

export default App;