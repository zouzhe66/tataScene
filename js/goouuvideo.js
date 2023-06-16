/**
 * Created by liam on 2015/3/19.
 */
(function(window,$,_){
    gModel[2].Animate=gModel[2].Animate||{};
    var GoouuVideo=gModel[2].Animate.BasePage.extend({
        initHtml:function(){//初始化页面
            var i=0;
            var html='<div class="animate-item goouu-video"  style="background-image:url(\''+this.data.Imgs[0]+'\');background-position:center;"></div>';
            html+='</div>';
            this.$curContainer=$(html);
            $(this.wrapp).append(this.$curContainer);
            this.vjsIndex="goouu_video_"+Math.floor(Math.random() * 10000000);
            $("#animate-wrap").data("vjsidx",this.vjsIndex);
            this.dataVjsIndex=this.data.vjsIndex;
        },
        mediaEnd:function() {
            gModel[1].goto(parseInt($("#animate-wrap").data("nextpage")));
        },
        addEventDeleget:function() {
            $("#animate-wrap").data("nextpage", this.data.nextpage);
            $("#animate-wrap").data("mediatime", this.data.mediatime);

            var el = $("#" + this.vjsIndex)[0];
            var addEvent = gModel[0].addEvent;
            var that = this;
            //el.removeAllDelegate=that.removeEventDeleget;
            if (el) {
                addEvent(el, "ended", that.mediaEnd, false);
                if (gModel[0].ua.canTouch) {
                    addEvent(el, "touchstart", that.down, false);
                    addEvent(el, "touchmove", that.move, false);
                    addEvent(el, "touchend", that.up, false);
                }
                else {
                    addEvent(el, "mousedown", that.down, false);
                    addEvent(el, "mousemove", that.move, false);
                    addEvent(el, "mouseup", that.up, false);
                }
            }
        },
        removeEventDeleget:function(){
            $("#animate-wrap").data("nextpage","");
            $("#animate-wrap").data("doornext","");
            $("#animate-wrap").data("mediatime","");
            var that=this;

            var el=$("#"+this.vjsIndex)[0];
            var removeEvent=gModel[0].removeEvent;
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
            this.ismove=false;
            this.istouch=true;
        },
        move:function(e){
            e.preventDefault();
            e.stopPropagation();
            if(this.istouch){
                this.ismove=true;
            }
        },
        up:function(e){
            if(this.ismove){
                e.preventDefault();
                e.stopPropagation();
                return ;
            }
            this.ismove=false;
            this.istouch=false;
            if(e.target){
                if(e.target.paused){
                    e.target.play();
                }
            }
        },
        showInner:function(){
            this.removeEventDeleget();
            var html="";
            html+='<div class="video">';
            html+='<div class="bg-ground"></div>';
            html+='<video class="vid" id="'+this.vjsIndex+'" poster="'+this.data.poster+'" x-webkit-airplay="true" webkit-playsinline="true" preload="auto" src="'+this.data.video+'"></video>';
            html+='</div>';
            this.$curContainer.html(html);
            var thtml=$("#"+this.dataVjsIndex).html();
            var tmp=$(thtml);
            tmp.attr("id",this.vjsIndex);

            var isAndroid = /Android (\d+\.\d+)/.test(navigator.userAgent);
            //
            //if(isAndroid) {
            //    tmp.attr("controls", true);
            //}
            this.$curContainer.find('.video').append(tmp);
            var wWidth=$(window).width();
            var wHeight=$(window).height();

            if (isAndroid) {
                wHeight = wHeight * 1.2;
            }
            var a = wWidth / wHeight;
            var b = this.data.width / this.data.height;
            var $video=$("#"+this.vjsIndex);
            if (a > b) {
                $video.width(wWidth);
            } else {
                $video.height(wHeight);
            }

            if (isAndroid) {
                $video.width($video.width());
                $video.height($video.height());
            }

            var mLeft = "-" + ($video.width() / 2) + "px";
            var mTop = "-" + ($video.height() / 2) + "px";
            $video.css("position", "absolute").css("top", "50%").css("left", "50%")
                .css("margin-left", mLeft).css("margin-top", mTop);
            if (isAndroid) {
            } else {
                $video.css("transform", "scale(1.1)");
            }
            this.initPosition();
            this.addEventDeleget();

        },
        initPosition:function(){

        },
        doing:function() {//加载单页动画
            $("#swap-up").hide();
            $(".swap-up-bg").hide();
            this.showInner();
            var that = this;
            var t = setInterval(function () {
                var tmp = $("#" + that.vjsIndex)[0];
                if (tmp) {
                    if (!tmp.paused) {
                        clearInterval(t);
                    }
                    else {
                        $("#" + that.vjsIndex)[0].play();
                    }
                }
                else{
                    clearInterval(t);
                }
            }, 1000);
        },
        resize:function(){
        }
    });
    gModel[2].Animate.GoouuVideo=GoouuVideo;
})(window,jQuery,window._);


