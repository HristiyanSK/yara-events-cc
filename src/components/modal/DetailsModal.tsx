import { useCallback, useState } from "react";
import { useMainContext } from "../../context/MainContext";
import { toast, ToastContainer } from "react-toastify";
import { DataItem } from "../../types/types";
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
  showTicketBlock,
}: {
  detailData: DataItem;
  showTicketBlock?: boolean;
}): JSX.Element | null {
  const [ticketCount, setTicketCount] = useState(0);
  const { setDetailsModalData, setWishListItems, wishListItems } =
    useMainContext();

  const handleAddWishList = useCallback(() => {
    if (ticketCount && ticketCount > 0) {
      const foundIndex = wishListItems.findIndex(
        (item: DataItem) => item.id === detailData.id
      );
      if (foundIndex !== -1) {
        toast.error("Event already added to the list!", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } else {
        setWishListItems([
          ...wishListItems,
          { ...detailData, ticketCount: ticketCount },
        ]);
        toast.success(
          "Successfully added to wish list! Please check the wish list!",
          {
            position: toast.POSITION.BOTTOM_CENTER,
          }
        );
      }
    } else {
      toast.error("Please select number of tickets first!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  }, [detailData, setWishListItems, ticketCount, wishListItems]);

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
            {showTicketBlock && (
              <div>
                <NumberInput
                  value={ticketCount}
                  min={0}
                  onChange={(e) => setTicketCount(parseInt(e.target.value))}
                  placeholder="Ticket count"
                  type="number"
                />
                <AddWishListButton type="button" onClick={handleAddWishList}>
                  ♥ Add to wish list
                </AddWishListButton>
              </div>
            )}
          </ContentBlock>
        </ModalContent>
        <ToastContainer />
      </Wrapper>
    </ModalHolder>
  );
}
