export default async function handler(req, res) {
  const tgUrl = https://api.telegram.org${req.url.replace('/api', '')};
  
  const response = await fetch(tgUrl, {
    method: req.method,
    headers: { ...req.headers, host: 'api.telegram.org' },
    body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
  });

  res.status(response.status);
  response.headers.forEach((value, key) => res.setHeader(key, value));
  const data = await response.arrayBuffer();
  res.send(Buffer.from(data));
}
