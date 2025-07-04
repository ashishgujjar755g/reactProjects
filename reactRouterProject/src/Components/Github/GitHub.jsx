import React from "react";
import { useLoaderData } from "react-router-dom"
function GitHub() {
  const data = useLoaderData()

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} className="rounded-t-full rounded-b-full "/>
    </div>
  );
}

export default GitHub

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary")

  return response.json()
};
