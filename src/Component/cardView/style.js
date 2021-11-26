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
    display:'flex';
    width:99%;
    heigth:99%;
    // background-color: (props) => {if (dados) {#fdffb6} else if (dados) {#e5e5e5} else if (dados) {#f9844a} else {#81b29a}}; 
    background-color: #${(props) => { if (props.pos === 0) { return 'f0db4f' } else if (props.pos === 1) { return 'bcb8b1' } else if (props.pos === 2) { return 'cd9777' } else { return '81b29a' } }}; 
    border: 2px groove #52b69a; 
    border-radius: 8px; height: 80px 100%;
`;