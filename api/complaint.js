export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  try {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbyuvJAglU6TzU-dfkqnxFSu7XhY1HBQMU5hM4x0S8qe51g8RlpNG11X3MJq6m0Vul1f/exec';
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    return res.status(200).send(text);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to submit complaint.' });
  }
}
