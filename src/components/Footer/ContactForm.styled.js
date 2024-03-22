import styled from 'styled-components'
import { colors } from '../../GlobalStyles'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .form__bottom {
      display: flex;
      justify-content: space-between;
    }
    

    .email__confirmation {
        position: fixed;
        display: flex;
        justify-content: center;
        bottom: 2rem;
        left: 0;
        width: 100%;

        & div {
            padding: 1rem;
        }
    }
  `;

export const Input = styled.div`
    display: flex;
    flex-direction: column;

    & label {
      font-family: inherit;
      font-size: 0.75rem;
      font-weight: 800;
    }
    & input {
      height: 25px;
    }

    & textarea {
      height: 100px;
    }

    & input,
    & textarea {
      width: 250px;
      border-radius: 5px;
      border: 2px solid black;
    }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
    & a {
      text-decoration: none;
      color: inherit;
    }
`;

export const Button = styled.button`
  background: ${colors.black};
  color: ${colors.white};
`