import { useMemo } from "react";
import { useMainContext } from "../context/MainContext";
import {
  BlockTitle,
  NoItemsText,
  StyledLink,
} from "../components/CommonStyledElements";
import List from "../components/events-list/ListComponent";
import DetailModalComp from "../components/modal/DetailsModal";

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
