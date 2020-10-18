import styled from "styled-components";

export const StyledPagination = styled.div<{ currentSlide: number }>`
  height: 75px;
  margin: 50px 0 0 0;
  position: relative;

  p {
    position: absolute;
    top: ${({ currentSlide }) =>
      currentSlide === 1 ? 0 : `calc(${currentSlide - 1}*25%)`};
    right: 50px;
    transform: translateY(-50%);
  }

  span {
    content: "";
    width: 15px;
    position: absolute;
    top: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.black};
    height: 3px;
    transition: width 0.2s;

    &:nth-of-type(2) {
      top: 25%;
    }
    &:nth-of-type(3) {
      top: 50%;
    }
    &:nth-of-type(4) {
      top: 75%;
    }
    &:nth-of-type(5) {
      top: 100%;
    }
    &:nth-of-type(${({ currentSlide }) => currentSlide}) {
      width: 30px;
    }
  }
`;
