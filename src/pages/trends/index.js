import { useState, useEffect } from "react";
import Head from "next/head";
import Videos from "../../components/Videos";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useRouter } from "next/router";

import { fetchFromAPI } from "../../utils/fetchFromAPI";

export default function Trends() {
  const [videos, setVideos] = useState([]);
  const { setLocation } = useContext(AppContext);
  const { pathname } = useRouter();
  setLocation(pathname);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=trends`).then((data) =>
      setVideos(data.items)
    );
  }, []);

  return (
    <div className="">
      <Head>
        <title>Trends</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-wrap justify-around ">
        <div className="flex flex-col w-full">
          <div className="w-full">
            <Videos videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}
