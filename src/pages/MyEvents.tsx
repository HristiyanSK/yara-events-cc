import { useState } from "react";

import CreateEventForm from "../components/CreateEventsForm";
import {
  ItemHolder,
  ImageHolder,
  ListBlock,
  BlockTitle,
  StyledLink,
  BlockSubtitle,
  NoItemsText,
} from "../components/UI/CommonStyledElements";
import { EventItem } from "../types/types";

export default function MyEvents(): JSX.Element {
  const [eventList, setEventList] = useState<EventItem[]>([]);
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
              <div>
                <p>Name: {name}</p>
                <p>Date: {date}</p>
                <p>Location: {location}</p>
                <p>Ticket price: {ticket}</p>
              </div>
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
