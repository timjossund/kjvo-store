import React from "react";
import { categories } from "../mock-data";

export const HomePage = () => {
 return (
  <div 
  className="categories-container"
  style={{
    width: "80%",
    padding: "50px 0px 50px 0px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    gap: "10px"
  }}
>
 {categories.map((category) => (

   <div 
    className="category-container"
    style={{
      backgroundColor: "black",
      width: "48%",
      height: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    }}
   >
   <div 
    className="category-info"
    style={{
      width: "49%",
      textAlign: "center",
      color: "white"
    }}
   >
    <h2>{category.title}</h2>
    <p>{category.description}</p>
    <p>by {category.vendor}</p>
   </div>
 </div>

 ))}
 </div>

)};