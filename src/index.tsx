import * as React from "react";
import { render } from "react-dom";

const App = () => {
    const [count, setCount] = React.useState(0);

    const increment =  () => {
        setCount((n) => n +1);
    };
    return <button onClick={increment}>{count}</button>
}

render(<App />, document.getElementById('root'));