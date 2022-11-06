import React from 'react';
import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Badge, ShoppingCartOutlined} from "@mui/icons-material";


const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
`
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
border: none;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
`
const Right = styled.div`
  flex: 1;
`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>KGZ</Language>
                    <SearchContainer>
                        <Input/>
                        <SearchOutlinedIcon/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>SUBA.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                        <Badge badgeContent={4} color="success">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </MenuItem>

                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;