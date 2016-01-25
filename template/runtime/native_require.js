
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/tween/tween.js",
	"libs/modules/res/res.js",
	"bin-debug/GameUtils2_5/MyBitmap.js",
	"bin-debug/GameUtils2_5/Animation.js",
	"bin-debug/GameUtils2_5/BassPanel.js",
	"bin-debug/GameUtils2_5/GetImageByUrl.js",
	"bin-debug/GameUtils2_5/GetResByany.js",
	"bin-debug/GameUtils2_5/Http.js",
	"bin-debug/GameUtils2_5/MyTextField.js",
	"bin-debug/GameUtils2_5/InputTextFiled.js",
	"bin-debug/GameUtils2_5/LoadingLogopre.js",
	"bin-debug/GameUtils2_5/LoadingPanel.js",
	"bin-debug/GameUtils2_5/Menu.js",
	"bin-debug/GameUtils2_5/ProgressBar.js",
	"bin-debug/GameUtils2_5/RadioButton.js",
	"bin-debug/GameUtils2_5/ScrollView.js",
	"bin-debug/GameUtils2_5/TipsPanel.js",
	"bin-debug/GameUtils2_5/WaitServerPanel.js",
	"bin-debug/GameUtils2_5/utils.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 480,
		contentHeight: 800,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};