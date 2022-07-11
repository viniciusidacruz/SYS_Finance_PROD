import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const GroupLeft = styled.div`
  position: relative;

  width: 50%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Cover = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  background: url("../../assets/hero-sign.jpg");
`;

export const GroupRight = styled.div`
  width: 50%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
