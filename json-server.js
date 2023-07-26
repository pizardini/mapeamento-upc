const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');

server.use(bodyParser.json());

server.use(middlewares);

server.get('/people', (req, res) => {
  let response = router.db.get('people').value();
  let search = String(req.query.search);

  if (search) {
    response = response.filter((value) => {
      return value.name.toLowerCase().includes(search.toLowerCase());
    });
  }
  res.json(response);
});

server.get('/people2', (req, res) => {
  let response = router.db.get('people').value();
  res.json(response);
});

server.use((req, res, next) => {
  if (req.headers.authorization || req.url === "/login") {
    next();
  } else {
    return res.status(401).json({
      status: "auth_error",
      message: "Erro de autenticação",
    });
  }
});

server.post('/login', (req, res) => {
  let { login, password } = req.body;

  if (login === "admin" && password === "admin123") {
    console.log("Login bem-sucedido:", login);
    return res.status(200).json({ auth: true });
  } else {
    console.log("Login falhou:", login);
    return res.status(401).json({ auth: false });
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
