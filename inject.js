function insertModeBtn() {
    var style = document.createElement("style");
    style.innerText = `
        .mode_btn {
            transform: scale(0.25);
            transform-origin: right top;
            position: absolute;
            right: 10px;
            top: 10px;
            margin: auto;
            overflow: hidden;
            width: 370px;
            height: 140px;
            border-radius: 140px;
            box-shadow: 0 -4px 4px 2px #999, 0 4px 4px 2px #edf3fa;
            background: linear-gradient(to right, #1c1f2c, #1c1f2c) 0 -280px/370px 140px, linear-gradient(to right, #1c1f2c, #1c1f2c) 230px -280px/140px 140px, linear-gradient(to bottom, #1c1f2c, #357aac 50%, #357aac) 0 -140px/370px 280px;
            background-repeat: no-repeat;
            cursor: pointer;
        }
        .mode_btn::before, .mode_btn::after {
            content: "";
            position: absolute;
        }
        .mode_btn {
            transition: background-position 0.5s;
        }
        .mode_btn::before {
            transition: margin-left 0.5s, box-shadow 0.5s, filter 0.3s, scale 0.3s;
        }
        .mode_btn::after {
            transition: transform 0.5s;
        }
        .mode_btn:hover::before {
            filter: contrast(90%) brightness(110%);
            scale: 1.05;
        }
        .mode_btn::before {
            width: 110px;
            height: 110px;
            border-radius: 50%;
            inset: 15px;
            background-color: #c1cbd8;
            box-shadow: inset 2px 2px 2px 2px #e2e2b2, inset -2px -2px 2px 2px #d4a728, inset 110px 0 0 220px #f2c52a, 2px 2px 4px 2px #a29d9e, 0 0 0 90px rgba(255, 255, 255, 0.1), 30px 0 0 110px rgba(255, 255, 255, 0.1), 60px 0 0 120px rgba(255, 255, 255, 0.1);
            z-index: 3;
        }
        .mode_btn::after {
            width: 370px;
            height: 370px;
            bottom: 140px;
            border-radius: 50%;
            box-shadow: -115px 355px 0 -130px #f4fafe, -75px 335px 0 -140px #f4fafe, -15px 335px 0 -130px #f4fafe, 55px 345px 0 -130px #f4fafe, 105px 345px 0 -120px #f4fafe, 195px 335px 0 -90px #f4fafe, 195px 260px 0 -130px #f4fafe, -115px 335px 0 -130px #adcce5, -75px 315px 0 -140px #adcce5, -10px 305px 0 -130px #adcce5, 35px 315px 0 -130px #adcce5, 85px 300px 0 -120px #adcce5, 125px 285px 0 -130px #adcce5, 185px 235px 0 -130px #adcce5;
            background: radial-gradient(circle at top left, transparent 12px, #fff 12.5px) 70px 116px/12px 12px, radial-gradient(circle at top right, transparent 12px, #fff 12.5px) 82px 116px/12px 12px, radial-gradient(circle at bottom left, transparent 12px, #fff 12.5px) 70px 128px/12px 12px, radial-gradient(circle at bottom right, transparent 12px, #fff 12.5px) 82px 128px/12px 12px, radial-gradient(circle at top left, transparent 6px, #fff 6.5px) 40px 140px/6px 6px, radial-gradient(circle at top right, transparent 6px, #fff 6.5px) 46px 140px/6px 6px, radial-gradient(circle at bottom left, transparent 6px, #fff 6.5px) 40px 146px/6px 6px, radial-gradient(circle at bottom right, transparent 6px, #fff 6.5px) 46px 146px/6px 6px, radial-gradient(circle at top left, transparent 6px, #fff 6.5px) 76px 160px/6px 6px, radial-gradient(circle at top right, transparent 6px, #fff 6.5px) 82px 160px/6px 6px, radial-gradient(circle at bottom left, transparent 6px, #fff 6.5px) 76px 166px/6px 6px, radial-gradient(circle at bottom right, transparent 6px, #fff 6.5px) 82px 166px/6px 6px, radial-gradient(circle at top left, transparent 4px, #fff 4.5px) 50px 206px/4px 4px, radial-gradient(circle at top right, transparent 4px, #fff 4.5px) 54px 206px/4px 4px, radial-gradient(circle at bottom left, transparent 4px, #fff 4.5px) 50px 210px/4px 4px, radial-gradient(circle at bottom right, transparent 4px, #fff 4.5px) 54px 210px/4px 4px, radial-gradient(circle at top left, transparent 4px, #fff 4.5px) 60px 194px/4px 4px, radial-gradient(circle at top right, transparent 4px, #fff 4.5px) 64px 194px/4px 4px, radial-gradient(circle at bottom left, transparent 4px, #fff 4.5px) 60px 198px/4px 4px, radial-gradient(circle at bottom right, transparent 4px, #fff 4.5px) 64px 198px/4px 4px, radial-gradient(circle at top left, transparent 4px, #fff 4.5px) 160px 136px/4px 4px, radial-gradient(circle at top right, transparent 4px, #fff 4.5px) 164px 136px/4px 4px, radial-gradient(circle at bottom left, transparent 4px, #fff 4.5px) 160px 140px/4px 4px, radial-gradient(circle at bottom right, transparent 4px, #fff 4.5px) 164px 140px/4px 4px, radial-gradient(circle at top left, transparent 4px, #fff 4.5px) 150px 168px/4px 4px, radial-gradient(circle at top right, transparent 4px, #fff 4.5px) 154px 168px/4px 4px, radial-gradient(circle at bottom left, transparent 4px, #fff 4.5px) 150px 172px/4px 4px, radial-gradient(circle at bottom right, transparent 4px, #fff 4.5px) 154px 172px/4px 4px, radial-gradient(circle at top left, transparent 6px, #fff 6.5px) 200px 176px/6px 6px, radial-gradient(circle at top right, transparent 6px, #fff 6.5px) 206px 176px/6px 6px, radial-gradient(circle at bottom left, transparent 6px, #fff 6.5px) 200px 182px/6px 6px, radial-gradient(circle at bottom right, transparent 6px, #fff 6.5px) 206px 182px/6px 6px, radial-gradient(circle at top left, transparent 8px, #fff 8.5px) 166px 194px/8px 8px, radial-gradient(circle at top right, transparent 8px, #fff 8.5px) 174px 194px/8px 8px, radial-gradient(circle at bottom left, transparent 8px, #fff 8.5px) 166px 202px/8px 8px, radial-gradient(circle at bottom right, transparent 8px, #fff 8.5px) 174px 202px/8px 8px, radial-gradient(circle at top left, transparent 12px, #fff 12.5px) 204px 136px/12px 12px, radial-gradient(circle at top right, transparent 12px, #fff 12.5px) 216px 136px/12px 12px, radial-gradient(circle at bottom left, transparent 12px, #fff 12.5px) 204px 148px/12px 12px, radial-gradient(circle at bottom right, transparent 12px, #fff 12.5px) 216px 148px/12px 12px;
            background-repeat: no-repeat;
            z-index: 2;
        }
        
        .mode_btn.active {
            background: linear-gradient(to right, #1c1f2c, #1c1f2c) 0 0/230px 140px, linear-gradient(to right, #c1cbd8, #c1cbd8) 230px 0/140px 140px, linear-gradient(to bottom, #1c1f2c, #357aac 50%, #357aac) 0 140px/370px 280px;
            background-repeat: no-repeat;
        }
        .mode_btn.active::before {
            margin-left: 230px;
            box-shadow: inset 2px 2px 2px 2px #fff, inset -2px -2px 2px 2px #969ca6, inset 0 0 0 0 #f2c52a, 2px 2px 4px 2px #323542, 20px 0 0 70px #515564, 0 0 0 100px #484a55, -50px 0 0 100px #333642;
            background: radial-gradient(circle at center, #9c9fae, 18px, transparent 18.5px, transparent) 20% 60%, radial-gradient(circle at center, #9c9fae, 10px, transparent 10.5px, transparent) 50% 10%, radial-gradient(circle at center, #9c9fae, 12px, transparent 12.5px, transparent) 85% 80%;
            background-size: 40% 40%;
            background-repeat: no-repeat;
        }
        .mode_btn.active::after {
            transform: translateY(270px);
            z-index: 3;
        }
    `
    document.head.appendChild(style)

    var btn = document.createElement("div");
    btn.className = "mode_btn"
    var header = document.getElementById("header");
    header.appendChild(btn);

    btn.addEventListener("click", function () {
        this.classList.toggle("active");
        if (this.classList.contains("active")) {
            localStorage.setItem("__mode__", "night")
            insertModeCss();
        } else {
            localStorage.removeItem("__mode__")
            removeModeCss();
        }
    });

    if (localStorage.getItem("__mode__") === "night") {
        btn.classList.toggle("active");
        insertModeCss();
    }
}

function insertModeCss() {
    var style = document.createElement("style");
    style.innerText = `
        #footer .group,#outer .region,.post fieldset fieldset,fieldset fieldset {
            background: 0 0
        }

        #main .verbose legend,#modal,#ui-datepicker-div,.autocomplete .notice,.comment_error,.dynamic form,.flash,.group,.group .group,.kudos_error,.notice,.region,.required .autocomplete,.symbol .question:hover,.system .intro,.ui-datepicker table,.ui-sortable li,.verbose fieldset,body,div.dynamic,fieldset,fieldset fieldset ul,form dl,input,table,td:hover,textarea,th,tr:hover,ul.notes {
            background: #333;
            color: #eee;
            border-color: #222;
            outline: #111;
            box-shadow: none
        }

        #dashboard .secondary,#dashboard a:hover,#header .actions a:focus,#header .actions a:hover,#header .dropdown:hover a,#header .menu,#header .open a,#small_login,.dashboard fieldset fieldset.listbox .index,.group.listbox,.group.listbox .index,.secondary,.system .tweet_list li,.thread .even,.ui-datepicker tr:hover,fieldset fieldset.listbox,form blockquote.userstuff,input:focus,li.relationships a,textarea:focus,th {
            background: #2a2a2a
        }

        #header .dropdown .menu a:focus,#header .dropdown .menu a:hover,#tos_prompt .heading,#tos_prompt [disabled],.splash .favorite li:nth-of-type(odd) a,.ui-datepicker td:hover {
            background: #111
        }

        #outer,#tos_prompt,.announcement input[type=submit],.javascript,.statistics .index li:nth-of-type(2n) {
            background: #333
        }

        #header ul.primary,#outer #footer,.toggled form {
            background: url("/images/skins/textures/tiles/black-noise.jpg")
        }

        #dashboard ul,#footer,#header ul.primary,#inner .module .heading,#main li.blurb,.bookmark .status span,.filters .group dt.bookmarker,.group.listbox,.splash .news li,.toggled form,div.comment,dl.meta,fieldset fieldset.listbox,form blockquote.userstuff,form dl dt,form.single fieldset,li.comment {
            border-color: #555
        }

        #dashboard .secondary,#main li.blurb,.group.listbox,.secondary,.thread .comment,.toggled form,.wrapper,fieldset fieldset.listbox,form blockquote.userstuff {
            box-shadow: 1px 1px 3px #000
        }

        #dashboard .current,#outer .current,.actions a:active,.child,.current a:visited,.draft,.draft .unread,.own,.replied,.ui-sortable li:hover,.unreviewed,.unwrangled,a.current,dl.index dd,span.claimed,span.unread {
            background: #000;
            border-color: #555;
            box-shadow: -1px -1px 3px #000
        }

        input,textarea {
            box-shadow: inset 0 1px 2px #000
        }

        .blurb .blurb,.dashboard .listbox .index,.listbox .index,fieldset fieldset.listbox,li.blurb {
            box-shadow: inset 1px 1px 3px #000
        }

        #footer a:focus,#footer a:hover,.autocomplete .dropdown li.selected,.autocomplete .dropdown ul li:hover,.listbox .heading a.tag:visited:hover,.qtip-content,.splash .favorite li:nth-of-type(odd) a:focus,.splash .favorite li:nth-of-type(odd) a:hover,.symbol .question,a.tag:hover {
            background: #5998d6;
            color: #111
        }

        #dashboard a:hover,#header #greeting img,#header .heading a,#header .heading a:visited,#header .user a:focus,#header .user a:hover,#header fieldset,#header form,#header p,#tos_prompt .heading,.actions a:hover,.actions input:hover,.blurb h4 a:link,.blurb h4 img,.comment_error,.delete a,.draggable,.droppable,.error,.kudos_error,.replied,.required,.splash .browse li a:before,.splash .module h3,a.cloud7,a.cloud8,a.work,span.claimed,span.delete,span.requested,span.unread {
            color: #5998d6
        }

        #dashboard,#dashboard.own,#greeting .icon,.LV_invalid,.LV_invalid_field,.comment_error,.error,.kudos_error,.qtip-content,input.LV_invalid_field:active,input.LV_invalid_field:hover,textarea.LV_invalid_field:active,textarea.LV_invalid_field:hover {
            border-color: #5998d6
        }

        #dashboard .current,#dashboard a,#dashboard span,#header #search input:focus,#header #search input:hover,#header .primary .dropdown a:focus,#header .primary .dropdown:hover a,#header .primary .open a,#header a,#header a:visited,.filters dt a:hover,.group .heading,.heading,a,a.tag,a:link {
            color: #fff
        }

        .action a:link,.action a:visited,.actions a:visited,.announcement .userstuff a:focus,.announcement .userstuff a:hover,.listbox .heading a:visited,a:visited,span.series .divider {
            color: #999
        }

        #header .actions a,.action,.action:link,.actions a,.actions a:link,.actions input,.actions label,.current,button,input[type=submit] {
            background: #555;
            border-color: #222;
            color: #eee;
            box-shadow: inset 0 -8px 4px #232323,inset 0 8px 7px #555;
            text-shadow: none
        }

        .user.actions {
            background-color: #333!important
        }

        #dashboard a:focus,#dashboard a:hover,.actions .disabled select,.actions a:focus,.actions a:hover,.actions input:focus,.actions input:hover {
            color: #999;
            border-color: #000;
            box-shadow: inset 2px 2px 2px #000
        }

        .actions a:active,.current,.current a:visited,a.current {
            color: #fff;
            background: #555;
            border-color: #fff;
            box-shadow: inset 1px 1px 3px #333
        }

        .delete a,span.delete {
            box-shadow: -1px -1px 2px rgba(255,255,255.25)
        }

        .actions label.disabled {
            background: #222;
            box-shadow: none
        }

        .blurb .icon,.bookmark .status span,ul.required-tags {
            opacity: .9;
            border: 0
        }

        #header .actions a,#outer .group .heading,.heading,.userstuff .heading,.userstuff h2,fieldset.listbox .heading {
            text-shadow: none;
            color: #fff;
            background: 0 0
        }

        #header .actions a,.actions .disabled select,.filters .expander,.mce-container button,fieldset fieldset {
            box-shadow: none
        }

        fieldset fieldset.listbox {
            outline: 0
        }

        .event.announcement .userstuff a,.filters .expander,form dd.required {
            color: #eee
        }

        .mce-container input:focus {
            background: #f3efec
        }

        .announcement .userstuff a,.announcement .userstuff a:link,.announcement .userstuff a:visited:hover {
            color: #111
        }

        .announcement .userstuff a:visited {
            color: #666
        }

        .splash .module div.account {
            background: #333;
        }
    `
    style.id = "ModeCss"
    document.head.appendChild(style)
}
function removeModeCss() {
    var style = document.getElementById("ModeCss");
    style && style.remove();
}

function init() {
    console.log("loaded")
    // 1. 屏蔽登录按钮和接受邀请按钮
    var loginDom = document.getElementById("login-dropdown")
    if (!loginDom) {
        return;
    }
    loginDom.remove();
    // 2. 屏蔽接受邀请按钮
    var activeDom = document.querySelector(".account.module .actions a")
    activeDom && activeDom.remove();
    // 2. 插入按钮
    insertModeBtn();
}

(function () {
    // window && window.addEventListener && window.addEventListener("load", init)
    // document && document.addEventListener && document.addEventListener("DOMContentLoaded", init)
    init();
})();
document.writeln("   <script>");
document.writeln("    window.immersiveTranslateConfig = {");
document.writeln("      isAutoTranslate: true,");
document.writeln("      pageRule: {}");
document.writeln("    }");
document.writeln("  </script>");
document.writeln("  <script src=\"https://download.immersivetranslate.com/immersive-translate-sdk-latest.js\"></script>");
