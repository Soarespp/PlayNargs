import styled from "styled-components";

export const ViewProduct = styled.div`
  width: 100%;  
  height: 100%;
  border-radius: 3px;
  // background-image: url(${props => props.src});
  background-image: url(${(props) => { if (props.src !== 0) { return props.src } else return 'https://upload-playnargs.s3.amazonaws.com/10c412f76a91a1140ac10e45789ca63a-sem-imagem.jpg' }});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;