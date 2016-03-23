<?php

header("service-worker-cache-expiration: ".(time()+10));

?>
<html>
    <head>
        <title>Demo</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <?php echo time();?>
        <script src="app.js" async></script>
    </body>
</html>


