import { useCallback, useMemo } from "react";
import { useMainContext } from "../context/MainContext";
import {
  ItemHolder,
  ImageHolder,
  BlockTitle,
  NoItemsText,
  StyledLink,
  ListBlock,
} from "../components/CommonStyledElements";
import styled from "styled-components";
import DetailModalComp from "../components/DetailModalComponent";

const IconButton = styled.div`
  color: #fc6d6d;
  font-size: 32px;
`;

function List({ items }: any) {
  const { setDetailsModalData, setWishListItems } = useMainContext();
  const handleRemoveFromFavs = useCallback(
    (id: string) => {
      setWishListItems((witems) =>
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

export default function WishList(): JSX.Element | null {
  const { wishListItems, detailsModalData } = useMainContext();

  const items = useMemo(() => {
    return wishListItems;
  }, [wishListItems]);

  return (
    <>
      <BlockTitle>Wish List</BlockTitle>
      <StyledLink to="/">‹ Back to home</StyledLink>
      {detailsModalData ? (
        <DetailModalComp detailData={detailsModalData} />
      ) : null}

      {items?.length > 0 ? (
        <List items={items} />
      ) : (
        <NoItemsText>There are no items in the list</NoItemsText>
      )}
    </>
  );
}
