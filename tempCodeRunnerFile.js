<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canvas API Example</title>
</head>
<body>
    <canvas id="myCanvas" width="500" height="400" style="border:1px solid #000;"></canvas>

    <script>
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d'); // Get 2D rendering context
    </script>
</body>
</html>
