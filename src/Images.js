import React, { useState } from "react";
import Delete from "@mui/icons-material/Delete";
import Camera from "@mui/icons-material/Camera";
import Data from "./Data"

const Images = () => {

    var Me = [""]

  const [Input, setInput] = useState([]);
//   const [Input2, setInput2] = useState([])
  const handleIput = (e) => {
    console.log(e.target.files);
    console.log("iNPUT IS :", Input)
    setInput([ ...Input, URL.createObjectURL(e.target.files[0])])
    console.log("ar", URL.createObjectURL(e.target.files[0]));
    console.log("array is", Input);
   Me.push(...Input)
    console.log( "data is ", Me);
  }
//   const handleIput2 = (e) => {
//     console.log(e.target.files);
//     console.log("iNPUT IS :", Input)
//     setInput2(URL.createObjectURL(e.target.files[0]))
//   }

  return (
    <>


      <h1 className="heading">THIS IS MY GALLARY</h1>

      <Delete onClick={() => console.log("clicked")} />
      <Camera />

      <input type="file" name="" onChange={handleIput}  />
      {/* <input type="file" name="" onChange={handleIput2}  /> */}



      <div className="img_div">
      {/* {
        Me.map((i) => (
            <img src={i} alt="" width={585} height={500} />
        ))
      } */}

      {
        Me.map((h) => (
            <img src={h} alt="" width={585} height={500} />
        ))
      }
        
       {/* {
        Input ? <img src={Input} alt=""  width={585} height={500}/> : <h1>No Image Selected</h1>
       }
       {
        Input ? <img src={Input2} alt=""  width={585} height={500}/> : <h1>No Image Selected</h1>
       } */}
        <img src="https://picsum.photos/590/500" alt="" />
        <img src="https://picsum.photos/595/500" alt="" />
        <img src="https://picsum.photos/599/500" alt="" />
        <img src="https://picsum.photos/591/500" alt="" />
        <img src="https://picsum.photos/592/500" alt="" />
        <img src="https://picsum.photos/593/500" alt="" />
        <img src="https://picsum.photos/594/500" alt="" />
        <img src="https://picsum.photos/596/500" alt="" />
        <img src="https://picsum.photos/598/500" alt="" />
        <img src="https://picsum.photos/597/500" alt="" />
        <img src="https://picsum.photos/599/500" alt="" />
      </div>
    </>
  );
};

export default Images;
