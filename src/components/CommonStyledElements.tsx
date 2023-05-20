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

export const NoItemsText = styled.div`
  margin-bottom: 12px;
  margin-top: 0;
  margin-top: 22px;
  font-size: 14px;
  font-style: italic;
  color: #83878b;
`;
export const ListBlock = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-flow: column nowrap;
  margin-top: 20px;
`;
export const ItemHolder = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  padding: 12px 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 5px 30px 5px rgba(0, 0, 0, 0.1);
  p:nth-child(1) {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #4d4d4d;
  }
  p:nth-child(2) {
    margin: 0;
    font-size: 14px;
    color: #797878;
  }
`;

export const ImageHolder = styled.div`
  width: 120px;
  min-width: 120px;
  position: relative;
  height: 70px;
  border-radius: 4px;
  overflow: hidden;
  background: #f1f1f1;
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
