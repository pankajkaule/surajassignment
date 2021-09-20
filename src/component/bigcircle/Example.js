import React from "react";
import { render } from "react-dom";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import RadialSeparators from "./RadialSeparators";

const App = () => (
  <div style={{ padding: "40px" }}>
    <div>
      <Example>
        <CircularProgressbarWithChildren
          value={100}
          styles={buildStyles({
            pathColor: "red",
            trailColor: "#eee",
            strokeLinecap: "butt",
          })}
        >
          <RadialSeparators
            count={8}
            style={{
              background: "white",
              width: "10px",
              height: `${50}%`,
            }}
          />
        </CircularProgressbarWithChildren>
      </Example>
    </div>
    <div>
      <Example>
        <CircularProgressbarWithChildren
          value={48.7}
          styles={buildStyles({
            trailColor: "transparent",
            strokeLinecap: "butt",
            pathColor: "darkred",
            rotation: 0.257,
          })}
        >
          this is the content space
        </CircularProgressbarWithChildren>
      </Example>
    </div>
  </div>
);

export default function Example(props) {
  return (
    <div style={{ position: "absolute" }}>
      <div style={{ width: "100%", paddingRight: 30 }}>{props.children}</div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
