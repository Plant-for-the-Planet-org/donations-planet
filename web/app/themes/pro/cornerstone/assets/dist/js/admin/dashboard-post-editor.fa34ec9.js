var tco="object"==typeof tco?tco:{};tco.dashboardPostEditor=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=89)}({0:function(t,e){t.exports=window.jQuery},2:function(t,e){t.exports=window.tco},89:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(2),i=n.n(a);function c(){return"undefined"!=typeof wp&&void 0!==wp.blocks}var s=function(){var t=c()?[wp.data.select("core/editor").getCurrentPost().content]:function(){var t=window.document.getElementById("content")&&window.document.getElementById("content").value||"";return void 0!==window.tinyMCE&&void 0!==window.tinyMCE.editors&&0!==window.tinyMCE.editors.length&&(t=window.tinyMCE.get("content")&&window.tinyMCE.get("content").getContent()||""),t}().match(/\[cs_content.*?\[\/cs_content\]/gi);if(window.YoastSEO&&t){window.YoastSEO.app.registerPlugin("csContent",{status:"loading"}),window.YoastSEO.app.registerPlugin("csContentPre",{status:"ready"}),window.YoastSEO.app.registerModification("content",function(e){t&&!c()&&t.forEach(function(t,n){e=e.replace(t,"\x3c!--cs-content-yoast-".concat(n,"--\x3e"))});return e},"csContentPre");var e=t.map(function(t){return t.replace("[cs_content]",'[cs_content _p="'.concat(window.csDashboardPostEditorData.post_id,'" no_wrap=true]'))});i.a.ajax({data:{content:e},action:"cs_yoast_do_shortcode",_cs_nonce:window.csDashboardPostEditorData._cs_nonce,done:function(t){var e=t.content;n=e,window.YoastSEO.app.pluginReady("csContent"),window.YoastSEO.app.registerModification("content",o,"csContent",100)},fail:function(t){console.warn("Unable to process content builder shortcodes for Yoast",t),window.YoastSEO.app.pluginReady("csContent")}});var n=[]}function o(t){if(c())return n.join();var e=t.match(/<!--cs-content-yoast-\d-->/gi);return e&&e.forEach(function(e){var o=parseInt(e.replace("\x3c!--cs-content-yoast-","").replace("--\x3e",""));isNaN(o)||void 0===n[o]||(t=t.replace(e,n[o]))}),t}},d=window.wp;r()(function(){var t=window.csDashboardPostEditorData;function e(e){return t.strings[e]||""}var n=r()("body"),o=r()(t.editorTabMarkup),a=r()(t.editorTabContentMarkup),c=r()("#postdivrich"),u=r()('<div style="display: inline-flex;align-items: center;"><button type="button"  class="components-button is-button is-default is-large">'+e("edit-with-wordpress")+"</button></div>"),l=r()('<button type="button" data-cs-switch-button class="components-button is-primary is-button is-default is-large">'+e("edit-with-cornerstone")+"</button>");function p(){c.hide(),o.show(),r()("#editor .edit-post-visual-editor, #editor .edit-post-text-editor").first().after(a),n.addClass("cs-disable-gutenburg"),r()("#editor .edit-post-header-toolbar").before(u),l.detach();try{d.data.dispatch("core/edit-post").closeGeneralSidebar()}catch(t){}}function f(n){"true"!==t.usesCornerstone?n():i.a.confirm({message:e("manual-edit-warning"),acceptClass:"tco-btn-nope",acceptBtn:e("manual-edit-accept"),declineBtn:e("manual-edit-decline"),accept:function(){"new"!==t.post_id&&d.ajax.post("cs_override",{post_id:t.post_id,_cs_nonce:t._cs_nonce}),t.usesCornerstone="false",n()}})}c.after(o),c.find(".wp-editor-tabs").append(r()('<button type="button" data-cs-switch-button id="content-cornerstone" class="wp-switch-editor switch-cornerstone">'+e("cornerstone-tab")+"</button>")),setTimeout(function(){return r()("#editor .edit-post-header-toolbar").append(l)},1),o.find("#content-tmce, #content-html").on("click",function(){var t=-1!==r()(this).attr("id").indexOf("html");f(function(){c.show(),r()(window).trigger("scroll.editor-expand","scroll"),o.hide(),window.switchEditors.go("content",t?"html":"tmco")})}),u.on("click","button",function(){f(function(){n.removeClass("cs-disable-gutenburg"),u.detach(),a.detach(),r()("#editor .edit-post-header-toolbar").show().append(l)})}),n.on("click keydown","[data-cs-switch-button]",function(){"false"===t.usesCornerstone&&"new"!==t.post_id&&d.autosave&&""!==d.autosave.getPostData().content?i.a.confirm({message:e("overwrite-warning"),acceptClass:"tco-btn-nope",acceptBtn:e("overwrite-accept"),declineBtn:e("overwrite-decline"),accept:function(){t.usesCornerstone="none",p()}}):p()}),"true"===t.usesCornerstone&&setTimeout(p,1),n.on("click","[data-cs-edit-button]",function(t){if(t.preventDefault(),t.stopPropagation(),!function(){if(!window.wp.autosave||!window.wp.autosave.getPostData)return!1;var t=window.wp.autosave.getPostData(),n=t.post_id,o=t.auto_draft;if(!n)return!1;if(o){r()("#title-prompt-text").hide();var a=r()("#title"),i=a.val();i&&"title"!==i||a.val(e("default-title")),d.autosave.server.triggerSave(),r()(document).on("heartbeat-tick.autosave",function(){var t=d.autosave.getPostData();r()(window).off("beforeunload.edit-post"),w(t.post_id)})}else w(n);return!0}()&&!function(){if(!window.wp.data||!window.wp.data.select)return!1;try{var t=d.data.select("core/editor"),n=d.data.dispatch("core/editor");if(!t||!n)return!1;var o=t.getCurrentPostId();if(!o)return!1;var r={};t.isCleanNewPost()&&(r.title=e("default-title")),"auto-draft"===t.getCurrentPostAttribute("status")&&(r.status="draft"),Object.keys(r).length>0&&(n.editPost(r),n.savePost());var a=setInterval(function(){try{t.isSavingPost()||(clearInterval(a),w(o))}catch(t){console.warn("Unable to launch Content Builder from Gutenburg",t),clearInterval(a)}},100)}catch(t){console.warn("Unable to launch Content Builder from Gutenburg",t)}return!0}()){var n=r()("#post_ID").val();parseInt(r()("#auto_draft").val())?i.a.confirm({message:e("post-does-not-exist-warning"),acceptBtn:"",declineBtn:e("post-editor-back")}):w(n)}});var w=function(e){return window.location=t.editURL.replace("{{post_id}}",e)};window.YoastSEO&&setTimeout(s,0)})}});
//# sourceMappingURL=dashboard-post-editor.fa34ec9.js.map