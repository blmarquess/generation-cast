// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const { NEXT_PUBLIC_API_KEY, NEXT_PUBLIC_YT_CHANEL_ID } = process.env

const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${NEXT_PUBLIC_API_KEY}&channelId=${NEXT_PUBLIC_YT_CHANEL_ID}&part=snippet,id&order=date&maxResults=50`;

type Data = {
  dataYT: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const dataYT = await fetch(API_URL).then(res => res.json())
    res.status(200).json({ dataYT: dataYT })
  } else {
    res.status(404).end()
  }

}
