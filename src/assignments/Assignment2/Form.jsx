import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Form = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        display: "flex",
        padding: "40px",
        flexDirection: "column",
        alignItems: "center",
        ...themeMode,
      }}
    >
       <p className="dummyText"> 
        accusantium? Tenetur corporis iusto, praesentium vero autem, reiciendis
        quod beatae ipsa aliquam facere perferendis! Beatae pariatur est
        excepturi vitae officia saepe id voluptate, a dolor eos nobis tempore
        soluta placeat deserunt? Nisi animi doloribus fugit minus officiis
        ratione ducimus reiciendis impedit aliquid nobis delectus, quaerat
        expedita esse voluptatem, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et tempore
        iure nesciunt repellat dignissimos quasi aliquid? Odit dolores, aliasam.
      </p>
      <h1>Form</h1>
      <form style={{ border: `2px solid ${themeMode.color}` }} className="form">
        <div>
          <label>Name:</label>
          <input
            style={{
              borderBottom: themeMode.borderBottom,
              color: themeMode.color,
            }}
            type="text"
            placeholder="Enter Username"
          />
        </div>
        <br />

        <div>
          <label>Email:</label>
          <input
            style={{
              borderBottom: themeMode.borderBottom,
              color: themeMode.color,
            }}
            type="email"
            placeholder="Enter email"
          />
        </div>

        <br />
        <div>
          <label>Password:</label>
          <input
            style={{
              borderBottom: themeMode.borderBottom,
              color: themeMode.color,
            }}
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <br />

        <input type="submit" value="Submit" />

        <br />
      </form>
      <br />
      <p className="dummyText"> 
        accusantium? Tenetur corporis iusto, praesentium vero autem, reiciendis
        quod beatae ipsa aliquam facere perferendis! Beatae pariatur est
        excepturi vitae officia saepe id voluptate, a dolor eos nobis tempore
        soluta placeat deserunt? Nisi animi doloribus fugit minus officiis
        ratione ducimus reiciendis impedit aliquid nobis delectus, quaerat
       
      </p>
    </div>
  );
};

export default Form;
