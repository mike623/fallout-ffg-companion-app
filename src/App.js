import React from "react";
import { Provider } from "./AppContext";
import NumberOfPlayers from "./Components/StartUp/NumPlayers";
import "./App.css";

function App() {
    return (
        <Provider>
            <NumberOfPlayers />
        </Provider>
    );
}

export default App;
