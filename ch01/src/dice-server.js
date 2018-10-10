const http = require('http');
const ctype = { 'Content-Type': 'text/html;charset=utf-8'};

const PORT_NUM = 7890;

// 웹 서버 실행
const server = http.createServer(handler);
server.listen(PORT_NUM);

// 서버에 접근이 있을 때 처리
function handler(request, response) {
    const url = request.url;

    // 최상위 페이지일 때
    if (url === '/' || url === '/index.html') {
        showIndexPage(request, response);
        return;
    }

    // 주사위 페이지일 때
    if (url.substr(0, 6) === '/dice/') {
        showDicePage(request, response);
        return;
    }

    // 그밖의 경우
    response.writeHead(404, ctype);
    response.end('404 not found');
}

function showIndexPage(request, response) {
    response.writeHead(200, ctype);
    const html = '<h1>주사위 페이지 안내</h1>\n' +
        '<p><a href="/dice/6">6면체 주사위</a></p>' +
        '<p><a href="/dice/12">12면체 주사위</a></p>';
    response.end(html);
}

function showDicePage(request, response) {
    response.writeHead(200, ctype);
    const urlsplit = request.url.split('/');
    const num = parseInt(urlsplit[2]);

    const rnd = Math.floor(Math.random() * num) + 1;
    response.end('<p style="font-size:72px;">' + rnd + '</p>');
}