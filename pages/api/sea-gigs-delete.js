// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// middleware/authCheck.ts

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req, res) {
  if (req.method !== "DELETE") {
    res.status(400).send({ message: "Only DELETE requests" });
    return;
  }

  if (req.method === "DELETE") {
    const Cosmic = require("cosmicjs");
    const api = Cosmic();
    const bucket = api.bucket({
      slug: "sea-gigs-production",
      write_key: process.env.COSMIC_WRITE_KEY,
    });
    const data = req.body.evt;
    const params = {
      id: data,
    };

    bucket
      .deleteObject(params)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  res.status(200).json({ message: "Deleted" });
}
