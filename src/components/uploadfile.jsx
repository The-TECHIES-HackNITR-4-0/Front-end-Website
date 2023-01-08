import React,{useState} from 'react'
import { create } from 'ipfs-http-client'

// connect to the default API address http://localhost:5001
const client = create()

function UploadFile() {
  const [file, setFile] = useState(null);
  const [ipfsHash, setIpfsHash] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload the file to IPFS
    const res = await client.add(file);
    const ipfsHash = res[0].hash;
    // console.log(ipfsHash)
    // Set the IPFS hash in the component's state
    setIpfsHash(ipfsHash);
  }

  return (
  	<div className = 'uploadCard'>
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} className="inputfile"/>
      <button type="submit" className="submitfile">Submit</button>
      {ipfsHash && <div>IPFS Hash: {ipfsHash}</div>}
    </form>
    </div>
  );
}

export default UploadFile;