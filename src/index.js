import React, {useRef} from "react";
import ReactDOM from "react-dom";
import { useReactToPrint } from "react-to-print";

export class ComponentToPrint extends React.PureComponent {
  render() {
    return (
      <div>My cool content here!</div>
    );
  }
}
export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>My cool content here!</div>
  );
});
ReactDOM.render(<Example />, document.querySelector("#root"));
