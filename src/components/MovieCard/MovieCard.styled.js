import styled from 'styled-components';

export const WrapperInfoStyled = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 6px double #004747;
  padding-bottom: 10px;
`;

export const WrapperTextInfo = styled.div`
  max-width: 600px;
`;

export const ImgStyled = styled.img`
  object-fit: cover;
  height: auto;
  border-radius: 5px;
  max-width: 250px;
  margin-right: 15px;
`;
export const SingleText = styled.p`
  margin-top: 10px;
`;
export const SingleTitle = styled.h4`
  margin-top: 10px;
  &:first-child {
    margin-top: 0;
  }
`;
export const GenresText = styled.span`
  font-size: 16px;
  font-weight: 400;
  padding-left: 10px;
`;
