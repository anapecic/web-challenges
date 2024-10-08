import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  dbConnect();
  if (request.method === "GET") {
    const places = await Place.find();
    response.status(200).json(places);
  }
  if (request.method === "POST") {
    const place = request.body;
    await Place.create(place);
    response.status(201).json({ status: "created new place" });
  }
}
