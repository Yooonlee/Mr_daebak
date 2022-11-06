import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import AddOrder from "./AddOrder";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: row;
    align-item: center;
    text-align: center;
    justify-content: space-around;
    border: 1px solid grey;
    boerder-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        border: 5px solid red;
        transform: scale(1.2);
        background: grey;
    }
`;

const NameText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

const DescriptionText = styled.p`
    font-size: 15px;
    font-weight: 500;
`;

function DishMenuListItem(props) {
    const { dish } = props;
    const [isHovering, setIsHovering] = useState(false);

    const content =
    
        <table>
            <tr>
                <td colspan="2"><img src={dish.picture} alt="그림 없음" width="125px" height="125px" /></td>
            </tr>
            <tr>
                <td><NameText>{dish.name}</NameText></td>
                <td>{dish.price}원</td>
            </tr>
        </table>
        ;

    const hoveredcontent =
            <table>
            <tr>
                <td colspan="2"><img src={dish.picture} alt="그림 없음" width="125px" height="125px" /></td>
            </tr>
            <tr>
                <td><NameText>{dish.name}</NameText></td>
                <td>{dish.price}원</td>
            </tr>
            <tr>
                <td colspan="2"><DescriptionText>{dish.description}</DescriptionText></td>
            </tr>
            <tr>
                <td colspan="2"><AddOrder dishid={dish.id} /></td>
            </tr>
        </table>
        ;

        
    return (
        <div onMouseEnter={() => { setIsHovering(!isHovering) }} onMouseLeave={() => { setIsHovering(!isHovering) }}>
            <Wrapper>
                {isHovering ? hoveredcontent : content};
            </Wrapper>
        </div>
    );
}

export default DishMenuListItem;