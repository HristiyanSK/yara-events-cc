import { useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import EventsList from "../components/events-list/EventsList";
import { BlockTitle, StyledLink } from "../components/UI/CommonStyledElements";
import { useMainContext } from "../context/MainContext";
import DetailsModal from "../components/modal/DetailsModal";
import styled from "styled-components";

const LinksHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  margin-bottom: 12px;
`;

export default function HomePage(): JSX.Element {
  const { detailsModalData, setData, setError } = useMainContext();

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
  }, [setData, setError]);

  return (
    <>
      <BlockTitle>Events list</BlockTitle>
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
