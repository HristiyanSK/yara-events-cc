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
  // filtereddata = data.filter((dataitem) => dataitem.name.includes(searchedValue))
  const handleSearchByName = useCallback((e: any) => {}, []);
  return (
    <InputHolder>
      <StyledInput
        // value={searchedValue}
        type="text"
        placeholder="Search by name..."
        onClick={handleSearchByName}
      />
    </InputHolder>
  );
}
