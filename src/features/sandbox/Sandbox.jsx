import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Button} from "semantic-ui-react";
import {decrement,increment} from "./testReducer";

const Sandbox = () => {
    const data = useSelector(state => state.data );
    const dispatch = useDispatch()
    console.log(data)
    return (
        <>
            <h1>Testing 123</h1>
            <h3>The Date is: {data}</h3>
            <Button onClick={() => dispatch(increment(23))} content={'increment'}/>
            <Button onClick={() => dispatch(decrement(31))} content={'decrement'}/>
        </>
    );
};

export default Sandbox;
