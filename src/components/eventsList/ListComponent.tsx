import { useCallback } from "react";
import { useMainContext } from "../../context/MainContext";
import {
  ItemHolder,
  ImageHolder,
  ListBlock,
  IconButton,
} from "../ui_elements/CommonStyledElements";
import styled from "styled-components";
import { DataItem } from "../../types/types";

const TicketHintBlock = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #4f4f4f;
  width: 115px;
  text-align: right;
`;
const FlexJustified = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export default function List({ items }: { items: DataItem[] }): JSX.Element {
  const { setDetailsModalData, setWishListItems } = useMainContext();

  // Can we remove the useCallback hook here? Why? Can we set the state direclty(invoke it on onClick)
  const handleRemoveFromFavs = useCallback(
    (id: string) => {
      setWishListItems((witems: DataItem[]) =>
        witems.filter((item: DataItem) => item.id !== id)
      );
    },
    [setWishListItems]
  );

  // Can we do some separations here? Moduling?
  // What "hoisting" is?
  // Props forwarding? Props to styled component
  return (
    <ListBlock>
      {items.map((item: DataItem) => {
        return (
          <ItemHolder
            key={item.id}
            style={{ justifyContent: "space-between" }}
            onClick={() => {
              setDetailsModalData(item);
            }}
          >
            <FlexJustified>
              <IconButton
                onClick={(e) => {
                  handleRemoveFromFavs(item.id);
                  // click event is stopped on the current element
                  e.stopPropagation();
                }}
              >
                ♥
              </IconButton>
              <ImageHolder>
                <img src={item.image.url} alt="item_img" />
              </ImageHolder>
              <div>
                <p>{item.name}</p>
                <p>
                  {item.start_date} {item.start_time}
                </p>
                <p>{item.primary_venue.address.localized_area_display}</p>
              </div>
            </FlexJustified>
            <TicketHintBlock>
              {item.ticketCount} ×{" "}
              {item.ticket_availability.maximum_ticket_price.display}
            </TicketHintBlock>
          </ItemHolder>
        );
      })}
    </ListBlock>
  );
}
