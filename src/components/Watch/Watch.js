import React, { useState } from "react";
import { Regular } from "./Regular";
import { Premium } from "./Premium";

import "../../styles/Watch/Watch.css";

export const Watch = () => {
  const [component, setComponent] = useState({
    regular: true,
    premium: false,
  });

  const { regular, premium } = component;

  const showRegular = () => {
    setComponent({ regular: true, premium: false });
  };

  const showPremium = () => {
    setComponent({ regular: false, premium: true });
  };

  return (
    <div className="Watch">
      <div className="Watch-Top">
        <h1>Watches</h1>
        <button onClick={() => showRegular()}>Regular</button>
        <button onClick={() => showPremium()}>Premium</button>
      </div>
      <div className="Watch-Bottom">
        {regular && <Regular />}
        {premium && <Premium />}
      </div>
    </div>
  );
};
