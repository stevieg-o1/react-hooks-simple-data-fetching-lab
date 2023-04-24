import React, { useEffect, useState } from "react";
export default function App() {
  const [dogImg, setDogImg] = useState();
  const fetchData = async () => {
   try {
     const res = await fetch("https://dog.ceo/api/breeds/image/random");
     const data = await res.json();
     setDogImg(data.message);
   } catch (error) {
     console.error("Error fetching data:", error);
   }
 }
  useEffect(() => {
   fetchData();
  }, []);
  return (
    <>
      {dogImg ? (<img src={dogImg} alt="Random dog" />) : (<p>Loading...</p>)}
    </>
  );
}









