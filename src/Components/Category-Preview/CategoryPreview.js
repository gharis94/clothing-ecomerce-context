import React, { useContext } from 'react'
import CardItem from '../CardItem/CardItem';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
import {categoriesMapSelector} from '../../store/product/productSelector'

const CategoryPreview = () => {
  const categories = useSelector(categoriesMapSelector)
  return (
    <div>
      {
        categories && Object.keys(categories).map(category=>(
          <MainContainer key={category}>
            <Link to={category}>
              <h2>{category.toUpperCase()}</h2>
            </Link>
      
            <Container>
              {
                  categories[category].filter((_,idx)=>idx<4).map(item=>(
                    <CardItem key={item.id} item={item}/>))
              }
            </Container>
            
          </MainContainer>
        ))
      }
    </div>
  )
}

export default CategoryPreview;


const Container = styled.div `
display:flex;
flex-wrap:wrap;
justify-content:space-between;
margin:5px;
`

const MainContainer = styled.div `
margin:20px;
`