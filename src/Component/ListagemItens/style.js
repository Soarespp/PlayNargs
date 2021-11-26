import styled from "styled-components";

export const DescriptionLista = styled.div`
    grid-column: col 3/ span 1;
    align-items: center;
    text-align: left;
    font-size: 18px;
    max-width:250px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

// grid-template-columns: ${(props) => { if (props.lado === 0) { return 520 } else { return 250 } }}px 250px;
// grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
/* grid-template-columns: repeat(auto-fill, minmax(500px, 10fr)); */
// grid-template-columns: [col] 25% [col] 25% [col] 25% [col] 25% ;
export const ItemLista = styled.div`
    display: grid;
    grid-template-columns: [col] ${(props) => { if (props.lado === 0) { return 70 } else { return 30 } }}% [col] ${(props) => { if (props.lado === 0) { return 30 } else { return 70 } }}% ;
    border: 4px groove #52b69a;
    border-radius: 5px;
    border-bottom: 3px groove rgba(118, 200, 147, 0.836);
`;