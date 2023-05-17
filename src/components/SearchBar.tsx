import { styled } from "styled-components";

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
  return (
    <InputHolder>
      <StyledInput type="text" placeholder="Search by name..." />
    </InputHolder>
  );
}
