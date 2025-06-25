export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyuvJAglU6TzU-dfkqnxFSu7XhY1HBQMU5hM4x0S8qe51g8RlpNG11X3MJq6m0Vul1f/exec';

  try {
    const response = await fetch(scriptURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    res.status(200).send(text);
  } catch (error) {
    console.error('Relay error:', error);
    res.status(500).json({ error: 'Failed to submit complaint to Google Apps Script.' });
  }
}
