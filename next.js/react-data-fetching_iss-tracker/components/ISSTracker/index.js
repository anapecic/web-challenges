import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR, { useSWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  const { mutate } = useSWRConfig();
  const {
    data: coords,
    error,
    isLoading,
  } = useSWR(URL, fetcher, { refreshInterval: 6000 });

  function handleRefresh() {
    console.log(coords);
    mutate("/v1/satellites/25544");
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => handleRefresh()}
      />
    </main>
  );
}
