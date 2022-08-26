import styled from 'styled-components';

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  position: relative;
`;

export const Field = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 20px;
  padding-right: 45px;
  padding-left: 25px;
  border: 3px solid #004747;
  border-radius: 20px;
  outline: none;
  font-size: 16px;
  background: rgba(234, 234, 234, 0.7);

  &:placeholder-shown {
    color: grey;
    font-size: 14px;
    padding-left: 25px;
  }
  &::selection {
    background-color: #00b2b2;
  }
`;

export const BtnSearch = styled.button`
  position: absolute;
  padding-right: 10px;
  top: 0;
  right: 0px;
  width: 45px;
  height: 40px;
  border-style: solid solid solid hidden;
  border-width: 3px;
  border-color: #004747;
  background: rgba(234, 234, 234, 0.3);
  border-radius: 0 20px 20px 0;
  cursor: pointer;
`;
