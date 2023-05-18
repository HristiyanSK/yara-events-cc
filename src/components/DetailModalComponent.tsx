import { styled } from "styled-components";
import { useMainContext } from "../context/MainContext";

const ModalHolder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  z-index: 9999;
`;
const Wrapper = styled.div`
  background: #fff;
  margin: 40px auto;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.1);
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  padding: 0 16px;
  h4 {
    color: #fa832f;
  }
  button {
    cursor: pointer;
    width: 36px;
    height: 36px;
    font-size: 30px;
    padding: 0.625rem;
    display: flex;
    background: #eaeaea;

    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: none;
    > :hover {
      background: #eaeaea;
    }
    span {
      transform: rotate(45deg);
      opacity: 0.8;
    }
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
const ContentBlock = styled.div`
  margin: 10px 0;
  p {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 14px;
  }
`;

export default function DetailModalComp({
  detailData,
}: {
  detailData: any;
}): JSX.Element | null {
  const { setDetailsModalData, setWishListItems, wishListItems } =
    useMainContext();
  if (!detailData) {
    return null;
  }

  return (
    <ModalHolder>
      <Wrapper>
        <ModalHeader>
          <h2>Modal Title</h2>
          <button onClick={() => setDetailsModalData(null)} type="button">
            <span>+</span>
          </button>
        </ModalHeader>
        <ModalContent>
          <ImageHolder>
            <img alt="detail_img" />
          </ImageHolder>
          <ContentBlock>
            <p>
              <b>Event name:</b> Test
            </p>
            <p>
              <b>Location:</b> Test
            </p>
            <p>
              <b>Date and time:</b> Test
            </p>
            <p>
              <b>Test</b>
            </p>
            <button
              onClick={() => setWishListItems([...wishListItems, detailData])}
            >
              Add to wish list
            </button>
          </ContentBlock>
        </ModalContent>
      </Wrapper>
    </ModalHolder>
  );
}
