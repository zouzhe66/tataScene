/**
 * Created by Liam on 2016/8/2.
 */
//ҳ�涯��ʵ��
(function(window,$,_){
    gModel[2].Animate=gModel[2].Animate||{};
    var SingleImgPage=gModel[2].Animate.BasePage.extend({
        initHtml:function(){//��ʼ��ҳ��
            var html='<div class="animate-item g-template-single" style="background-image:url(\''+this.data.Imgs[0]+'\');background-position:center;"></div>';
            this.$curContainer=$(html);
            $(this.wrapp).append(this.$curContainer);
        },
        doing:function(){//���ص�ҳ����
            $("#swap-up").show();
            $(".swap-up-bg").show();
            $("video").each(function(){
                this.pause();
            });
        }
    });
    gModel[2].Animate.GoouuPageSingleImgPage1=SingleImgPage;
})(window,jQuery,window._);