<!DOCTYPE html>
<html>
<body onload="sizeChange()">
<script>

function sizeChange() {
    d3.select("g").attr("transform", "scale(" + $("#container").width()/900 + ")");
    $("svg").height($("#container").width()*0.618);
}
</script>
</body>
</html>
