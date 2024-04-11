import app  from './config/server';

const PortUrl = process.env.API_PORT;
const dbHost = 'localhost';

app.get('/', (req, res) => {
	res.send('Hello World, route test project configured!');
});

app.listen(PortUrl, () => console.log(`

🚀🚀 Server running on port ${PortUrl} 🚀🚀🚀
  🔗 http://${dbHost}:${PortUrl}/

`));