import styled from "styled-components";

export const ModalHolder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  z-index: 9999;
`;
export const Wrapper = styled.div`
  background: #fff;
  margin: 40px auto;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.1);
`;
export const ModalHeader = styled.div`
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
    span {
      transform: rotate(45deg);
      opacity: 0.8;
    }
  }
`;
export const ModalContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding: 12px 16px;
`;
export const ImageHolder = styled.div`
  width: 100%;
  position: relative;
  height: 185px;
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
export const ContentBlock = styled.div`
  margin: 10px 0;
  p {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 14px;
  }
`;
export const AddWishListButton = styled.button`
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
export const NumberInput = styled.input`
  padding: 8px 10px;
  max-width: 120px;
  margin-right: 15px;
  border-radius: 8px;
  border: 1px solid #9a9a9a;
`;

export const EventDetails = ({ detailData }: any) => {
  return (
    <>
      <p>
        <b>Event name:</b> {detailData.name}
      </p>
      <p>
        <b>Summary:</b> {detailData.summary}
      </p>
      <p>
        <b>Date and time:</b> {detailData.start_date} {detailData.start_time}
      </p>
      <p>
        <b>Location: </b>
        {detailData.primary_venue.address.localized_area_display}
      </p>
      <p>
        <b>Ticket price: </b>
        {detailData.ticket_availability.maximum_ticket_price.display}
      </p>
    </>
  );
};
