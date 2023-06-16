/**
 * Created by Liam on 2016/8/2.
 */
//ҳ�涯��ʵ��
(function(window,$,_){
    gModel[2].Animate=gModel[2].Animate||{};
    var SingleImgPage=gModel[2].Animate.BasePage.extend({
        initHtml:function(){//��ʼ��ҳ��
            var html='<div class="animate-item g-template-page-input" style="background-image:url(\''+this.data.Imgs[0]+'\');background-position:center;"></div>';
            this.$curContainer=$(html);
            $(this.wrapp).append(this.$curContainer);
        },
        addEventDeleget:function(){
            var addEvent=gModel[0].addEvent;
            var that=this;
            var el=this.$curContainer.find(".btnc")[0];
            var el1=this.$curContainer.find("#ccBtn")[0];

            if(el){
                if(gModel[0].ua.canTouch){
                    addEvent(el, "touchstart", that.down, false);
                    addEvent(el, "touchmove", that.move, false);
                    addEvent(el, "touchend", that.up, false);

                    addEvent(el1, "touchstart", that.down1, false);
                    addEvent(el1, "touchmove", that.move1, false);
                    addEvent(el1, "touchend", that.up1, false);
                }
                else{
                    addEvent(el, "mousedown", that.down, false);
                    addEvent(el, "mousemove", that.move, false);
                    addEvent(el, "mouseup", that.up, false);

                    addEvent(el1, "mousedown", that.down1, false);
                    addEvent(el1, "mousemove", that.move1, false);
                    addEvent(el1, "mouseup", that.up1, false);
                }
            }
        },
        removeEventDeleget:function(){
            var that=this;
            var el=this.$curContainer.find(".btnc")[0];
            var el1=this.$curContainer.find("#ccBtn")[0];
            if(el){
                if(gModel[0].ua.canTouch){
                    removeEvent(el, "touchstart", that.down, false);
                    removeEvent(el, "touchmove", that.move, false);
                    removeEvent(el, "touchend", that.up, false);

                    removeEvent(el1, "touchstart", that.down1, false);
                    removeEvent(el1, "touchmove", that.move1, false);
                    removeEvent(el1, "touchend", that.up1, false);
                }
                else{
                    removeEvent(el, "mousedown", that.down, false);
                    removeEvent(el, "mousemove", that.move, false);
                    removeEvent(el, "mouseup", that.up, false);

                    removeEvent(el1, "mousedown", that.down1, false);
                    removeEvent(el1, "mousemove", that.move1, false);
                    removeEvent(el1, "mouseup", that.up1, false);
                }
            }

        },
        down:function(e){
            e.preventDefault();
            e.stopPropagation();
        },
        move:function(e){
            e.preventDefault();
            e.stopPropagation();
        },
        up:function(e){
            e.preventDefault();
            e.stopPropagation();

            $("#inputFO").show();
        },
        down1:function(e){
            e.preventDefault();
            e.stopPropagation();
        },
        move1:function(e){
            e.preventDefault();
            e.stopPropagation();
        },
        up1:function(e){
            e.preventDefault();
            e.stopPropagation();

            var $that=$(this);
            if($(this).html()=="提交中"){
                return;
            }
            var name=$("#name").val();
            var tel=$("#tel").val();
            if(!name){
                alert('请填写您的姓名!');
                return;
            }
            if(!tel){
                alert('请填写您的电话或手机号');
                return;
            }

            var ret=/^0\d{2,3}-?\d{7,8}$/;
            var reb=/(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
            if(tel.match(ret)==null && tel.match(reb)==null) {
                alert('请填写正确的电话号或手机号！');
                return;
            }

            $.ajax({
                type:"post",
                beforeSend:function(){
                    $that.html("提交中");
                },
                url:window.postUrl,
                data:{umobile:tel,uname:name},
                success:function(d){
                    if(d==1){
                        alert('报名成功');
                        $("#inputFO").hide();
                    }
                },
                error:function(){
                    alert('提交失败');
                },
                complete:function(){
                    $that.html("提交");
                }
            });
        },
        showInner:function(){
            this.removeEventDeleget();
            var html="";
            html+='<div class="btnc"  style="background-image:url(\''+this.data.Imgs[1]+'\');background-position:center;"></div>';
            html+='<div id="inputFO" class="input-form" style="display:none;">' ;
            html+='<div class="title"><div>报名享更多优惠</div></div>';
            html+='<div class="input-div">';
            html+='<div class="lf">姓名</div>';
            html+='<input type="text" id="name" class="rg" placeholder=""/>';
            html+='</div>';

            html+='<div class="input-div lst">';
            html+='<div class="lf">电话</div>';
            html+='<input type="text" id="tel" class="rg" placeholder=""/>';
            html+='</div>';
            html+='<div id="ccBtn">提交</div>';
            html+='</div>';
            this.$curContainer.html(html);
            this.addEventDeleget();
        },
        doing:function(){
            this.showInner();
        }
    });
    gModel[2].Animate.PageInputPage=SingleImgPage;
})(window,jQuery,window._);