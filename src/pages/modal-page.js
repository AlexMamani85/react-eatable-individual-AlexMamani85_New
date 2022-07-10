import styled from "@emotion/styled";
import {colors} from '../styles/colors'
import {typography} from '../styles/typography'
import { useAppContext } from '../store/store';
import {actualIdEatable} from '../config'
export default function ModalPage({onClickClose}) {

  const store = useAppContext();

    const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.gray[600]};
    border: none;
    cursor: pointer;
    background-color: ${({ type }) =>
      type === "operant" ? colors.gray[100] : colors.white};
    ${typography.text.xl};
    &:hover {
      background-color: ${({ type }) =>
        type === "operant" ? colors.gray[200] : colors.gray[50]};
    }
  `;
      function handleDelete(e) {
        e.preventDefault();
           // TODO: eliminar
        localStorage.getItem(actualIdEatable);
        console.log(localStorage.getItem(actualIdEatable));
        
        store.deleteDish(localStorage.getItem(actualIdEatable));

        console.log(store.dishes);
    }

    return <div>
        
        <h1>Modal Page for delete</h1>

        <Button onClick={onClickClose}>salir</Button>
        <Button onClick={handleDelete}>Eliminar</Button>



    </div>
    }