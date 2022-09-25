import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await fetch("https://catnip.metrobots.xyz/lists");
  const data = await response.json();

  var filteredData = [];

  data.forEach((l) => {
    if (l.state === 0) {
      filteredData.push(l);
    }
  });

  res.status(200).json(filteredData);
};
