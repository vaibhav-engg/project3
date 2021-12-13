import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";


export default function HOME({}) {
  const [Dogimage, setDogimage] = useState(' ');
  const getImage = async () => {
    const resposnse = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await resposnse.json();
    setDogimage(data.message);
    //console.log(data);
  };
  return (
    <div>
    <Navbar/>
      <h1>Dog's Images</h1>
      <div>
        <button onClick={getImage}>Next Image</button>
      </div>
      <div>
        <img src={Dogimage} alt="" />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios("https://dog.ceo/api/breeds/image/random");
  const { data } = res;
  // console.log(res.data);
  return {
    props: {
      data,
    },
  };
}
