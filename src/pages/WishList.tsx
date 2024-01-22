import { useMemo } from "react";
import { useMainContext } from "../context/MainContext";
import {
  BlockTitle,
  NoItemsText,
  StyledLink,
} from "../components/ui_elements/CommonStyledElements";
import List from "../components/eventsList/ListComponent";
import DetailModalComp from "../components/modal/DetailsModal";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function WishList(): JSX.Element | null {
  const { wishListItems, detailsModalData } = useMainContext();

  const items = useMemo(() => {
    return wishListItems;
  }, [wishListItems]);

  return (
    <>
      <BlockTitle>Wish List</BlockTitle>
      <FlexWrapper>
        <StyledLink to="/">‹ Back to home</StyledLink>
      </FlexWrapper>
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
