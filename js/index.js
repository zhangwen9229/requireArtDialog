require.config({
    baseUrl: "js",
    paths: {
        jquery: '../node_modules/jquery/dist/jquery', //jQuery目录是放置各种jQuery的版本及其插件的
        artdialog: '../node_modules/artdialog/dist/dialog',
        BUI: '../common/buijs/bui'
    },
    shim: {
        "artdialog": {
            deps: ["css!../node_modules/artdialog/css/ui-dialog", "jquery"],
            exports: "artDialog"
        },
        "BUI": {
            deps: ["css!../common/buijs/css/bs3/bui","css!../common/buijs/css/bs3/dpl"],
            exports: "artDialog"
        }
    }
});


require(["jquery", "artdialog", "BUI"], function ($) {
    console.log("加载完毕");
    var d = dialog({
        title: '欢迎',
        content: '欢迎使用 artDialog 对话框组件！'
    });
    $("#btn1").on("click", function (e) {
        d.show();
    });

    var d1 = dialog({
        title: '提示',
        content: '按钮回调函数返回 false 则不许关闭',
        okValue: '确定',
        ok: function () {
            this.title('提交中…');
            return false;
        },
        cancelValue: '取消',
        cancel: function () { }
    });
    $("#btn2").on("click", function (e) {
        d1.show();
    });

    BUI.use('bui/calendar', function (Calendar) {
        var datepicker = new Calendar.DatePicker({
            trigger: '.calendar',
            autoRender: true
        });
    });
});
