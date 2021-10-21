import styled from "styled-components";

export const ViewProduct = styled.div`
  width: 65%;
  height: 200px;
  border-radius: 3px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin: 5px;
`;

export const DescriptionLista = styled.div`
    align-items: center;
    width: 50%;
    color: rgb(255, 255, 255);
    font-size: 25px;
    margin-top: 3%;
`;