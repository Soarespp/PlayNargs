import styled from "styled-components";

export const ViewProduct = styled.div`
  width: 100%;  
  height: 100%;
  min-width:300px;
  border-radius: 3px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;

export const NotViewProduct = styled.div`
  width: 100%;
  height: 100%;
`;

export const DescriptionLista = styled.div`
    grid-column: col 3/ span 1;
    align-items: center;
    text-align: left;
    font-size: 18px;
    max-width:250px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

// grid-template-columns: ${(props) => { if (props.lado === 0) { return 520 } else { return 250 } }}px 250px;
// grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
/* grid-template-columns: repeat(auto-fill, minmax(500px, 10fr)); */
// grid-template-columns: [col] 25% [col] 25% [col] 25% [col] 25% ;
export const ItemLista = styled.div`
    display: grid;
    grid-gap: 2px;
    grid-template-columns: [col] ${(props) => { if (props.lado === 0) { return 70 } else { return 30 } }}% [col] ${(props) => { if (props.lado === 0) { return 30 } else { return 70 } }}% ;
    width:99%;
    margin:5px;
    border-bottom: 3px groove rgba(118, 200, 147, 0.836);
`;