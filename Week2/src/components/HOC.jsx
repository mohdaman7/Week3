import React, { useState } from "react"; 

function UpdatedComponent(OrignalComponent) {
  function NewComponent() {
    const [money, SetMoney] = useState(10);
    const handleIncrese = () => {
      SetMoney(money * 2);
    };
    return <OrignalComponent handleIncrese={handleIncrese} money={money}/>;
  }
  return NewComponent
}

export default UpdatedComponent;
