import styled from "styled-components";
import { useMainContext } from "../context/MainContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  max-width: 400px;
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
const AddWishListButton = styled.button`
  cursor: pointer;
  margin-top: 30px;
  color: #fff;
  padding: 8px 12px;
  border-radius: 8px;
  background: #ec5757;
  border: 1px solid #cc4343;
  &:hover {
    background: #cc4343;
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
          <h2>Event details</h2>
          <button onClick={() => setDetailsModalData(null)} type="button">
            <span>+</span>
          </button>
        </ModalHeader>
        <ModalContent>
          <ImageHolder>
            <img alt="detail_img" src={detailData.image.url} />
          </ImageHolder>
          <ContentBlock>
            <p>
              <b>Event name:</b> {detailData.name}
            </p>
            <p>
              <b>Summary:</b> {detailData.summary}
            </p>
            <p>
              <b>Date and time:</b> {detailData.start_date}{" "}
              {detailData.start_time}
            </p>
            <p>
              <b>Location: </b>
              {detailData.primary_venue.address.localized_area_display}
            </p>
            <p>
              <b>Ticket availability: </b>
              {detailData.ticket_availability.maximum_ticket_price.display}
            </p>
            <AddWishListButton
              type="button"
              onClick={() => {
                setWishListItems([...wishListItems, detailData]);
                toast.success("Successfully added to wish list!", {
                  position: toast.POSITION.BOTTOM_CENTER,
                });
              }}
            >
              ♥ Add to wish list
            </AddWishListButton>
          </ContentBlock>
        </ModalContent>
        <ToastContainer />
      </Wrapper>
    </ModalHolder>
  );
}
