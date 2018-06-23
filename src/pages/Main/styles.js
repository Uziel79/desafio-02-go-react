import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 320px);
`;

export const Form = styled.form`
  width: 100%;
  max-width: 260px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    width: 100%;
    padding: 0 20px;
    background: #eee;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
    border: ${props => (props.withError ? '2px solid #F00' : 0)};
  }

  button {
    width: 80px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #59ea9a;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #52d89f;
    }
  }
`;
