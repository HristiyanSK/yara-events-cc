import { styled } from "styled-components";
import { useMainContext } from "../context/MainContext";
import { ItemHolder, ImageHolder } from "../components/CommonStyledElements";

const ListBlock = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-flow: column nowrap;
  margin-top: 20px;
`;

const NoResults = styled.div`
  font-size: 14px;
  opacity: 0.5;
  margin-top: 12px;
  padding: 0 16px;
  font-style: italic;
`;

const ErrorBlock = styled.div`
  font-size: 14px;
  color: red;
  padding: 10px 16px;
`;

export default function EventsList({
  data,
  error,
}: {
  data: any[] | null;
  error: string | null;
}): JSX.Element | null {
  const { setDetailsModalData } = useMainContext();
  if (error) {
    return <ErrorBlock>{error}</ErrorBlock>;
  }
  if (!data) {
    return null;
  }
  if (data?.length === 0 && !error) {
    return <NoResults>There are no results matching your search</NoResults>;
  }
  return (
    <ListBlock>
      {data.map((item: any) => {
        return (
          <ItemHolder
            key={item.eventcode}
            onClick={() => setDetailsModalData(item)}
          >
            <ImageHolder>
              <img src={item.coinlogo} alt="item_img" />
            </ImageHolder>
            <p>{item.description}</p>
          </ItemHolder>
        );
      })}
    </ListBlock>
  );
}
