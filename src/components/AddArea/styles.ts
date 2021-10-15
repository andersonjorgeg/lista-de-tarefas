import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;

  .image {
    margin-right: 5px;
  }

  input {
    border: 0px;
    background: transparent;
    outline: 0;
    color: #FFF;
    font-size: 18px;
    flex: 1;
  }

  button { 
    background: #F63D3D;
    background-image: -webkit-linear-gradient(top, #F63D3D, #811616);
    background-image: -moz-linear-gradient(top, #F63D3D, #811616);
    background-image: -ms-linear-gradient(top, #F63D3D, #811616);
    background-image: -o-linear-gradient(top, #F63D3D, #811616);
    background-image: -webkit-gradient(to bottom, #F63D3D, #811616);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    line-height: 14px;
    color: #FFFFFF;
    font-weight: 900;
    padding: 12px;
    -webkit-box-shadow: 1px 1px 6px 0 #000000;
    -moz-box-shadow: 1px 1px 6px 0 #000000;
    box-shadow: 1px 1px 6px 0 #000000;
    text-shadow: 1px 1px 6px #000000;
    border: solid #762C2C 1px;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
  }
  button:hover {
   border: solid #ED3333 1px;
   background: #811616;
   background-image: -webkit-linear-gradient(top, #811616, #F63D3D);
   background-image: -moz-linear-gradient(top, #811616, #F63D3D);
   background-image: -ms-linear-gradient(top, #811616, #F63D3D);
   background-image: -o-linear-gradient(top, #811616, #F63D3D);
   background-image: -webkit-gradient(to bottom, #811616, #F63D3D);
   -webkit-border-radius: 5px;
   -moz-border-radius: 5px;
   border-radius: 5px;
   text-decoration: none; 
}
@media screen and (max-width: 380px) {
  button {
    font-size: 10px;
    padding: 10px;
  }
}
`;
