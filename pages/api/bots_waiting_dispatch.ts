import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch("https://catnip.metrobots.xyz/bots");
  const data = await response.json();

  var filteredData = [];

  data.forEach((b) => {
    if (b.state === 0) {
      filteredData.push(b);
    }
  });

  res.status(200).json(filteredData);
};
