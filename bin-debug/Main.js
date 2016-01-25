//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main;p=c.prototype;
    p.onAddToStage = function (event) {
        //设置加载进度界面
        GameUtil.GameScene.init(this.stage);
        GameUtil.GameScene.runscene(new GameUtil.LoadingPanel(this.createGameScene, this, 0, 0, true));
        return;
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    p.createGameScene = function () {
        var sky = this.createBitmapByName("bgImage");
        this.addChild(sky);
        //图片
        //var img: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('greenframe_png'),this.stage.stageWidth/2,this.stage.stageHeight/2);
        //this.addChild(img);
        //文字
        //var text: GameUtil.MyTextField = new GameUtil.MyTextField(this.stage.stageWidth/2,this.stage.stageHeight/2,30);
        //text.setText('测试');
        //this.addChild(text);
        //egret.setTimeout(function(){
        //    img.setNewTexture(RES.getRes('inputframe_png'));
        //    text.setText("正在测试");
        //},this,1000);
        //进度条
        //var probar: GameUtil.ProgressBar = new GameUtil.ProgressBar('inputframe_png',100,this.stage.stageHeight/2+100,new egret.Rectangle(4,4,200,70));
        //probar.setPercent(0.1);
        //this.addChild(probar);
        //按钮
        //this.btn = new GameUtil.Menu(this,'greenframe_png','inputframe_png',this.backnull,[0]);
        //this.btn.x = this.stage.stageWidth/2;
        //this.btn.y = this.stage.stageHeight/2;
        //this.btn.addButtonText('按钮',30);
        //this.addChild(this.btn);
        //文字输入
        //var inputframe: GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('inputframe_png'),this.stage.stageWidth/2,this.stage.stageHeight/2);
        //this.addChild(inputframe);
        //
        //var inputtext: GameUtil.InputTextFiled = new GameUtil.InputTextFiled(this.stage.stageWidth/2,this.stage.stageHeight/2,40,200,70);
        //inputtext.textAlign = egret.HorizontalAlign.LEFT;
        //inputtext.setBaseTextSize(30,40);
        //inputtext.setBaseText("text",0.6);
        //this.addChild(inputtext);
        //帧动画
        //var an: GameUtil.Animation = new GameUtil.Animation('loadinggif',4,100,this.stage.stageWidth/2,this.stage.stageHeight/2);
        //this.addChild(an);
        //an.setLoop(-1);
        //an.play();
        //单选按钮
        //var radiobtn: GameUtil.RadioButton = new GameUtil.RadioButton('inputframe_png','greenframe_png');
        //this.addChild(radiobtn);
        //for(var i:number = 0;i < 4;i++){
        //    var tex: GameUtil.MyTextField = new GameUtil.MyTextField(0,0,30);
        //    tex.setText("单选按钮");
        //    radiobtn.addItem(tex,150,50+100*i);
        //}
        //滚动视图
        //var scroll: GameUtil.ScrollView = new GameUtil.ScrollView(300,300);
        //scroll.x = 100;
        //scroll.y = 100;
        //this.addChild(scroll);
        //
        //for(var i:number = 0;i < 5;i++){
        //    var pic:GameUtil.MyBitmap = new GameUtil.MyBitmap(RES.getRes('inputframe_png'),150,i*80);
        //    pic.setanchorOff(0.5,0);
        //    scroll.putItem(pic);
        //}
        console.log("ischinese=======", GameUtil.isChineseName("民城魂牵梦s萦魂牵梦萦"));
        return;
        var sky = this.createBitmapByName("bgImage");
        this.addChild(sky);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        var topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, stageW, stageH);
        topMask.graphics.endFill();
        topMask.width = stageW;
        topMask.height = stageH;
        this.addChild(topMask);
        var icon = this.createBitmapByName("egretIcon");
        this.addChild(icon);
        icon.scaleX = 0.55;
        icon.scaleY = 0.55;
        icon.anchorOffsetX = icon.width / 2;
        icon.anchorOffsetY = icon.height / 2;
        icon.x = stageW / 2;
        icon.y = stageH / 2 - 60;
        var colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.textAlign = "center";
        colorLabel.text = "Hello Egret";
        colorLabel.size = 20;
        colorLabel.x = stageW - colorLabel.width >> 1;
        colorLabel.y = (stageH - colorLabel.height >> 1) + 50;
        this.addChild(colorLabel);
        var textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.alpha = 0;
        textfield.width = stageW;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.x = 0;
        textfield.y = stageH / 2 + 100;
        this.textfield = textfield;
        //根据name关键字，异步获取一个json配置文件，name属性请参考resources/resource.json配置文件的内容。
        // Get asynchronously a json configuration file according to name keyword. As for the property of name please refer to the configuration file of resources/resource.json.
        RES.getResAsync("description", this.startAnimation, this);
    };
    p.backnull = function (img) {
        //var width: number = img.getPercent();
        //width += 0.1;
        //img.setPercent(width);
        //this.btn.getBtnText().setSize(20);
        //this.addChild(new GameUtil.TipsPanel(null,'测试提示框',true));
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    p.startAnimation = function (result) {
        var self = this;
        var parser = new egret.HtmlTextParser();
        //console.log("result=======",parser.parser(result[0]));
        var textflowArr = [];
        for (var i = 0; i < result.length; i++) {
            textflowArr.push(parser.parser(result[i]));
        }
        var textfield = self.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var lineArr = textflowArr[count];
            self.changeDescription(textfield, lineArr);
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, self);
        };
        change();
    };
    /**
     * 切换描述内容
     * Switch to described content
     */
    p.changeDescription = function (textfield, textFlow) {
        textfield.textFlow = textFlow;
    };
    return Main;
})(egret.DisplayObjectContainer);
egret.registerClass(Main,"Main");
