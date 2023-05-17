import { styled } from "styled-components";

const ModalHolder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  z-index: 9999;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 0 16px;

  h4 {
    color: #fa832f;
  }

  button {
    cursor: pointer;
    width: 36px;
    height: 36px;
    padding: 0.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e6eff8;
    border-radius: 4px;
    border: none;
  }
`;

export default function ModalComp({ children }: { children: any }) {
  return (
    <ModalHolder>
      <ModalHeader>
        <h2>Modal Title</h2>
        <button type="button"></button>
      </ModalHeader>
      {children}
    </ModalHolder>
  );
}
