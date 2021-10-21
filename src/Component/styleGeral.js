import styled from "styled-components";

export const ViewProduct = styled.div`
  width: 80px;  
  height: 100%;
  border-radius: 3px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;