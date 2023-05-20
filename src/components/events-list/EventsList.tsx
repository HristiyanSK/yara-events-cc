import { useMemo } from "react";
import styled from "styled-components";
import { useMainContext } from "../../context/MainContext";
import {
  ItemHolder,
  ImageHolder,
  ListBlock,
  NoItemsText,
} from "../CommonStyledElements";

const ErrorBlock = styled.div`
  font-size: 14px;
  color: red;
  padding: 10px 16px;
`;

export default function EventsList(): JSX.Element | null {
  const { data, error, query, setDetailsModalData } = useMainContext();
  const filteredResults = useMemo(() => {
    return data?.filter((i: any) =>
      i.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [data, query]);

  if (error) {
    return <ErrorBlock>{error}</ErrorBlock>;
  }
  if (!filteredResults) {
    return null;
  }
  if (filteredResults?.length === 0 && !error) {
    return <NoItemsText>There are no results matching your search</NoItemsText>;
  }
  return (
    <ListBlock>
      {filteredResults.map((item: any) => {
        return (
          <ItemHolder key={item.id} onClick={() => setDetailsModalData(item)}>
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
