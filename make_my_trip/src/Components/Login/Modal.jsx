import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width: 120%;
  height: 100%;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index= 10
`;

const ModalWrapper = styled.div`
  width: 450px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  top:30px;
  z-index: 30;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  padding-left : 18px;
  padding-top : 20px; 
  flex-direction: column;
  color: #141414;

 

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          {/* <animated.div style={animation}> */}
            <ModalWrapper showModal={showModal}>
              {/* <ModalImg src={require('./modal.jpg')} alt='camera' /> */}
              <ModalContent>
                <h2>Login / signup </h2><br />
                <div style={{margin:'0 13px 0 0'}}>Email or mobile number</div>
                <div>
                <input style={{width:'400px',height:'35px',marginTop:'10px'}}placeholder='enter email or mobile number'  />
                </div><br/>
                <button style={{backgroundColor:'blue'}}>CONTINUE</button><br />
                <div style={{display:'flex',justifyContent:'center'}}>or Login/ Signup with</div><br />
                <button style={{backgroundColor:'#fff',color:"#000",border:'1px solid #4a4a4a'}}>Login with Google</button><br />
                <div style={{fontSize:'10px'}}>By proceeding, you agree to MakeMyTrip's  Privacy Policy, User Agreement and T&Cs</div>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          {/* </animated.div> */}
        </Background>
      ) : null}
    </>
  );
};
