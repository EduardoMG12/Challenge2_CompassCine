import app  from './config/server';

const PORT = process.env.PORT;
const dbHost = 'localhost';

app.get('/', (req, res) => {
	res.send('Hello World, route test project configured!');
});

app.listen(PORT, () => console.log(`

🚀🚀 Server running on port ${PORT} 🚀🚀🚀
  🔗 https://${dbHost}:${PORT}/

`));