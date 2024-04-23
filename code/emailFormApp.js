import React from "react";
import ReactDOM from "react-dom";
import EmailInput from "./EmailInput";

const App = () => {
  return (
    <form>
      <EmailInput />
      <input type="submit" value="Submit" />
    </form>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
