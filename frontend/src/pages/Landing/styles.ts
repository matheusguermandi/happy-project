import styled from 'styled-components';

import landingImg from '../../assets/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: url(${landingImg}) no-repeat 80% center;

  main {
    max-width: 350px;

    h1 {
      font-size: 72px;
      font-weight: 900;
      line-height: 70px;
    }

    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }
  }

  div {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 24px;
    line-height: 34px;
    display: flex;
    flex-direction: column;
    text-align: right;

    strong {
      font-weight: 800;
    }
  }

  a {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 80px;
    width: 80px;
    background: #ffd666;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
  }

  a:hover {
    background: #96feff;
  }
`;
