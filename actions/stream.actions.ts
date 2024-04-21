"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";
const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!apiKey) throw new Error("Missing Stream API key");

  if (!user) throw new Error("No user found");

  if (!apiSecret) throw new Error("Missing Stream API secret");

  const client = new StreamClient(apiKey, apiSecret);

  const exp = Math.round(new Date().getTime() / 1000) + 3600;

  const issued = Math.floor(new Date().getTime() / 1000);

  const token = client.createToken(user.id, exp, issued);

  return token;
};
