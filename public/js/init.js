// 标题
document.title = document.getElementById("md-title").innerHTML;
// 正文
document.getElementById("md-view").innerHTML = marked.parse(document.getElementById("md-view").innerHTML);

document.getElementById("loading").style = "display:none";
document.getElementById("md-view").style = "display:block";