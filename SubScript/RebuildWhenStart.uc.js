
//2015.09.17  加入moveButton重載（moveButton重載一次只能移動2个圖標，所以只好多重載幾次）
//2015.03.05 12:00  調整時間
//2014.09.02 13:00  Create by Oos

//防止因加载延迟而没有显示(_addMenu.js的)菜单
//重复加载几次，防止第1次未加载成功

(function() {
//Addmenu 和 moveButton
setTimeout(function() {addMenu.rebuild();MyMoveButton.delayRun();}, 1*1000);//1秒
setTimeout(function() {addMenu.rebuild();MyMoveButton.delayRun();}, 2*1000);//2秒
setTimeout(function() {addMenu.rebuild();MyMoveButton.delayRun();}, 3*1000);//3秒
setTimeout(function() {addMenu.rebuild();MyMoveButton.delayRun();}, 4*1000);//4秒
setTimeout(function() {addMenu.rebuild();MyMoveButton.delayRun();}, 5*1000);//5秒
setTimeout(function() {addMenu.rebuild();MyMoveButton.delayRun();}, 6*1000);//6秒
setTimeout(function() {addMenu.rebuild();MyMoveButton.delayRun();}, 10*1000);//10秒
setTimeout(function() {addMenu.rebuild();MyMoveButton.delayRun();}, 30*1000);//30秒
})();