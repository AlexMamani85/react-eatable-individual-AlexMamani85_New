import {Link} from 'react-router-dom'
import { useAppContext } from '../store/store'
import Card from '../components/card'
import ModalPage from '../pages/modal-page'
import styled from "@emotion/styled";

import { useState } from "react";
export default function IndexPage() {

    const store = useAppContext();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const Modal = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgb(23 23 23 / 75%);
    display: flex;
    justify-content: center;
    align-items: center;
  `;

    function handleClose() {
      setIsOpenModal(false);
      }

    function handleOpen() {
      setIsOpenModal(true);
      }
    return (
        <>
            <Link to="/create">Create</Link>
            <div>INDEX Page</div>
            {store.dishes.map((item)=>(
                <Card
                  onClickOpen={handleOpen} 
                  onClickClose={handleClose} 
                  key={item.id} 
                  data={item}>
                </Card>

            ))}
        {isOpenModal ? (
        <Modal>
          <ModalPage

        onClickClose={handleClose}
        

            // onCalcSubmit={handleCalcSubmit}
          />
        </Modal>
      ) : null}
        </>
    
    )

    }