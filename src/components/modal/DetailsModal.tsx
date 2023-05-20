import { useMainContext } from "../../context/MainContext";
import { toast, ToastContainer } from "react-toastify";
import {
  EventDetails,
  ModalHolder,
  Wrapper,
  ModalHeader,
  ModalContent,
  ImageHolder,
  ContentBlock,
  AddWishListButton,
  NumberInput,
} from "./ModalComponents";

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
            <EventDetails detailData={detailData} />
            <div>
              <NumberInput placeholder="Ticket count" type="number" />
              <AddWishListButton
                type="button"
                onClick={() => {
                  setWishListItems([...wishListItems, detailData]);
                  toast.success(
                    "Successfully added to wish list! Please check the wish list!",
                    {
                      position: toast.POSITION.BOTTOM_CENTER,
                    }
                  );
                }}
              >
                ♥ Add to wish list
              </AddWishListButton>
            </div>
          </ContentBlock>
        </ModalContent>
        <ToastContainer />
      </Wrapper>
    </ModalHolder>
  );
}
