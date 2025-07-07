import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Counter() {
  let [result, changeResult] = useState(0);

  return (
    <div>
      <Card style={{ width: "18rem", alignItems:'center', justifyContent:'center'}}>
        <Card.Body>
          <Card.Title>{result}</Card.Title>
          <Button onClick={()=>changeResult(result+1)} variant="primary">+</Button>
          <Button onClick={()=>changeResult(0)} variant="warning">reset</Button>
          <Button onClick={()=>changeResult(result-1)} variant="danger">-</Button> 
        </Card.Body>
      </Card>
    </div>
  );
}

export default Counter;
