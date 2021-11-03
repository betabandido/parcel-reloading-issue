import * as React from "react";
import * as ReactDOM from "react-dom";

import { GreetingMessage } from "../..";

const App = () => {
    return (
        <GreetingMessage />
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
