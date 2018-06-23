import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  height: 100%;
  padding: 30px;

  background: #fff;
  display: flex;
  flex-direction: column;
  z-index: 3;
  box-shadow: 2px 0 12px -4px black;
`;

export const RepoList = styled.ul`
  list-style: none;
  border-top: 1px solid #ccc;
  padding-top: 15px;
  margin-top: 15px;

  li {
    display: flex;
    align-items: center;
    padding: 10px 0;
    img {
      width: 45px;
      height: 45px;
      margin-right: 15px;
    }
    .repo-info {
      display: flex;
      flex-direction: column;
      strong {
      }
      small {
      }
    }
  }
`;
