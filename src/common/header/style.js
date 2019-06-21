import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 30px;
  background-color: #535652;
  ul{
    display: flex;
    flex-direction: row;
    li{
      a{
        color: #d5d5d5;
        padding: 7px 12px;
        font-size: 12px;
        :hover{
          color: red;
        }
      }
    }
  }
`