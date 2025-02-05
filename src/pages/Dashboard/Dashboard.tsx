import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/Products/Products';
import Button from '../../components/ui/Button/Button';
import { Container } from './Dashboard.styles';

interface DashboardProps {
  handleLogoutClick: () => any;
}

const Dashboard: React.FC<DashboardProps> = ({handleLogoutClick}) => {
  const [allProducts, setAllProducts] = useState([]);

  const loadAllProducts = async () =>{
    if(allProducts.length === 0 ){
      let response = await getAllProducts();
      console.log('all products fake store api', response.response.data)
      setAllProducts(response.response.data)
      console.log(allProducts)
    }
  }
  useEffect(() => {
    loadAllProducts(); 
  })
  //colocar dentro de um useEffect pra carregar apenas 1x 
  
  function onClickLogout(){
    handleLogoutClick();
  };

  return (
    <Container>
     
      <table>
        <tr>
          <th>title</th>
          <th>price</th>
          <th>description</th>
          <th>category</th>
        </tr>
        { allProducts.map((product) => (
          <tr>
            <td>{ product['title'] } </td>
            <td>{ product['price'] } </td>
            <td>{ product['description'] } </td>
            <td>{ product['category'] } </td>
          </tr>
      ))}
      </table>
      
      <Button title='fazer logout' onClick={onClickLogout}/>
    </Container>
  );
}

export default Dashboard;
