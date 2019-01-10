const fs = require('fs')

const data = 'papw,,d,awpddppdPWDA<DPAMAPdmapdmapdw,wd89340402kemmQMQODQPDOSKMDWMQPWO'

const writeStream = fs.createWriteStream('lotsoftext.txt')

for (let i = 0; i < 1e6; i ++) {
    writeStream.write(data, 'base64')
}

writeStream.on('drain', () => console.log('Done!'))