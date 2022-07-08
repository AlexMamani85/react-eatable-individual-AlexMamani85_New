import styled from "@emotion/styled";
// import { css } from "@emotion/react";
import {typography} from '../global/typography'


export default function Card({data, onDelete, onEdit}){


    const ImgComida = styled.img`
    height: 130px;
    width: 130px;
    border-radius: 50%;
    clip: rect(0px,135px,135px,0px,);
`;
    const Name = styled.p`
    ${typography.text.xl};
`;
    const Price = styled.p`
    ${typography.text.xl};
    color: red;
    `;

    //    height: 212px;
    const FrontCard = styled.div`
    height: 300px;
    width: 156px;
    border: red 1px solid;
    
    `;
    const ButtonsContainer = styled.div`
    display:flex;
    justify-content: space-between;
    
    `;

    return (
        <FrontCard key={data.id}>
            <div>
            <ImgComida src={data['picture_url']} alt={data.name}/>
            </div>
            <div>
                <Name>{data.name}</Name>
                <Price>${data.price}</Price>
                <ButtonsContainer>
                <span>edit</span>
                <button onClick={()=>onDelete(data.id)}>delete</button>
                </ButtonsContainer>
                <br/><br/><br/><br/>
            </div>
        </FrontCard>
        )
        }