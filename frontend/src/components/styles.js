import styled, { css } from "styled-components";

export const Footer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  // bottom: 0;
  display: flex;
  display: flex;
  margin-top: 20px;
  // background-color: black;
  align-items: center;

  ${props =>
    props.mobile &&
    css`
      @media (max-width: 900px) {
        /* Mobile styles for Sidebar component */
        width: 110%;
        // margin-left: 7%;
        margin-top:  0px;

      }
    `}
`;

export const Input = styled.input`
  font-size: 15px;
  height: 20px;
  width: 75%;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 25px;
  border-radius: 5px;
  padding: 10px;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  background-color: #141414;
  color: white;

  ::placeholder {
    font-size: 15px;
    font-weight: 400;
    padding-left: 20px;
   }

   ${props =>
    props.mobile &&
    css`
      @media (max-width: 900px) {
        /* Mobile styles for Sidebar component */
        width: 75vw;
      }
    `}

    ${props =>
    props.mobile &&
    css`
        @media (max-height: 800px) {
          /* Mobile styles for Sidebar component */
          // width: 100%;
          margin-bottom: 5%;
        }
      `}
`;

export const Text = styled.p`
  border-radius: 10px;
  width: 100%;
  margin: 0px;
  padding: 15px 27.5% 15px 10.5%;
  display:block;
  overflow:hidden;

  ${props =>
    props.mobile &&
    css`
      @media (max-width: 900px) {
        /* Mobile styles for Sidebar component */
        padding: 5px 7.5% 5px 7.5%;
        margin: 0px;
        margin-left: 10px;
      }
    `}
`;

export const MessageWrapper = styled.div`
  position: relative;
  max-height: 70vh;
  overflow-y: scroll;
  padding-top: 0.5%;
  margin-left: 1%;
  width: 99%;
  /* Hide the scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer and Edge */

  /* Hide the scrollbar for WebKit-based browsers */
  &::-webkit-scrollbar {
    width: 0.8em;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }


  ${props =>
    props.mobile &&
    css`
      @media (max-width: 900px) {
        /* Mobile styles for Sidebar component */
        padding-top: 10px;
        max-height: 70vh;
      }
    `}
`;

export const InputContainer = styled.div`
  position: relative;
  width: 80%;
  margin-bottom:10px;
  margin-left: 50px;

  ${props =>
    props.mobile &&
    css`
      @media (max-width: 900px) {
        /* Mobile styles for Sidebar component */
        // width: 150%;
        margin-left: 20%;
      }
    `}

    ${props =>
    props.mobile &&
    css`
        @media (max-width: 600px) {
          /* Mobile styles for Sidebar component */
          // margin-left: 25%;
        }
      `}

      ${props =>
        props.mobile &&
        css`
            @media (max-width: 600px) {
              /* Mobile styles for Sidebar component */
              margin-left: 22.5%;
            }
          `}
`;

export const SendIconContainer = styled.div`
  position: absolute;
  right: 32%;
  cursor: pointer;

  ${props =>
    props.mobile &&
    css`
      @media (max-height: 800px) {
        /* Mobile styles for Sidebar component */
        position: absolute;
        top: 38%;
        right: 32%;
        // background-color: yellow;
      }
    `}

  ${props =>
    props.mobile &&
    css`
      @media (max-width: 900px) {
        /* Mobile styles for Sidebar component */
        position: absolute;
        top: 43%;
        // right: 3%;
        // background-color: yellow;
      }
    `}

    ${props =>
    props.mobile &&
    css`
        @media (max-width: 600px) {
          /* Mobile styles for Sidebar component */
          position: absolute;
          top: 48%;
          // right: 38%;
          // margin-left: 200px;
          // background-color: yellow;
        }
      `}
`;