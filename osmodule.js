const os=require('os')

//info about current user

const user=os.userInfo()

console.log(user);

//show system up time

const time=os.uptime();
console.log(time)

const info={
    name: os.type(),
    relese: os.release(),
    total: os.totalmem(),
    free: os.freemem()
}
console.log(info);