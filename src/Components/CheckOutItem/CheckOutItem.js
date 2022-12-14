import React, { useContext } from 'react'
import styled from 'styled-components';
import BasicButton from '../BasicButton/BasicButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {useDispatch,useSelector} from 'react-redux';
import {addToCart,decFrom,removeItemFrom} from '../../store/cart/cartAction'
import {cartItemSelector} from '../../store/cart/cartSelector'

const CheckOutItem = ({item}) => {
    const {name,imageUrl,price,quantity} = item;
    const cartItems = useSelector(cartItemSelector)
    const dispatch = useDispatch();
    const decrement=(item)=>{
      dispatch(decFrom(cartItems,item))
    }
    const addItem=(item)=>{
      dispatch(addToCart(cartItems,item))
    }
    const delFromCart=(item)=>{
      dispatch(removeItemFrom(cartItems,item))
    }
  return (
    <Container>
        <Image >
            <img src={imageUrl}/>
        </Image>
        <SPAN>{name}</SPAN>
        <SPAN1>
            <BasicButton value = {<ArrowBackIosNewIcon/>}
            click={() =>decrement(item)}/>
                {quantity}
            <BasicButton click={()=>addItem(item)} BasicButton value = {<ArrowForwardIosIcon/>
            }/>    
            
        </SPAN1>
        <SPAN>{price}</SPAN>
        <BasicButton click={()=>delFromCart(item)}  value = {<CloseRoundedIcon/>}
        variant = 'text'/>
            
        
            
    
    </Container>
  )
}

export default CheckOutItem;


//styles code below

const Container =styled.div`
  width:100%;
  display:flex;
  min-height:100px;
  border-bottom:1px solid darkgrey;
  padding:15px 0;
  font-size:20px;
  align-items:center;
`

const Image=styled.div`
    width:23%;
    padding-right:15px;

    img {
      width:100%;
      height:100%;
    }
`
const SPAN = styled.span`
    width:23%;
`

const SPAN1 = styled.span `
    width:23%;
    display:flex;
`