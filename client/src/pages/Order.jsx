
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getOrders } from "../api";
import { CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../redux/reducers/SnackbarSlice";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg};
`;
const Section = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  	justify-content: center;
  align-items: center;
  font-size: 22px;
  gap: 28px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item:center;
  gap: 32px;
  
  padding: 12px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Table = styled.div`
  width:100%;
  font-size: 16px;
  display: flex;
  align-items: center; 
	justify-content: space-evenly;
  gap: 30px
  ${({ head }) => head && `margin-bottom: 22px`}
`;

const TableItem = styled.div`
  width: 33%; 
  font-size: 18px;
  display: flex;
  flex-wrap:wrap;
  margin-right: 50px;
  
`;


const Order = ()=>{
  const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
	const getAllOrders = async()=>{
    setLoading(true);
		const token = localStorage.getItem("foodeli-app-token");
		await getOrders(token).then((res)=>{
			setProducts(res.data)
      setLoading(false);
		})
    .catch((err) => {
      dispatch(
        openSnackbar({
          message: err.response.data.message,
          severity: "error",
        })
      );
    });
	};
	
	useEffect(()=>{
		getAllOrders();
	}, [])
    return(<>
    <Container>
			<Section>
				<Title>Your Orders</Title>
				<Wrapper>
        {loading ? (
            <CircularProgress />
          ) : (
            <>
					<Table>
						<TableItem style={{
                              color:"red",
            
                            }} >Name & Address</TableItem>
						<TableItem style={{
                              color:"red"
                            }}>Total Amount</TableItem>
						<TableItem style={{
                              color:"red"
                            }}>Status</TableItem>
					</Table>
					{products.map((item)=>(
            
						<Table>
						<TableItem  >{item?.address}</TableItem>
						<TableItem >$ {item?.total_amount}</TableItem>
						<TableItem style={{
                              color:"green"
                            }}
             >{item?.status}</TableItem>
					</Table>
					))}
          </>
          )}

				</Wrapper>
			</Section>
		</Container>
    </>)
}

export default Order