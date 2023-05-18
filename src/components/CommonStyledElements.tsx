import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const BlockTitle = styled.h1`
  margin-bottom: 50px;
  font-size: 42px;
  color: #fa832f;
  font-weight: 800;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #456ef1;
  font-size: 16px;
  font-weight: 600;
`;

export const ItemHolder = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  padding: 8px 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 5px 30px 5px rgba(0, 0, 0, 0.075);
  p {
    font-size: 14px;
    font-weight: bold;
    color: #4d4d4d;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const ImageHolder = styled.div`
  width: 120px;
  min-width: 120px;
  position: relative;
  height: 70px;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  > img {
    height: 100%;
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    margin: auto auto;
  }
`;
