import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { CompLayout } from "../Common/CompLayout";
// get data
import { getData } from "../../tool/functions";
// loader
import PacmanLoader from "react-spinners/PacmanLoader";
// api demo
import { getSingleProduct } from "../../tool/fetchData";
const items = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `product${key}`,
    icon: React.createElement(icon),
    label: `productNav${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `productNav${key}Option${j + 1}`,
      };
    }),
  };
});

const StyledProduct = styled.div`
  .product-demo {
    margin-top: 20px;
    .list {
      padding-bottom:18px ;
    }
    .list span {
      color:#a2d3ec ;
      &:last-child {
        margin-left:8px ;
        font-size: 18px;
        color:#3bffae ;
      }
    }
    .imgs {
      width:100% ;
      display:flex ;
      flex-wrap:wrap ;
      align-items:center ;
    }
    .imgs img {
      box-sizing: border-box;
      margin: 2%;
      border:1px solid #fff ;
      border-radius:8px ;
      width:29.3333% ;
    }
  }
`;

export const Product = () => {
  const [productData, setProductData] = useState({
    isLoading: true,
    data: {}
  })
  useEffect(() => {
    getSingleProduct({
      setData: setProductData
    });
  }, []);
  return <CompLayout
    items={items}
    defaultItem="ProductNav1Option1"
    breadcrumb={['product', 'index']}
    children={
      <StyledProduct>
        <div className="br">productData demo:</div>
        {productData.isLoading ? <div className="loader">
          <PacmanLoader color={'#ffc107'} loading={productData.isLoading} size={35} />
        </div> :
          <div className="product-demo">
            <div className="list"><span>title: </span><span>{getData(productData.data, ['title'])}</span></div>
            <div className="list"><span>brand: </span><span>{getData(productData.data, ['brand'])}</span></div>
            <div className="list"><span>category: </span><span>{getData(productData.data, ['category'])}</span></div>
            <div className="list"><span>description: </span><span>{getData(productData.data, ['description'])}</span></div>
            <div className="list"><span>discountPercentage: </span><span>{getData(productData.data, ['discountPercentage'])}</span></div>
            <div className="list"><span>price: </span><span>{getData(productData.data, ['price'])}</span></div>
            <div className="list"><span>rating: </span><span>{getData(productData.data, ['rating'])}</span></div>
            <div className="list"><span>stock: </span><span>{getData(productData.data, ['stock'])}</span></div>
            <div className="imgs">
              {getData(productData.data, ['images']).map((v, k) => <img key={k} alt="" src={v} />)}
            </div>
          </div>
        }
      </StyledProduct>
    }>
  </CompLayout>
}