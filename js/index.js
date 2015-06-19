require.config({
    baseUrl: "js",
    paths: {
        jquery: '../node_modules/jquery/dist/jquery', //jQuery目录是放置各种jQuery的版本及其插件的
        artdialog: '../node_modules/artdialog/dist/dialog'
    },
    shim: {
        "artdialog": {
            deps: ["css!../node_modules/artdialog/css/ui-dialog", "jquery"],
            exports: "artDialog"
        }
    }
});


require(["jquery", "artdialog"], function ($) {
    console.log("加载完毕");
    var d = dialog({
        title: '欢迎',
        content: '欢迎使用 artDialog 对话框组件！'
    });
    d.show();

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
    d1.show();
});
