import React from "react";
import MuiAlert from '@material-ui/lab/Alert';
import { Button } from '@material-ui/core';

function Error(props) {
    const { error, clearError } = props

    return (
        <>
        {error !== "" ? 
            <MuiAlert severity="error">{error}<Button onClick={() => clearError()}>X</Button></MuiAlert>
        : <></>}
        </>
    );

}

export default Error;