const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/')
        res.end(`welcome to the home page`)
    if(req.url==='/about')
        res.end(`this the about page`)
    if(req.url==='/contact'){
        res.end(`
        <h1>OOPS!</h1>
        <p>the webpage is not there</p>
        <a href='/'>home page</a>`)
    }
})
server.listen(5001)