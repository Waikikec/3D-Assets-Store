import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { mobile } from '../responsive';
import { popularProducts } from '../data';


const Container = styled.div``;

const Wrapper = styled.div`
    background-color: whitesmoke;
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 75vh;
    object-fit: contain;
    ${mobile({ height: "40vh" })};
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })};
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 2px solid yellowgreen;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid yellowgreen;
    border-radius: 10px;
    background-color: white;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        background-color: whitesmoke;
    }
`;

const SinglePage = () => {
    // const location = useLocation();
    // const id = location.pathname.split('/')[2];

    // const [product, setProduct] = useState({});
    // const [quantity, setQuantity] = useState(1);
    // const [color, setColor] = useState('');
    // const [size, setSize] = useState('');
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     const getProduct = async () => {
    //         try {
    //             const res = await publicRequest.get("/products/find/" + id);
    //             setProduct(res.data);
    //         } catch (error) { }
    //     }
    //     getProduct();
    // }, [id]);

    // const handleQuantity = (type) => {
    //     if (type === 'decrease') {
    //         quantity > 1 && setQuantity(quantity - 1);
    //     } else {
    //         setQuantity(quantity + 1);
    //     }
    // }

    // const handleAddtoCard = () => {
    //     dispatch(
    //         addProduct({ ...product, quantity, color, size })
    //     );
    // }

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={popularProducts[0].img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{popularProducts[0].title}</Title>
                    <Desc>{popularProducts[0].desc}</Desc>
                    <Price>$ {popularProducts[0].price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {/* {popularProducts[0].color?.map((c) => (
                                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                            ))} */}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            {/* <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product.size?.map((s) => (
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))} */}
                            {/* </FilterSize> */}
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            {/* <RemoveIcon onClick={() => handleQuantity('decrease')} /> */}
                            {/* <Amount>{quantity}</Amount> */}
                            {/* <AddIcon onClick={() => handleQuantity('increase')} /> */}
                        </AmountContainer>
                        {/* <Button onClick={handleAddtoCard}>ADD TO CARD</Button> */}
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default SinglePage
