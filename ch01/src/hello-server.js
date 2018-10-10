const http = require('http');

const PORT_NUM = 7890;

// 웹 서버 실행
const server = http.createServer(handler);
server.listen(PORT_NUM);

// 서버에 접근이 있을 때 처리
function handler(request, response) {
    console.log('url:', request.url);
    console.log('method:', request.method);

    // http 헤더 출력
    response.writeHead(200, {'Content-Type': 'text/html'});
    // 본문 출력
    response.end('<h1>Hello, World!</h1>\n');
}