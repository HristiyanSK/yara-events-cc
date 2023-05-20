import { useState } from "react";

import CreateEventForm from "../components/CreateEventsForm";
import {
  ItemHolder,
  ImageHolder,
  ListBlock,
  BlockTitle,
  StyledLink,
} from "../components/CommonStyledElements";
import { EventItem } from "../types/types";

export default function MyCreatedEvents(): JSX.Element {
  const [eventList, setEventList] = useState<EventItem[]>([]);
  return (
    <>
      <BlockTitle>My Created Events</BlockTitle>
      <StyledLink to="/">‹ Back to home</StyledLink>
      <CreateEventForm setEventList={setEventList} />
      <ListBlock>
        {eventList.map(({ id, name, date, location, picture, ticket }) => (
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
        ))}
      </ListBlock>
    </>
  );
}
