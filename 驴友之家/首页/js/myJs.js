// 添加图片
//addPic(容器id,图片数组,需要分的列,链接,图片相对路径 )
function addPic(id,array,count,link,load) {
    var pContainer=document.getElementById(id);
    pContainer.style.webkitColumnCount=count;
    pContainer.style.columnGap=20+'px';
    for ( var i=0;i<array.length;i++){
        var a=document.createElement("a");
        a.setAttribute("href",link);
        var div=document.createElement("div");
        var img=document.createElement("img");
        var p=document.createElement("p");
        p.innerHTML=array[i].title;
        p.style.textAlign="center";
        img.setAttribute("src",load+"/"+array[i].pic);
        img.style="width:100%;margin-bottom:15px";
        div.appendChild(img);
        div.appendChild(p);
        a.appendChild(div);
        pContainer.appendChild(a);
    }
}
// 随着导航改变内容
// changeNav(导航id,需要改变图片的容器id,id数组)
function changeNav(id1,id2,idArr) {
    var li= $(id1).children();
    for(var i=0;i<li.length;i++){
        var bgChange=(function (i) {
            return function () {
                li.eq(i).css({"background":"lightGray"});
                li.not(li.eq(i)).css({"background":"none"});
                $(idArr[i]).css({"display":"block"});
                $(id2).children().not($(idArr[i])).css({"display":"none"})
            }
        }(i));
        li[i].onmouseover=bgChange;
    }
}