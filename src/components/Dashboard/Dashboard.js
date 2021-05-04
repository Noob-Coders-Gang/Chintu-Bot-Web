import React from 'react'
import styled from 'styled-components'
import chintu from './img/chintu.png'
function Dashboard() {

    return (
        <Wrapper >

            <Card>
                <ChintuCard>
                    <img src={chintu} />
                </ChintuCard>
                <LoginCard>
                    <div>
                        <Title>Welcome To Dashboard!</Title>
                        <p># Login through discord to proceed
                </p>
                        <Login href="/" >Login</Login>
                    </div>
                </LoginCard>
            </Card>
        </Wrapper>
    )
}

export default Dashboard;

const Wrapper = styled.div`
text-align: center;
margin-top : 10%;
display: flex;
justify-content: center;


`


const Login = styled.a`


    background-color: #7289DA;
    font-size: 1.5rem;
    border-radius: 10px;
    margin: 10px 0px;
    padding: 15px;
    font-weight: 500;
    display: inline-block;
    box-shadow: 0px 0px 50px .5px rgba(114, 136, 218, 0.55);
    text-transform: uppercase;
    width : 80%;

    
`
const Card = styled.div`
display: flex;
justify-content: center;
background-color : #f8f8f8;
border-radius : 20px;
@media (max-width: 768px) {
    flex-direction: column;
    width : 90%;
    img {
        width : 90%;
    }
  }
  p {
    color : black;
}
`

const ChintuCard = styled.div`
/* display :  flex ; */


img{
    max-width : 350px;
    padding-top : 20px;
}

`
const Title = styled.div`
font-size: 3rem;
font-weight: 600;
color: #7289DA;
`

const LoginCard = styled.div`
/* display :  flex ; */

div{
    padding : 20px;
}


`

