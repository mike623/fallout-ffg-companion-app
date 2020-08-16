import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../../AppContext";

const Test = () => {
  const { initialShuffle } = useContext(Context);

  return <Button onClick={initialShuffle}>TEST</Button>;
};

export default Test;
