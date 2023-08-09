import "./styles.css";
import {useEffect, useState} from "react";
// const tre={"hello":1 , "two":2};
const category="inspirational";
export default function App() {
  const [p,setP]=useState();
  const [change,setChange]=useState(0);
  let ri;
  useEffect(()=>{
    fetch(`https://api.api-ninjas.com/v1/quotes`, {
      method: 'GET',
      headers: {
        'X-Api-Key': "aud+/ADm0hP02/m7VGefpA==qRebVkAecQuW02sV",
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
      return res.json();
    }).then((r)=>{
      ri=(r[0].quote);
      console.log(ri);
      setP(ri);
    })
  },[change])
const fun=()=>{
setChange((change===0)?1:0);
}
  
  return (
    <div className="App">
{p}
<br/>
<button onClick={fun}>change</button>
    </div>
  );
}
