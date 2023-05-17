import { styled } from "styled-components";
import { BlockTitle } from "../components/CommonStyledElements";

const ImageHolder = styled.div`
  width: 120px;
  min-width: 120px;
  position: relative;
  height: 70px;
  border-radius: 4px;
  overflow: hidden;
  background: #f1f1f1;
  > img {
    width: 100%;
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    margin: auto auto;
  }
`;

export default function EventDetails(): JSX.Element {
  return (
    <>
      <BlockTitle>Event Details</BlockTitle>
      <div>
        <ImageHolder>
          <img src="" alt="product_detail_image" />
        </ImageHolder>
      </div>
    </>
  );
}
