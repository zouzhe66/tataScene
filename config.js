/**
 * Created by Liam on 2016/8/2.
 */
$("#audio").hide();
$(".loading-logo").html("TATA");
window.requestTime=function(callback,p){
    window.setTimeout(callback, 1000 / p);
};

(function() {
    var pageEnum = {
        GoouuVideo: 1,
        SinglePage1: 2,
        GoouuPage3: 3,
        GoouuPage4: 4
    };
    gModel[1].pageEnum = pageEnum;

    gModel[2].createPage = function(data) {
        gModel[2].preCreatePage(data);
        if (data.PageTypeId == pageEnum.GoouuVideo) {
            return new gModel[2].Animate.GoouuVideo(data);
        } else if (data.PageTypeId == pageEnum.SinglePage1) {
            return new gModel[2].Animate.GoouuPageSingleImgPage1(data);
        } else if (data.PageTypeId == pageEnum.GoouuPage3) {
            return new gModel[2].Animate.GoouuTempletePage3(data);
        }
        else if (data.PageTypeId == pageEnum.GoouuPage4) {
            return new gModel[2].Animate.PageInputPage(data);
        }
        else {
            throw "δ֪ҳ��";
        }
    };

})();
$(document).ready(function(){
    if(gModel[0].ua.canTouch){
        $(document).on("touchstart",".goouu-video",function(e){
            e.preventDefault();e.stopPropagation();
        });
        $(document).on("touchmove",".goouu-video",function(e){
            e.stopPropagation();
        });
        $(document).on("touchend",".goouu-video",function(e){
            e.stopPropagation();
        });

        $(document).on("touchstart",".g-template-page-input",function(e){
            e.stopPropagation();
        });
        $(document).on("touchmove",".g-template-page-input",function(e){
            e.stopPropagation();
        });
        $(document).on("touchend",".g-template-page-input",function(e){
            e.stopPropagation();
        });
    }else {
        $(document).on("mousedown",".goouu-video",function(e){
            e.stopPropagation();
        });
        $(document).on("mousemove",".goouu-video",function(e){
            e.stopPropagation();
        });
        $(document).on("mouseup",".goouu-video",function(e){
            e.stopPropagation();
        });

        $(document).on("mousedown",".g-template-page-input",function(e){
            e.stopPropagation();
        });
        $(document).on("mousemove",".g-template-page-input",function(e){
            e.stopPropagation();
        });
        $(document).on("mouseup",".g-template-page-input",function(e){
            e.stopPropagation();
        });
    }
});