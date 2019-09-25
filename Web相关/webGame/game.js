//自执行函数
;
(function() {
    let Game = window.Game = function() {
        //该括号内的东西为当前实例私有的东西
        let canvas = document.getElementById('canvas');
        //使得绘制环境成为当前实例的一个私有属性
        this.draw = canvas.getContext('2d');
        //获取屏幕宽高度
        let W = document.documentElement.clientWidth;
        let H = document.documentElement.clientHeight;
        canvas.width = W > 420 ? 420 : W;
        canvas.height = H > 750 ? 750 : H;

    };
})();