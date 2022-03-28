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
        init(contentDir, images) {
            setupRoutes(contentDir, images);
            app.listen(8080);
        }
    }
}

module.exports.server = server();