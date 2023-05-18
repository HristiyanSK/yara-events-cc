import { BlockTitle } from "../components/CommonStyledElements";
import { useMainContext } from "../context/MainContext";
import { ItemHolder, ImageHolder } from "../components/CommonStyledElements";
import { useMemo } from "react";

export default function WishList(): JSX.Element | null {
  const { wishListItems, setDetailsModalData } = useMainContext();

  const items = useMemo(() => {
    return wishListItems;
  }, [wishListItems]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      <BlockTitle>Wish List ♥</BlockTitle>
      {items.map((item: any) => {
        return (
          <ItemHolder
            key={item.eventcode}
            onClick={() => setDetailsModalData(item)}
          >
            <ImageHolder>
              <img src={item.coinlogo} alt="item_img" />
            </ImageHolder>
            <p>{item.description}</p>
          </ItemHolder>
        );
      })}
    </>
  );
}
