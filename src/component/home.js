import React from "react";
import { Card } from "./card";
import StopWatch from "./stopwatch";
import NavBr from "./navigation";

function HomeComponent() {
  return (
    <div>
      <NavBr />
      <Card background="bgGreen">
        <h1>Home Page</h1>
        <StopWatch />
      </Card>
      
    </div>
  );
}

export default HomeComponent;
