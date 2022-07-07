import styled from "@emotion/styled";


export default function Card({data}){
    console.log(data)

    const ImgComida = styled.img`
    height: 130px;
    width: 130px;
    border-radius: 50%;
    clip: rect(0px,135px,135px,0px,);
`;
    const Name = styled.p`
    
`;

 
    return (
        <div key={data.id}>
            <div>
            <ImgComida src={data['picture_url']} alt={data.name}/>
            </div>
            <div>
                <Name>{data.name}</Name>
                <p>{data.price}</p>
                <span>edit</span>
                <span>delete</span>
                <br/><br/><br/><br/>
            </div>
        </div>
        )
        }