import { useCallback } from "react";
import { useMainContext } from "../../context/MainContext";
import { ItemHolder, ImageHolder, ListBlock } from "../UI/CommonStyledElements";
import styled from "styled-components";

const IconButton = styled.div`
  color: #fc6d6d;
  font-size: 32px;
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
            onClick={() => {
              setDetailsModalData(item);
            }}
          >
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
              <p>{item.summary}</p>
            </div>
          </ItemHolder>
        );
      })}
    </ListBlock>
  );
}
