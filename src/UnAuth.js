import * as React from "react";
import { Routes, Route } from "react-router-dom";
import styled from '@emotion/styled'
import Login from "./pages/login";

const Container = styled.div`
`;

const MainContainer = styled.main`
`;

function UnAuth(){
    return(
      <Container>
      <MainContainer>
      <Routes>
        <>
          <Route path="login" element={<Login />} />
        </>
      </Routes>
      </MainContainer>
      </Container>
    );
}
export default UnAuth;
