const axios = require('axios');

test('Verificar se a chamada GET retorna os nomes dos líderes', async () => {
  const response = await axios.get('http://localhost:3000/leaders');
  expect(response.status).toBe(200);
  expect(response.data).toBeDefined();
  expect(response.data.leaders).toBeDefined();
  expect(Array.isArray(response.data.leaders)).toBe(true);
  expect(response.data.leaders.length).toBeGreaterThan(0);
  response.data.leaders.forEach(leader => {
    expect(leader.name).toBeDefined();
    expect(typeof leader.name).toBe('string');
  });
});
