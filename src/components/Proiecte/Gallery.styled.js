import styled from 'styled-components'
import {colors} from '../../GlobalStyles'

export const GalleryContainer = styled.section`
  display: none;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  background: ${colors.white};
  padding: 4rem 2rem;
  z-index: 1000;
`;

export const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & .close__btn {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  overflow-y: scroll;

  & img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    cursor: pointer;
  }
`;