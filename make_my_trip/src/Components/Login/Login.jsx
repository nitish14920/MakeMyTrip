import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './Modal';
import './Login.css'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  left: -350px;
  z-index:25;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #061526;
  color: #fff;
  font-size: 24px;
  cursor: pointer;


  position : relative;
  top: -275px;
  left: 330px;

  z-index: 14;
`;

function Login() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={openModal}><img src={ window.location.origin + '/loginorcreate.png'} width='240px' style={{marginTop:'15px'}}></img></Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Container>
    </>
  );
}

export default Login;
