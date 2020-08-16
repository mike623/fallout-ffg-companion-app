import React, { useContext } from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { Context } from "../../AppContext";

const NumberOfPlayers = () => {
    const { handleInputChange, initialShuffle } = useContext(Context);

    return (
        <InputGroup className="numPlayers">
            <h2>Select the number of players:</h2>
            <FormControl
                autoFocus
                as="select"
                aria-label="Number of Players"
                aria-describedby="Number of Players Input"
                onChange={ handleInputChange }
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        initialShuffle();
                    }
                }}
            >
                <option value="0">Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
            </FormControl>
            <InputGroup.Append display="inline-block;">
                <Button variant="outline-light" onClick={initialShuffle}>
                    Submit
                </Button>
            </InputGroup.Append>
        </InputGroup>
    );
};

export default NumberOfPlayers;
