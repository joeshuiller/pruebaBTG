module.exports = (req, res, next) => {
  if (req.method === 'POST') {
    req.method = 'GET';
  }

  if (req.url === '/api/auth/special') {
    res.json(generateResponse());
    return;
  }

  next();
};

function generateResponse() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let weeks = [];
  let days = [];

  for (let i = 0; i < 7; i++) {
    const dayOfWeek = daysOfWeek[i];
    days.push({title: dayOfWeek});
  }

  for (let i = 1; i <= 52; i++) {
    weeks.push({title: `Week ${i}`, days});
  }

  return {
    weeks
  };
}
