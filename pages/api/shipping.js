import { calculateShipping } from '@/lib/shipping';

/**
 * API route for calculating shipping costs. Expects a JSON body with
 * an array of cart items (each with a `quantity` field). Returns a JSON
 * object containing the calculated cost. If the request method is not
 * POST or if input is invalid, returns a 400 status.
 */
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { items } = req.body || {};
  if (!Array.isArray(items)) {
    return res.status(400).json({ error: 'Invalid payload' });
  }
  const cost = calculateShipping(items);
  return res.status(200).json({ cost });
}
