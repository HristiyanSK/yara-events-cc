import { useMemo } from "react";
import { useMainContext } from "../context/MainContext";
import {
  BlockTitle,
  NoItemsText,
  StyledLink,
} from "../components/UI/CommonStyledElements";
import List from "../components/events-list/ListComponent";
import DetailModalComp from "../components/modal/DetailsModal";
import PrintableComp from "../components/PrintableComp";
import { PDFDownloadLink } from "@react-pdf/renderer";
import styled from "styled-components";

const StyledLinkPDF = styled(PDFDownloadLink)`
  text-decoration: none;
  color: #456ef1;
  font-size: 16px;
  font-weight: 600;
`;
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
        {items?.length > 0 && (
          <StyledLinkPDF
            document={<PrintableComp items={items} />}
            fileName="wish_list.pdf"
          >
            {({ loading }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </StyledLinkPDF>
        )}
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
