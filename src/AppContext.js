import React, { useState } from "react";
import baseJSON from "./Components/JSON/base.json";
import baseSettlementJSON from "./Components/JSON/base-settlement.json";
import baseWastelandJSON from "./Components/JSON/base-wasteland.json";

const Context = React.createContext({});

const Provider = ({ children }) => {
    const [baseDeck, setBaseDeck] = useState([...baseJSON]);
    const [settlementDeck, setSettlementDeck] = useState([...baseSettlementJSON]);
    const [wastelandDeck, setWastelandDeck] = useState([...baseWastelandJSON]);
    const [modalShow, setModalShow] = useState(false);

    const shuffle = array => {
        let i = 0;
        let j = 0;
        let temp = null;
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    const initialShuffle = () => {
        setBaseDeck(baseDeck);
        setSettlementDeck(shuffle(settlementDeck));
        setWastelandDeck(shuffle(wastelandDeck));
    }

    const handleClose = () => setModalShow(false);

    const handleShow = () => setModalShow(true);

    return (
        <Context.Provider
            value={{
                baseDeck,
                settlementDeck,
                wastelandDeck,
                modalShow,
                handleClose,
                handleShow,
                initialShuffle
            }}
        >
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };
