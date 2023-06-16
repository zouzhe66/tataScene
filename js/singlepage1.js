/**
 * Created by Liam on 2016/8/2.
 */
//页面动画实现
(function(window,$,_){
    gModel[2].Animate=gModel[2].Animate||{};
    var SingleImgPage=gModel[2].Animate.BasePage.extend({
        initHtml:function(){//初始化页面
            var html='<div class="animate-item g-template-single" style="background-image:url(\''+this.data.Imgs[0]+'\');background-position:center;"></div>';
            this.$curContainer=$(html);
            $(this.wrapp).append(this.$curContainer);
        },
        doing:function(){//加载单页动画
            $("#swap-up").show();
            $(".swap-up-bg").show();
            $("video").each(function(){
                this.pause();
            });
        }
    });
    gModel[2].Animate.GoouuPageSingleImgPage1=SingleImgPage;
})(window,jQuery,window._);