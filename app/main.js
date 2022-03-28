const dotenv = require('dotenv');

const { server } = require('./server');
const { scanImages } = require('./images');

dotenv.config();
const CONTENT_DIR = process.env.CONTENT_DIR;
const PORT = process.env.PORT;

async function main() {
    const images = await scanImages(CONTENT_DIR);
    server.init(CONTENT_DIR, images, PORT);
    console.log(
        `| Server has been init with the following settings`,
        `\n|\tport: ${PORT}`,
        `\n|\tcontentDir: ${CONTENT_DIR}`
    );
}

main();