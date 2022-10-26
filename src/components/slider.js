import React from "react";
import ReactDOM from "react-dom";
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 0;
const MAX = 100;

class Ranger extends React.Component {
  state = {
    values: [27.724]
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "2em"
        
        }}
        class=''
      >
        <Range
          values={this.state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => this.setState({ values })}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "50%"
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: this.state.values,
                    colors: ["White", "#ccc"],
                    min: MIN,
                    max: MAX
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div className=""
              {...props}
              style={{
                ...props.style,
                height: "42px",
                width: "42px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA"
              }}
            >
              <div className=""
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC"
                }}
              />
            </div>
          )}
        />
        <output class="container bg-slate-100 rounded-xl shadow border m-12 ml-8 font-bold w-90" id="output" className="text-center">
          <span>(Your Annual Salary: ${this.state.values[0] * 1000})</span>
<p> For your monthly bills, spend: ${Math.floor((this.state.values[0] * 0.7 / 12 * 1000))}</p>
<p>For your monthly savings, keep: ${Math.floor((this.state.values[0] * 0.2 / 12 * 1000))}
</p>
<p>
For your monthly spending, enjoy: ${Math.floor((this.state.values[0] * 0.1 / 12 * 1000))}
</p>
        </output>
      </div>
    );
  }
}

export default Ranger