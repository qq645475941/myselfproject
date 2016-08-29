function verify(id) {
    $(id).blur(function () {
        switch (id){
            case "#user":
            case "#pwd":
            case "#qqNum":
            case "#email":
                if($(id).val().length>=20||$(id).val().length<=0){
                    $(id+'Verify').css({"color":"red"});
                    $(id+'Verify').html("为空或超过20位")
                }else{
                    $(id+'Verify').css({"color":"green"});
                    $(id+'Verify').html("通过")
                }
                break;
            case "#repwd":
                if($(this).val()!=$("#pwd").val()){
                    $(id+'Verify').css({"color":"red"});
                    $(id+'Verify').html("两次输入不一致")
                }else{
                    $(id+'Verify').css({"color":"green"});
                    $(id+'Verify').html("通过")
                }
                break;
            case "#idNum":
                if($(id).val().length<=17){
                    $(id+'Verify').css({"color":"red"});
                    $(id+'Verify').html("输入有误")
                }else{
                    $(id+'Verify').css({"color":"green"});
                    $(id+'Verify').html("通过")
                }
                break;
            case "#phone":
                if($(id).val().length<=10){
                    $(id+'Verify').css({"color":"red"});
                    $(id+'Verify').html("输入有误")
                }else{
                    $(id+'Verify').css({"color":"green"});
                    $(id+'Verify').html("通过")
                }
                break;
        }
    })
}
var ids=["#user","#pwd","#repwd","#idNum","#phone","#qqNum","#email"];
for(var i=0;i<ids.length;i++){
    verify(ids[i]);
}