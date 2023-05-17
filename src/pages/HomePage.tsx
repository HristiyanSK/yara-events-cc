import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import EventsList from "../components/EventsList";
import { BlockTitle } from "../components/CommonStyledElements";
import { useMainContext } from "../context/MainContext";
import ModalComp from "../components/ModalComponent";

export default function HomePage(): JSX.Element {
  const mockdata = [
    {
      eventcode: "kava-kava-13-release",
      tagnamelist: ["Release"],
      nativename: "Kava 13 release",
      description: "Kava 13 release",
      proof: "",
      truecount: 172,
      fakecount: 17,
      confidence: 91,
      isimportant: 0,
      confirmed: 0,
      eventtime: 1684281600,
      addedtime: 1683590400,
      coincode: "kava",
      coinname: "Kava",
      coinsymbol: "KAVA",
      coinlogo: "https://s1.coincarp.com/logo/1/kava.png?style=36&v=1674094946",
      price_usd: 0.9093,
      price_btc: 0.0000338,
      changerate: -3.34,
      voteflag: 0,
    },
    {
      eventcode: "homer-new-listing-on-lbank",
      tagnamelist: ["Listing"],
      nativename: "New Listing on LBank",
      description:
        "SIMPSON (Homer) will be listed on LBank at 07:00 on May 17, 2023 (UTC)",
      proof: "",
      truecount: 200,
      fakecount: 14,
      confidence: 93,
      isimportant: 0,
      confirmed: 1,
      eventtime: 1684281600,
      addedtime: 1684300931,
      coincode: "homer",
      coinname: "Homer",
      coinsymbol: "SIMPSON",
      coinlogo: "https://s1.coincarp.com/logo/1/homer.png?style=36",
      price_usd: 3.05e-11,
      price_btc: 1.13e-15,
      changerate: 15.97,
      voteflag: 0,
    },
    {
      eventcode: "gays-inu-new-listing-on-mexc-global",
      tagnamelist: ["Listing"],
      nativename: "New Listing on MEXC Global",
      description:
        "Presenting the project for this session of Kickstarter, Gays Inu (LGBTQ).",
      proof: "",
      truecount: 183,
      fakecount: 20,
      confidence: 90,
      isimportant: 0,
      confirmed: 1,
      eventtime: 1684281600,
      addedtime: 1684133614,
      coincode: "gays-inu",
      coinname: "Gays Inu",
      coinsymbol: "LGBTQ",
      coinlogo:
        "https://s1.coincarp.com/logo/1/gays-inu.png?style=36&v=1684218141",
      price_usd: 0.028916,
      price_btc: 0.00000107,
      changerate: -27.71,
      voteflag: 0,
    },
    {
      eventcode: "omax-token-new-listing-on-mexc-global",
      tagnamelist: ["Listing"],
      nativename: "New Listing on MEXC Global",
      description:
        "Presenting the project for this session of Kickstarter, Omax Coin (OMAX).",
      proof: "",
      truecount: 260,
      fakecount: 11,
      confidence: 96,
      isimportant: 0,
      confirmed: 1,
      eventtime: 1684281600,
      addedtime: 1683986453,
      coincode: "omax-token",
      coinname: "Omax Token",
      coinsymbol: "OMAX",
      coinlogo: "https://s1.coincarp.com/logo/1/omax-token.png?style=36",
      price_usd: 0.0005838,
      price_btc: 2.1702e-8,
      changerate: -16.24,
      voteflag: 0,
    },
    {
      eventcode: "p-pizza-new-listing-on-digifinex",
      tagnamelist: ["Listing"],
      nativename: "New Listing on DigiFinex",
      description:
        "DigiFinex will list P Pizza (PPIZZA) on May 17th, 2023 9:00 (UTC)",
      proof: "",
      truecount: 153,
      fakecount: 11,
      confidence: 93,
      isimportant: 0,
      confirmed: 1,
      eventtime: 1684281600,
      addedtime: 1684309463,
      coincode: "p-pizza",
      coinname: "P Pizza",
      coinsymbol: "PPIZZA",
      coinlogo: "https://s1.coincarp.com/logo/1/p-pizza.png?style=36",
      price_usd: 0.00000538,
      price_btc: 2e-10,
      changerate: 8.69,
      voteflag: 0,
    },
    {
      eventcode: "kek-new-listing-on-mexc-global",
      tagnamelist: ["Listing"],
      nativename: "New Listing on MEXC Global",
      description:
        "Presenting the project for this session of Kickstarter, KEK (KEKE).",
      proof: "",
      truecount: 156,
      fakecount: 19,
      confidence: 89,
      isimportant: 0,
      confirmed: 1,
      eventtime: 1684281600,
      addedtime: 1684208947,
      coincode: "kek",
      coinname: "KEK",
      coinsymbol: "KEKE",
      coinlogo: "https://s1.coincarp.com/logo/1/kek.png?style=36",
      price_usd: 1.046e-7,
      price_btc: 3.88855e-12,
      changerate: -30.27,
      voteflag: 0,
    },
    {
      eventcode: "kstarnft-new-listing-on-mexc-global",
      tagnamelist: ["Listing"],
      nativename: "New Listing on MEXC Global",
      description:
        "Presenting the project for this session of Kickstarter, KStarNFT (KNFT).",
      proof: "",
      truecount: 202,
      fakecount: 29,
      confidence: 87,
      isimportant: 0,
      confirmed: 1,
      eventtime: 1684281600,
      addedtime: 1683975095,
      coincode: "kstarnft",
      coinname: "KStarNFT",
      coinsymbol: "KNFT",
      coinlogo:
        "https://s1.coincarp.com/logo/1/kstarnft.png?style=36&v=1684139359",
      price_usd: 0.115,
      price_btc: 0.00000427,
      changerate: -32.35,
      voteflag: 0,
    },
    {
      eventcode: "chain-guardians-ama",
      tagnamelist: ["Other"],
      nativename: "AMA",
      description:
        "Join us on TwitterSpaces for an exclusive AMA...17th May, 1pm UTC  ",
      proof: "",
      truecount: 224,
      fakecount: 30,
      confidence: 88,
      isimportant: 0,
      confirmed: 1,
      eventtime: 1684281600,
      addedtime: 1684281600,
      coincode: "chain-guardians",
      coinname: "Chain Guardians",
      coinsymbol: "CGG",
      coinlogo: "https://s1.coincarp.com/logo/1/chain-guardians.png?style=36",
      price_usd: 0.060181,
      price_btc: 0.00000223,
      changerate: 3.49,
      voteflag: 0,
    },
  ];
  const { detailsModalData } = useMainContext();

  const [data, setData] = useState<any[] | null>(mockdata);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async (): Promise<void> => {
  //     const params = { page: "1", pageSize: "10" };
  //     const headers = {
  //       "X-RapidAPI-Key": "09815d53abmshd14b8dce86da9dfp14543fjsn0798a0e295dc",
  //       "X-RapidAPI-Host": "crypto-events-calendar.p.rapidapi.com",
  //     };
  //     try {
  //       const response = await axios.get(
  //         "https://crypto-events-calendar.p.rapidapi.com/index",
  //         { params, headers }
  //       );
  //       setData(response.data.data?.list[0]?.eventlist);
  //       setError(null);
  //     } catch (error: unknown) {
  //       if (error instanceof Error) {
  //         setError(error.message);
  //       }
  //     }
  //   };
  //   fetchData();
  // }, []);

  console.log("data", data);

  return (
    <>
      <BlockTitle>Events list</BlockTitle>
      <SearchBar />
      <EventsList data={data} error={error} />
      {detailsModalData ? <ModalComp detailData={detailsModalData} /> : null}
    </>
  );
}
