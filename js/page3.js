/**
 * Created by Liam on 2016/8/2.
 */
//ҳ�涯��ʵ��
(function(window,$,_){
    gModel[2].Animate=gModel[2].Animate||{};
    const removeEvent = gModel[0].removeEvent
    var Page3=gModel[2].Animate.BasePage.extend({
        initHtml:function(){
            var html='<div class="animate-item g-template-doorpage" style="background-image:url(\''+this.data.Imgs[0]+'\');background-position:center;"></div>';
            this.$curContainer=$(html);

            $(this.wrapp).append(this.$curContainer);
        },
        addEventDeleget:function(){
            $("#animate-wrap").data("doornext",this.data.nextpage);
            var addEvent=gModel[0].addEvent;
            var that=this;
            var el=this.$curContainer[0];

            if(el){
                if(gModel[0].ua.canTouch){
                    addEvent(el, "touchstart", that.down, false);
                    addEvent(el, "touchmove", that.move, false);
                    addEvent(el, "touchend", that.up, false);
                }
                else{
                    addEvent(el, "mousedown", that.down, false);
                    addEvent(el, "mousemove", that.move, false);
                    addEvent(el, "mouseup", that.up, false);
                }
            }
        },
        removeEventDeleget:function(){
            $("#animate-wrap").data("nextpage","");
            $("#animate-wrap").data("doornext","");
            var that=this;
            var el=this.$curContainer[0];
            if(el){
                if(gModel[0].ua.canTouch){
                    removeEvent(el, "touchstart", that.down, false);
                    removeEvent(el, "touchmove", that.move, false);
                    removeEvent(el, "touchend", that.up, false);
                }
                else{
                    removeEvent(el, "mousedown", that.down, false);
                    removeEvent(el, "mousemove", that.move, false);
                    removeEvent(el, "mouseup", that.up, false);
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

            $(".closedoor").animate({"opacity":0},1000);
            $(".opendoor").animate({"opacity":1},1000,function(){
                $(".g-template-doorpage").animate({"opacity": 0}, 1000,function(){
                    var doorNext=parseInt($("#animate-wrap").data("doornext"));
                    if(doorNext){
                        gModel[1].goto(doorNext);
                    }
                });
            });

            var curMedia=document.getElementById("closeDoor");
            if(curMedia){
                curMedia.play();
            }
        },
        showInner:function(){
            this.removeEventDeleget();

            $("audio").each(function(){
                this.pause();
            });

            var html="";
            html+='<div class="doorbk"></div>';
            html+='<div class="closedoor"  style="background-image:url(\''+this.data.Imgs[1]+'\');background-position:center;"></div>';
            html+='<div class="closedoor-point"  style="background-image:url(\''+this.data.Imgs[2]+'\');background-position:center;"></div>';
            html+='<div class="wordd">关上门试试</div>';
            html+='<div class="opendoor"  style="background-image:url(\''+this.data.Imgs[3]+'\');background-position:center;"></div>';
            this.$curContainer.html(html);
            this.initPosition();

            this.addEventDeleget();
        },
        initPosition:function(){

        },
        doing:function(){
            this.showInner();
        }
    });
    gModel[2].Animate.GoouuTempletePage3=Page3;
})(window,jQuery,window._);