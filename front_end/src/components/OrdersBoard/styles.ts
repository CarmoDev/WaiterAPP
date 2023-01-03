import styled from 'styled-components';

export const Board = styled.div`
  padding: 1rem;
  border: solid 0.0625rem rgba(204, 204, 204, 0.4);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  > header {
    padding: 0.5rem;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;

  button {
    background: #fff;
    border: solid 0.0625rem rgba(204, 204, 204, 0.4);
    height: 8rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    transition: 0.5s;

    strong {
      font-weight: 31.25rem;
    }

    span {
      font-size: 14;
      color: #666;
    }

    & + button {
      margin-top: 1.5rem;
    }

    &:hover {
      background-color: #f4f4f4;
    }
  }
`;
