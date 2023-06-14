import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MainPage() {
  return (
    <Wrap>
      <div>Welcome!</div>
    </Wrap>
  );
}

export default MainPage;
