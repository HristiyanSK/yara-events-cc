import { useCallback } from "react";
import { useMainContext } from "../../context/MainContext";
import { ItemHolder, ImageHolder, ListBlock } from "../UI/CommonStyledElements";
import styled from "styled-components";

const IconButton = styled.div`
  color: #fc6d6d;
  font-size: 32px;
  &:hover {
    color: #cd5050;
  }
`;
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
export default function List({ items }: any): JSX.Element {
  const { setDetailsModalData, setWishListItems } = useMainContext();
  const handleRemoveFromFavs = useCallback(
    (id: string) => {
      setWishListItems((witems: any) =>
        witems.filter((item: any) => item.id !== id)
      );
    },
    [setWishListItems]
  );
  return (
    <ListBlock>
      {items.map((item: any) => {
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