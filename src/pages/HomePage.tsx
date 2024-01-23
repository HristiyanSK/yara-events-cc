import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/ui_elements/SearchBar";
import EventsList from "../components/eventsList/EventsList";
import {
  BlockTitle,
  StyledLink,
} from "../components/ui_elements/CommonStyledElements";
import { useMainContext } from "../context/MainContext";
import DetailsModal from "../components/modal/DetailsModal";
import styled from "styled-components";

const LinksHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  margin-bottom: 12px;
`;

const TestTitle = styled(BlockTitle)`
  background: lightblue;
`;

export default function HomePage(): JSX.Element {
  const { detailsModalData, setData, setError } = useMainContext();
  const [buttonColorBlue, setButtonColorBlue] = useState<boolean>();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const API_URL =
        "https://www.eventbriteapi.com/v3/destination/city-browse/85923517/?expand.destination_event=primary_venue,image,ticket_availability,saves,event_sales_status,primary_organizer,public_collections&buckets_list=best_of_city_events";
      const API_HEADERS = {
        Authorization: `Bearer BJ6JLJOWQ2HBKXG7BS7A`,
      };
      try {
        const response = await axios.get(API_URL, {
          headers: API_HEADERS,
        });
        setData(response.data.buckets[0].events);
        setError(null);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TestTitle>Events list</TestTitle>
      <BlockTitle>Events list</BlockTitle>
      <button
        onClick={() => setButtonColorBlue(!buttonColorBlue)}
        type="button"
        style={{ background: buttonColorBlue ? "blue" : "" }}
      >
        Button text
      </button>
      <LinksHolder>
        <StyledLink to="/my_created_events">To created events ›</StyledLink>
        <StyledLink to="/wish_list">To wish list ›</StyledLink>
      </LinksHolder>
      <SearchBar />
      <EventsList />
      {detailsModalData && (
        <DetailsModal detailData={detailsModalData} showTicketBlock />
      )}
    </>
  );
}
