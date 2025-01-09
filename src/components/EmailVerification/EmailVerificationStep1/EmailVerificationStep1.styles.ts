import styled from '@emotion/native'

const AppContainer = styled.View`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column-reverse;
`;

const Layout = styled.View`
    width: 100%;
    height: 65%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const S = {
    AppContainer,
    Layout
}

export default S;