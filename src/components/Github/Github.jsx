import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  //1st way
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-3 bg-gray-500 text-white p-3 text-3xl">
      Github Repositories: {data.public_repos}
      <img src={data.avatar_url} alt="Git picture" width={"300"} />
    </div>
  );
};

export default Github;

//2nd way
export const githubInfoLoaderInfo = async () => {
  const response = await fetch("https://api.github.com/users/faheemameen");
  return response.json();
};
