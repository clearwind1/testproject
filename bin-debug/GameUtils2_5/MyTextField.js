/**
 * Created by pior on 16/1/19.
 */
var GameUtil;
(function (GameUtil) {
    var MyTextField = (function (_super) {
        __extends(MyTextField, _super);
        function MyTextField(x, y, size, anchorX, anchorY) {
            if (anchorX === void 0) { anchorX = 0.5; }
            if (anchorY === void 0) { anchorY = 0.5; }
            _super.call(this);
            this.init(x, y, size, anchorX, anchorY);
        }
        var d = __define,c=MyTextField;p=c.prototype;
        p.init = function (x, y, size, anchorX, anchorY) {
            this.$setX(x);
            this.$setY(y);
            this.$setSize(size);
            this.anchorX = anchorX;
            this.anchorY = anchorY;
        };
        p.setText = function (text) {
            this.text = text;
            this.setanchorOff(this.anchorX, this.anchorY);
        };
        p.setSize = function (size) {
            //console.log("size====",size,"this.$getHeight()======",this.$getHeight(),"any====",this.anchorY);
            this.size = size;
            this.setanchorOff(this.anchorX, this.anchorY);
        };
        p.setanchorOff = function (anchorx, anchory) {
            this.anchorOffsetX = this.$getWidth() * anchorx;
            this.anchorOffsetY = this.$getHeight() * anchory;
        };
        return MyTextField;
    })(egret.TextField);
    GameUtil.MyTextField = MyTextField;
    egret.registerClass(MyTextField,"GameUtil.MyTextField");
})(GameUtil || (GameUtil = {}));
