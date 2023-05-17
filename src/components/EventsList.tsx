import { styled } from "styled-components";
import { useMainContext } from "../context/MainContext";

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

const ItemHolder = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 5px 30px 5px rgba(0, 0, 0, 0.075);
  p {
    font-size: 14px;
    font-weight: bold;
    color: #4d4d4d;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
const ErrorBlock = styled.div`
  font-size: 14px;
  color: red;
  padding: 10px 16px;
`;
const ImageHolder = styled.div`
  width: 120px;
  min-width: 120px;
  position: relative;
  height: 70px;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  > img {
    height: 100%;
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    margin: auto auto;
  }
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
          <ItemHolder key={item.id} onClick={() => setDetailsModalData(item)}>
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
