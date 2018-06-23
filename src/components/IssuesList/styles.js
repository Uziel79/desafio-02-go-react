import styled from 'styled-components';

export const ListIssues = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: calc(100% - 100px);

  .msgErro {
    color: #ff0000;
    font-style: italic;
  }

  li {
    display: flex;
    flex-direction: row;
    width: calc(100% / 3 - 30px);
    font-weight: bold;
    padding: 20px;
    margin: 10px;
    background: #fff;
    img {
      width: 64px;
      height: 64px;
      border-radius: 100%;
    }
    div {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      justify-content: space-between;
      width: 70%;
    }
    strong {
      width: 60%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    small {
      font-weight: normal;
      font-size: 12px;
      color: #999;
      font-style: italic;
    }
    button {
      background: #b286d1;
      color: #fff;
      border: 0;
      font-weight: bold;
      border-radius: 3px;
      padding: 8px 10px;
      font-size: 12px;
      &:hover {
        background: #b256d1;
        cursor: pointer;
      }
    }
  }
`;

export const Loading = styled.div`
  position: relative;
  top: 0;
  width: 100vw;
  height: 100vh;
  i {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
`;
