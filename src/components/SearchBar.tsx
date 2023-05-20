import { useCallback } from "react";
import styled from "styled-components";
import { useMainContext } from "../context/MainContext";

const InputHolder = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
`;
const StyledInput = styled.input`
  border: none;
  padding: 12px 16px;
  background: #f1f1f1;
  border-radius: 10px;
  width: 100%;
`;

export default function SearchBar(): JSX.Element {
  const { setQuery, query } = useMainContext();
  const handleSearchByName = useCallback(
    (e: any) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );
  return (
    <InputHolder>
      <StyledInput
        value={query}
        type="text"
        placeholder="Search by name..."
        onChange={handleSearchByName}
      />
    </InputHolder>
  );
}
