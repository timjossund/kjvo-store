import React from "react";

export const MainSiteNav = () => {
 return (
  <div 
   className="main-navbar" 
   style={{
    borderStyle: "solid",
    borderWidth: "0px 0px 1px 0px",
    borderColor: "black", 
    width: "100%",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "auto",
    }}>
     <div 
      style={{
       width: "100%",
       maxWidth: "1200px",
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
      }}
     >
     <div 
      className="logo-wrapper"
      style={{
       width: "33%",
       color: "black",
       display: "flex",
       justifyContent: "flex-start",
      }} 
     >
      {/* <img src="" alt="" /> */}
      KJVO Store
     </div>
     <div 
      className="search-wrapper"
      style={{
       width: "33%",
       display: "flex",
       justifyContent: "center",
      }}  
     >
      <input 
       type="text" 
       placeholder="Search here..." 
       style={{
        width: "200px",
        height: "30px",
        borderRadius: "5px",
        color: "black"
       }}
      />
     </div>
     <div 
      className="menu-wrapper"
      style={{
       width: "33%",
       display: "flex",
       justifyContent: "flex-end",
      }} 
     >
      <div 
       style={{
        display: "flex",
        gap: "30px",
       }}
      >
       <div
       style={{
        textDecoration: "none",
       }}
       >Home</div>
       <div
       style={{
        textDecoration: "none",
       }}
       >Shop Now</div>
       <div
       style={{
        textDecoration: "none",
       }}
       >Sign In</div>
       <div
       style={{
        textDecoration: "none",
       }}
       >Checkout</div>
      </div>
     </div>
    </div>
   </div>
)}; 