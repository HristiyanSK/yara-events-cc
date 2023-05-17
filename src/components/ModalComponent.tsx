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
const ModalContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding: 12px 16px;
`;
const ImageHolder = styled.div`
  width: 100%;
  position: relative;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  background: #f1f1f1;
  > img {
    height: 100%;
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    margin: auto auto;
  }
`;

export default function ModalComp({
  detailData,
}: {
  detailData: any;
}): JSX.Element | null {
  if (!detailData) {
    return null;
  }

  return (
    <ModalHolder>
      <ModalHeader>
        <h2>Modal Title</h2>
        <button type="button">
          <span>+</span>
        </button>
      </ModalHeader>
      <ModalContent>
        <ImageHolder>
          <img />
        </ImageHolder>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
      </ModalContent>
    </ModalHolder>
  );
}
