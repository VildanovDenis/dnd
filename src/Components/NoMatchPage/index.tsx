import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 10px;
`;

export const NoMatchPage = () => {
    const [count, changeCount] = useState(0);

    return (
        <Wrapper>
            <h1>
                Вы постучались не по тому URL'у.
            </h1>
            <div>
                <button
                    type='button'
                    onClick={() => changeCount(count - 1)}
                    >
                        -
                </button>
                <span>
                    Счетчик: {count}
                </span>
                <button
                    type='button'
                    onClick={() => changeCount(count + 1)}
                    >
                        +
                </button>
            </div>
        </Wrapper>
    )
}