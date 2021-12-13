import React, { useState } from "react";
//import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "../components/navbar";




const browse = ({ data }) => {
    const [breedImages, setBreedImages] = useState([]);

    const breedList = Object.keys(data.message);

    const getDogImages = async (breedName) => {
        const res = await axios(`https://dog.ceo/api/breed/${breedName}/images`);
        const { data } = res;

        setBreedImages(data.message);
    };

    const changeBreed = async (e) => {
        const breedName = e.target.value;
        getDogImages(breedName);
    };

    return (
        <div>
            <Navbar/>
            <div>
                <select onChange={changeBreed}>
                    {breedList.map((breed) => (
                        <option key={breed}>{breed}</option>
                    ))}
                </select>
            </div>
            <div>
                <div>
                    {breedImages.length > 0 ? (
                        breedImages.map((breedImage) => {
                            return (
                                <div>
                                    <img src={breedImage}></img>
                                </div>
                            );
                        })
                    ) : (
                        <h2>Select a Breed</h2>
                    )}
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
  const res = await axios("https://dog.ceo/api/breeds/list/all");
  const { data } = res;
  return {
    props: {
      data,
    },
  };
}

export default browse;
