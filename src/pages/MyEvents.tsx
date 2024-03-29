import { useState } from "react";

import CreateEventForm from "../components/forms/CreateEventsForm";
import {
  ItemHolder,
  ImageHolder,
  ListBlock,
  BlockTitle,
  StyledLink,
  BlockSubtitle,
  NoItemsText,
  IconButton,
} from "../components/ui_elements/CommonStyledElements";
import { EventItem } from "../types/types";
import { styled } from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-right: 10px;
`;

export default function MyEvents(): JSX.Element {
  const [eventList, setEventList] = useState<EventItem[]>([]);

  const handleDelete = (id: string) => {
    setEventList((prevstate) => prevstate.filter((item) => item.id !== id));
  };

  return (
    <>
      <BlockTitle>My Created Events</BlockTitle>
      <BlockSubtitle>Create new event</BlockSubtitle>
      <StyledLink to="/">‹ Back to home</StyledLink>
      <CreateEventForm setEventList={setEventList} />
      <BlockSubtitle>Events:</BlockSubtitle>
      <ListBlock>
        {eventList.length > 0 ? (
          eventList.map(({ id, name, date, location, picture, ticket }) => (
            <ItemHolder key={id}>
              <ImageHolder>
                {picture && (
                  <img src={URL.createObjectURL(picture)} alt="Event Preview" />
                )}
              </ImageHolder>
              <FlexWrapper>
                <div>
                  <p>Name: {name}</p>
                  <p>Date: {date}</p>
                  <p>Location: {location}</p>
                  <p>Ticket price: {ticket}</p>
                </div>
                <IconButton
                  onClick={() => handleDelete(id)}
                  style={{ fontWeight: "bolder" }}
                >
                  ×
                </IconButton>
              </FlexWrapper>
            </ItemHolder>
          ))
        ) : (
          <NoItemsText mt="0px">
            There are no personal/created events in the list, please create from
            the form above
          </NoItemsText>
        )}
      </ListBlock>
    </>
  );
}
