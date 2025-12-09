import type { NextApiRequest, NextApiResponse } from 'next';
import { generateServerName } from '../../lib/openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const name = await generateServerName(req.body);
      res.status(200).json({ name });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Fehler bei der Namensgenerierung' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
