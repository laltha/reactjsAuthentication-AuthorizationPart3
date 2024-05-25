import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import AllProductsSection from '../AllProductsSection'

import Header from '../Header'

import './index.css'

const Products = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="product-sections">
        <AllProductsSection />
      </div>
    </>
  )
}
export default Products
