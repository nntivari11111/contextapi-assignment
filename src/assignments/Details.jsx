import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

const Details = () => {
  const {auth,token} = useContext(AuthContext);
  return auth ? (
    <div
      style={{
        textAlign: "center",
        
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>User Logged in with token-</h1>{" "}
      <h1 style={{ marginLeft: "15px" }}>{token}</h1>
    </div>
  ) : (
    <h1
      style={{
        textAlign: "center",
       
      }}
    >
      User not logged in
    </h1>
  );
};

export default Details;
