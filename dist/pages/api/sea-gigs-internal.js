"use strict";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// middleware/authCheck.ts
Object.defineProperty(exports, "__esModule", { value: true });
function handler(req, res) {
    if (req.method !== "POST") {
        res.status(400).send({ message: "Only POST requests" });
        return;
    }
    if (req.method === "POST") {
        const Cosmic = require("cosmicjs");
        const api = Cosmic();
        const bucket = api.bucket({
            slug: "sea-gigs-production",
            write_key: process.env.COSMIC_WRITE_KEY,
        });
        console.log(req.body.evt);
        const data = req.body.evt;
        const params = {
            title: data.title,
            type: "gigs",
            metafields: [
                { title: "Gig", key: "gig", type: "text", value: data.title },
                {
                    title: "Key",
                    key: "key",
                    type: "number",
                    value: data.key,
                },
                {
                    title: "Approved",
                    key: "approved",
                    type: "text",
                    value: "yes",
                },
                {
                    title: "Venue",
                    key: "venue",
                    type: "text",
                    value: data.venue,
                },
                {
                    title: "Cost",
                    key: "cost",
                    type: "text",
                    value: data.cost,
                },
                {
                    title: "Year",
                    key: "year",
                    type: "text",
                    value: data.year,
                },
                {
                    title: "Month",
                    key: "month",
                    type: "text",
                    value: data.month,
                },
                {
                    title: "Day",
                    key: "day",
                    type: "text",
                    value: data.day,
                },
                {
                    title: "Time",
                    key: "time",
                    type: "text",
                    value: data.time,
                },
                {
                    title: "Ages",
                    key: "age",
                    type: "text",
                    value: data.age,
                },
                {
                    title: "Accessibility",
                    key: "access",
                    type: "text",
                    value: data.access,
                },
                {
                    title: "Email",
                    key: "email",
                    type: "text",
                    value: data.email,
                },
                {
                    title: "Ticketing",
                    key: "ticketing",
                    type: "text",
                    value: data.ticketing,
                },
                {
                    title: "Additional Info",
                    key: "additional",
                    type: "text",
                    value: data.additional,
                },
            ],
            options: {
                slug_field: true,
            },
        };
        console.log(params);
        bucket
            .addObject(params)
            .then((data) => {
            console.log(data);
        })
            .catch((err) => {
            console.error(err);
        });
    }
    res.status(200).json({ message: "Submitted" });
}
exports.default = handler;
