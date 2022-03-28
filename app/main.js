const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

const { server } = require('./server');

const contentDir = '/run/media/home/common/hdd/common-area/vizoo-mandala-images';

async function scanImages() {
    const res = await fs.promises.readdir(contentDir);
    return res.map(src => {
        const absolutePath = path.join(contentDir, src);
        const dimensions = sizeOf(absolutePath);
        return {
            src,
            ...dimensions
        };
    });
}

async function main() {
    const images = await scanImages();
    server.init(contentDir, images);
}

main();