import React, { useState } from "react";
import baseJSON from "./Components/JSON/base.json";
import baseSettlementJSON from "./Components/JSON/base-settlement.json";
import baseWastelandJSON from "./Components/JSON/base-wasteland.json";

const Context = React.createContext({});

const Provider = ({ children }) => {
    const [baseDeck, setBaseDeck] = useState([...baseJSON]);
    const [settlementDeck, setSettlementDeck] = useState([...baseSettlementJSON]);
    const [wastelandDeck, setWastelandDeck] = useState([...baseWastelandJSON]);
    let [vault084Deck, setVault084Deck] = useState([]);
    let [vault109Deck, setVault109Deck] = useState([]);
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

    const setVaultDeck = vault => {
        if (vault === "84") {
            for (let i=0;i<baseJSON.length;i++) {
                if (baseJSON[i].location === "Vault"+vault) {
                    vault084Deck = vault084Deck.concat(baseJSON[i]);
                }
            }
        } else if (vault === "109") {
            for (let i=0;i<baseJSON.length;i++) {
                if (baseJSON[i].location === "Vault"+vault) {
                    vault109Deck = vault109Deck.concat(baseJSON[i]);
                }
            }
        }
    }

    const initialShuffle = () => {
        setBaseDeck(baseDeck);
        setVault084Deck(setVaultDeck("84"));
        setVault109Deck(setVaultDeck("109"));
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
                vault084Deck,
                vault109Deck,
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
