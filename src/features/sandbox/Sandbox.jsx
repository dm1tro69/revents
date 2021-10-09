import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Button} from "semantic-ui-react";
import {decrement,increment} from "./testReducer";
import {openModal} from "../../app/common/modals/modalReducer";

const Sandbox = () => {
    const data = useSelector(state => state.test.data );
    const dispatch = useDispatch()
    console.log(data)
    return (
        <>
            <h1>Testing 123</h1>
            <h3>The Date is: {data}</h3>
            <Button onClick={() => dispatch(increment(23))} content={'increment'}/>
            <Button onClick={() => dispatch(decrement(31))} content={'decrement'}/>
            <Button
                onClick={() => dispatch(openModal({modalType: 'TestModal', modalProps: {data}}))}
                content={'Open Modal'}
                color={'teal'}/>
        </>
    );
};

export default Sandbox;
