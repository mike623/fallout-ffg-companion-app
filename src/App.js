import React from "react";
import { Provider } from "./AppContext";
import Test from "./Components/Test/Test";
import "./App.css";

function App() {
    return (
        <Provider>
            <Test />
        </Provider>
    );
}

export default App;
