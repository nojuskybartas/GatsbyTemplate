import { Checkmark } from "assets/icons/Checkmark";
import {
  Box,
  ContentWrapper,
  FlexWrapper,
  SectionWrapper,
  Typography,
} from "components";
import React from "react";
import styled, { keyframes, css } from "styled-components/macro";

export const Fireworks = () => (
  <SectionWrapper>
    <ContentWrapper textAlign="center">
      <FireworkWrapper>
        <Firework_1 />
        <Firework_2 />
        <Firework_3 />
        <Firework_4 />
        <Firework_5 />
        <Firework_6 />
        <Firework_7 />
        <Firework_8 />
        <Firework_9 />
        <Firework_10 />
        <Firework_11 />
        <Firework_12 />
        <Firework_13 />
        <Firework_14 />
        <Firework_15 />
      </FireworkWrapper>

      <Typography type="h5" marginTop="s48">
        🎉Hooorayyy🎉
      </Typography>
      <Typography type="h6" marginTop="s48">
        You're registered!
      </Typography>
    </ContentWrapper>
  </SectionWrapper>
);

const fireworkSm = keyframes`
    0%, 100% {
        opacity: 0;
    }
    10%, 70% {
        opacity: 1;
    }
    100% {
        box-shadow: -0.5rem 0rem 0 #fff, 0.5rem 0rem 0 #fff, 0rem -0.5rem 0 #fff, 0rem 0.5rem 0 #fff, 0.35rem -0.35rem 0 #fff, 0.35rem 0.35rem 0 #fff, -0.35rem -0.35rem 0 #fff, -0.35rem 0.35rem 0 #fff;
    }
`;

const fireworkMd = keyframes`
    0%, 100% {
        opacity: 0;
    }
    10%, 70% {
        opacity: 1;
    }
    100% {
        box-shadow: -0.7rem 0rem 0 #fff, 0.7rem 0rem 0 #fff, 0rem -0.7rem 0 #fff, 0rem 0.7rem 0 #fff, 0.49rem -0.49rem 0 #fff, 0.49rem 0.49rem 0 #fff, -0.49rem -0.49rem 0 #fff, -0.49rem 0.49rem 0 #fff;
    }
`;

const fireworkLg = keyframes`
    0%, 100% {
        opacity: 0;
    }
    10%, 70% {
        opacity: 1;
    }
    100% {
        box-shadow: -0.9rem 0rem 0 #fff, 0.9rem 0rem 0 #fff, 0rem -0.9rem 0 #fff, 0rem 0.9rem 0 #fff, 0.63rem -0.63rem 0 #fff, 0.63rem 0.63rem 0 #fff, -0.63rem -0.63rem 0 #fff, -0.63rem 0.63rem 0 #fff;
    }
`;

const FireworkWrapper = styled.div`
  * {
    position: absolute;
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 50%;
  }
`;

const Firework_1 = styled.div`
  animation: 1.2s ease 1.4s infinite normal both running ${fireworkMd};
  top: 55%;
  left: 50%;
`;

const Firework_2 = styled.div`
  animation: 1.2s ease 0.6s infinite normal both running ${fireworkSm};
  top: 50%;
  left: 75%;
`;

const Firework_3 = styled.div`
  animation: 1.2s ease 1.1s infinite normal both running ${fireworkSm};
  top: 85%;
  left: 55%;
`;

const Firework_4 = styled.div`
  animation: 1.2s ease 0.9s infinite normal both running ${fireworkSm};
  top: 65%;
  left: 25%;
`;

const Firework_5 = styled.div`
  animation: 1.2s ease 0.1s infinite normal both running ${fireworkSm};
  top: 30%;
  left: 85%;
`;

const Firework_6 = styled.div`
  animation: 1.2s ease 1.1s infinite normal both running ${fireworkLg};
  top: 25%;
  left: 60%;
`;

const Firework_7 = styled.div`
  animation: 1.2s ease 0.8s infinite normal both running ${fireworkMd};
  top: 40%;
  left: 80%;
`;

const Firework_8 = styled.div`
  animation: 1.2s ease 1.4s infinite normal both running ${fireworkMd};
  top: 80%;
  left: 35%;
`;

const Firework_9 = styled.div`
  animation: 1.2s ease 1.3s infinite normal both running ${fireworkLg};
  top: 80%;
  left: 15%;
`;

const Firework_10 = styled.div`
  animation: 1.2s ease 1s infinite normal both running ${fireworkSm};
  top: 30%;
  left: 80%;
`;

const Firework_11 = styled.div`
  animation: 1.2s ease 0.2s infinite normal both running ${fireworkSm};
  top: 75%;
  left: 60%;
`;

const Firework_12 = styled.div`
  animation: 1.2s ease 1.4s infinite normal both running ${fireworkMd};
  top: 35%;
  left: 20%;
`;

const Firework_13 = styled.div`
  animation: 1.2s ease 0.6s infinite normal both running ${fireworkLg};
  top: 55%;
  left: 50%;
`;

const Firework_14 = styled.div`
  animation: 1.2s ease 0.9s infinite normal both running ${fireworkLg};
  top: 45%;
  left: 90%;
`;

const Firework_15 = styled.div`
  animation: 1.2s ease 1s infinite normal both running ${fireworkSm};
  top: 85%;
  left: 70%;
`;
