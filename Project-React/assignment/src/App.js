import React, { useEffect } from 'react';
import { useState } from 'react';
import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';

import './App.css';

function App() {
  const [docType, setDocType] = useState('');
  const [docData, setDocData] = useState([]);

  useEffect(() => {
    let link = 'http://localhost:4000/data/'
    if(docType!=''){
      link+=docType;
    }
    fetch(link, {
      method: "GET"
    })
    .then(response => {
      return response.json()
    })
    .then(res => {
      setDocData(res.data);
    })
    .catch(err => console.log(err))
  }, [docType])

  const docTypeHandler = (type) => {
    if(type=='' || type=='All'){
      setDocType('');
    }
    else{
      setDocType(type)
    }
  }

  

  return (
    <div className="App">
      <Section1 changeHandler={docTypeHandler}></Section1>
      <Section2 docData={docData}></Section2>
    </div>
  );
}

export default App;
