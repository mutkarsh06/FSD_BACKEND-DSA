const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    if(req.url==='/getdata' && req.method==='GET'){ //Get data to fetch
        const data = {name: 'John Doe', age: 30};
        res.end(JSON.stringify(data));
        return;
    }
    else if(req.url==='/setdata' && req.method==='POST'){ //Set Data
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        
        req.on('end', () => {
            const data = JSON.parse(body);
            console.log('Received data:', data);
            res.end(JSON.stringify({message: 'Data received successfully'}));
        });
        return;
    }
});

server.listen(9000, () => {
    console.log('Server is running on port 9000');
});