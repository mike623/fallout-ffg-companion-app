import React, { useState } from "react";
import baseJSON from "./Components/JSON/base.json";
import baseSettlementJSON from "./Components/JSON/base-settlement.json";
import baseWastelandJSON from "./Components/JSON/base-wasteland.json";

const Context = React.createContext({});

const Provider = ({ children }) => {
    let [numPlayers, setNumPlayers] = useState(2);
    const [baseDeck, setBaseDeck] = useState([...baseJSON]);
    const [settlementDeck, setSettlementDeck] = useState([...baseSettlementJSON]);
    const [wastelandDeck, setWastelandDeck] = useState([...baseWastelandJSON]);
    let [vault084Deck, setVault084Deck] = useState([]);
    let [vault109Deck, setVault109Deck] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);

    const handleInputChange = event => setNumPlayers(event.target.value);

    const handleShow = () => setModalShow(true);

    const initialShuffle = () => {
        setBaseDeck(baseDeck);
        setVault084Deck(setVaultDeck("84"));
        setVault109Deck(setVaultDeck("109"));
        setSettlementDeck(shuffle(settlementDeck));
        setWastelandDeck(shuffle(wastelandDeck));
    }

    const setVaultDeck = vault => {
        if (vault === "84") {
            for (let i=0; i < baseJSON.length; i++) {
                if ((baseJSON[i].id >= 72) && (baseJSON[i].id <= 79)) {
                    vault084Deck = vault084Deck.concat(baseJSON[i]);
                }
            }
            shuffle(vault084Deck);
            const newLength = vault084Deck.length - numPlayers;
            for (let i=0; i < newLength; i++) {
                vault084Deck.pop();
            }
        }
        console.log(vault084Deck);
    }

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

    return (
        <Context.Provider
            value={{
                numPlayers,
                setNumPlayers,
                baseDeck,
                settlementDeck,
                vault084Deck,
                vault109Deck,
                wastelandDeck,
                modalShow,
                handleClose,
                handleInputChange,
                handleShow,
                initialShuffle
            }}
        >
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };
