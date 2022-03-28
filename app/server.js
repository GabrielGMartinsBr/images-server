const express = require('express');

function server() {
    const app = express();

    function setupRoutes(contentDir, images) {
        app.get('/', (req, res) => {
            res.json(images);
        })

        app.use(express.static(contentDir));
    }

    return {
        init(contentDir, images, port = 8080) {
            setupRoutes(contentDir, images);
            app.listen(port);
        }
    }
}

module.exports.server = server();