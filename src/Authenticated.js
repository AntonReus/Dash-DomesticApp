import * as React from "react";
import { Routes, Route } from "react-router-dom";
import styled from '@emotion/styled'


const Container = styled.div`

`;

const MainContainer = styled.main`

`;

function Authenticated(){
  return(
    <Container>
    <MainContainer>
    <Routes>
      <>
        <Route path="home" element={<h1>Home</h1>} />
      </>
    </Routes>
    </MainContainer>
    </Container>
  );
}
export default Authenticated;
