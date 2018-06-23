import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 100px;
  max-height: 100px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  z-index: 2;
  box-shadow: 0 2px 12px -4px black;
`;

export const HeaderRepo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 45px;
  }

  .info {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    strong {
      font-size: 24px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }
`;

export const FilterStatus = styled.select`
  border: 1px solid #ddd;
  padding: 8px 30px;
  height: 42px;
  background: #fff;
  color: #999;
  font-size: 16px;
`;
