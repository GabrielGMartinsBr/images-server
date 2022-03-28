const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

async function scanImages(contentDir) {
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

module.exports.scanImages = scanImages;