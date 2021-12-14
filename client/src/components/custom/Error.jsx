import React from 'react';
import styled from 'styled-components';

const NotifyError = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    background-color: red;
    color: white;
    padding: 10px;
    margin: 10px;
`;

const ErrorLine = styled.h5`
    font-size: 16px;
    font-weight: 300;
`;

const Error = ({ props }) => {
    let messages = props.messages;
    return (
        <NotifyError>
            {messages.length > 1
                ? (messages.split('\n').map(item => <ErrorLine key={item}>{item}</ErrorLine>))
                : (<ErrorLine>{messages}</ErrorLine>)
            }
        </NotifyError>
    )
}

export default Error;