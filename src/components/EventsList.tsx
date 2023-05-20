import styled from "styled-components";
import { useMainContext } from "../context/MainContext";
import {
  ItemHolder,
  ImageHolder,
  ListBlock,
  NoItemsText,
} from "../components/CommonStyledElements";

const ErrorBlock = styled.div`
  font-size: 14px;
  color: red;
  padding: 10px 16px;
`;

export default function EventsList(): JSX.Element | null {
  const { data, error, setDetailsModalData } = useMainContext();
  if (error) {
    return <ErrorBlock>{error}</ErrorBlock>;
  }
  if (!data) {
    return null;
  }
  if (data?.length === 0 && !error) {
    return <NoItemsText>There are no results matching your search</NoItemsText>;
  }
  return (
    <ListBlock>
      {data.map((item: any) => {
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
