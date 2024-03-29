import styled from 'styled-components'

export const MenuStyle = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;

  position: relative;
  top: 0;
  margin-top: -1.6rem;
  margin-bottom: 1rem;

  section { display: flex; align-items: center; }
  ul { display: flex; }
  li { list-style: none; margin: 0 1rem; }
  `;
