import SearchBar from "../components/SearchBar";
import EventsList from "../components/EventsList";
import { BlockTitle } from "../components/CommonStyledElements";

export default function HomePage(): JSX.Element {
  return (
    <>
      <BlockTitle>Events list</BlockTitle>
      <SearchBar />
      <EventsList />
    </>
  );
}
