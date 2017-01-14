//2016.12.19
/*——————————標簽頁右鍵————————————*/
//撤销關闭二级菜單 By feiruo
/*var undoMenu = TabMenu({
label: '撤銷關閉',
accesskey: "F",
insertBefore: "context_reloadTab",
tooltiptext: "右鍵顯示所有歷史記錄",
onclick: "if (event.button == 2) {PlacesCommandHook.showPlacesOrganizer('History');}",
image:
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA5ElEQVQ4jaXTr0oFQRTH8c8yIBgWBMFg2ifwBa5oEsRguWCxGQwGq+9hMvgItxgEww0Gg+m+w02bBYtJw8zCsO64q35hYObMnN+cPzN8Z2fANpljtNj6j/PsL87beMdnYbzhCecIJZF5imAvs52gThfM8YqlH1LsRLoDL9jP9gNuk0gxkiab3+Fq4MwSlyWBnOsk0ucoRTfKIVbY7NlrsbCj1FhgjbOe/WOKQMcMN9l6cgolnkMIF0MbDe7FEIcIYlGLbez6vBbb12ADu+IrXFVV9WjCXzkQi9eKT7nFA07HHH/NFwrNKkyQLvLzAAAAAElFTkSuQmCC",
onpopupshowing: function(e) {
var popup = e.target;
popup.setAttribute('id', 'addUndoMneun');
var items = popup.querySelectorAll('.bookmark-item');
[].forEach.call(items, function(item) {
item.parentNode.removeChild(item);
});
var undoItems = JSON.parse(Cc['@mozilla.org/browser/sessionstore;1'].getService(Ci.nsISessionStore).getClosedTabData(window));
if (undoItems.length == 0) {
popup.setAttribute('oncommand', 'this.parentNode._placesView._onCommand(event);');
if (!this.parentNode._placesView) new HistoryMenu(event);
} else {
undoItems.map(function(item, id) {
var m = document.createElement('menuitem');
m.setAttribute('label', item.title);
m.setAttribute('image', item.image ? 'moz-anno:favicon:' + item.image : '');
m.setAttribute('class', 'menuitem-iconic bookmark-item closedtab');
m.setAttribute('oncommand', 'undoCloseTab(' + id + ')');
m.setAttribute('type', 'unclose-menuitem');
popup.appendChild(m);
});
}
},
});*/

/*——————————圖片右鍵————————*/
//右鍵搜索圖片 以圖搜圖
var imagesub = PageMenu({
    label: "以圖搜圖",
    accesskey: "S",
    condition: "image",
    where: "tab",
    insertBefore: "context-viewimage",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZElEQVQ4jWNgGMzAl4GB4T8a9iVWcwtUQxADAwMvFAdBxVqItVkQi5wgMS6B2YwLwFyCE3xhgDgZF+CluQEUe4HiQLRjQMQ7ydEI02wHtWUfkmH7iLXZDp8iXECaEs3IhtAfAAAJGiQnfMavIgAAAABJRU5ErkJggg==",
});
imagesub([{
    id: "imagesearch-sep",
    style: "display:none;"
},
{
    label: 'Google',
    url: 'http://www.google.com/searchbyimage?image_url=%IMAGE_URL%',
    image: "https://www.google.com/favicon.ico",
    where: 'tab',
},
{
    label: 'Sou',
    url: 'http://st.so.com/stu?imgurl=%IMAGE_URL%',
    image: "http://st.so.com/favicon.ico",
    where: 'tab',
},

]);

//圖片右鍵 複製 二级菜單
new
function() {
    var items = [{
        command: 'context-copyimage-contents',
        condition: 'image',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVQ4jWNgoAH4jwc3EGsALvHr+AxBtgmXvDg+Q/6j0fgswKqGkAHY1OI1AFsgkmTAMHPBQnIMoMgFxGDiTCVFDdk2UwQArSlPm8iO15EAAAAASUVORK5CYII=',
    },
    {
        label: "圖片地址|Base64",
        tooltiptext: "左鍵: 複製圖片地址\n右鍵: 複製圖片Base64碼",
        onclick: function(e) {
            switch (e.button) {
            case 0:
                addMenu.copy(addMenu.convertText("%IMAGE_URL%"));
                /*複製圖片地址*/
                closeMenus(this);
                break;
            case 2:
                addMenu.copy(addMenu.convertText("%IMAGE_BASE64%"));
                closeMenus(this);
                break;
            }
        },
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVQ4jbWTLw6DMBjFfwaDmauq5QhY9C4wyQWQOA6whAtwBS6wO0xOzeKQO8REH6EUwsqWvaRpk37vT7+28AfYX8gZ8NIcIgf6GJESGAATpBqAc2ySFrgDCZACD6CKJU/oNW5Ad5SMnEdc9OQbgQp4SqA8QsyAWu6W+WZaoPhEblQ8sGxah+vFKKHdyFbFl0C4A064G6lDsmV+QIWc0o19G6xXDkbxffcJtdyNaht/0z/jKp6Hq2pWbyPDNSffIU8oJLT1X47jDR7gLDGf5CLwAAAAAElFTkSuQmCC"
    },
    {
        label: "批量複製圖片URL",
        //by skofkyo
        accesskey: "P",
        condition: "select noinput",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVQ4jWNgGDbgPwMDw3kGBob9ROLjUD0oBpBjKQangYGBYTsDA0MOFg0ixBjgA3WiBZKcAAMDw3yoGgdCBqADGQYGhuVQ+f8MDAzfGRgYeEgxoB1JMwyfJ8UADqghuxkYGD4zMDCsZ2Bg8MBlwHMGBob7UDyfARIOMOdqINmM1VJ0ZyLj6wwMDLeh7MMMeNIBOXg4AADwHkmSVhVYJQAAAABJRU5ErkJggg==",
        oncommand: function(event) {
            var urls = {};
            addMenu.$$('img', null, true).forEach(function(a) {
                urls[a.src] = true;
            });
            urls = Object.keys(urls);
            if (urls.length === 0) return;
            addMenu.copy(urls.join('\n'));
        },
    },

    ];
    var menu = PageMenu({
        condition: 'image',
        insertBefore: 'context-viewimage',
        icon: 'image',
        accesskey: 'C',
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVQ4jWNgoAH4jwc3EGsALvHr+AxBtgmXvDg+Q/6j0fgswKqGkAHY1OI1AFsgkmTAMHPBQnIMoMgFxGDiTCVFDdk2UwQArSlPm8iO15EAAAAASUVORK5CYII=",
        onpopupshowing: syncHidden
    });
    menu(items);
    items.forEach(function(it) {
        if (it.command) css('#contentAreaContextMenu[addMenu~="image"] #' + it.command + '{ display: none !important; }')
    });
};

//圖片右鍵 保存等 二级菜單
new
function() {
    var items = [{
        label: '保存圖片',
        command: 'context-saveimage',
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR42mNkoBAwUssAByAOB2IOIvX9AeKNQLwFZsBzIJYk0fLXQCwKM+A/1DURQOwMxJ1AfIeAAfeBWBHdgN9AzALEa4A4FEkxDxBrAPEZQgYcB2ILIM4F4ilImrcDsQEQewLxEXwGgIAIEL9B02wD5X9BMgSnASDFyUBcCMSbkTQzIBmiCMSnsRlgA7URZPMHIBbAE/1YXfAZqpmY9IPVgP1EpgFHdAPeA7EgJQkJlIDcSTTgJBDPYBzw3AgApMktEXd8LEwAAAAASUVORK5CYII=",
    },
    {
        label: "重新載入圖片",
        accesskey: "T",
        oncommand: "gContextMenu.reloadImage();",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgElEQVQ4jcWSyw2AIBAF5+rNDuyE2AG9WIK1UQpVeMHLEggKLCHRSQgH9u3vAR+wzYovwMwkMZLEjogs4IAgx8ut6uQUgQVWuQNwaCt7EULawa5t3fGcdciFkFWv0UzYS7BITJW3EXKiO82AfIk5K8mdJqWN0UovbyrKj9Qb7UdupJYfIj9YalkAAAAASUVORK5CYII="
    },
    {
        command: 'context-viewimage',
        /*查看图像*/
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAgVBMVEUAAAD4+PgZGRlXV1f9/f3Z2dmfn5/09PTx8fHh4eHKysqzs7N0dHRgYGBHR0dDQ0MvLy8hISEeHh7Q0NC7u7uhoaGZmZmVlZWEhIRnZ2dTU1M/Pz8nJycSEhLp6eni4uLd3d3U1NTFxcWnp6eQkJCNjY2FhYWDg4NsbGxmZmY+Pj4UJ42CAAAAAXRSTlMAQObYZgAAAHxJREFUGNOdy8cNwzAUwFDqy3Kvcm/pff8Bo8BABjBv70D2Zp5ZNtR/RtqmrZ9Kcd7cyKAwJ9RtbX/25QJvkRHq6u5sDcSLUkvs5qonKwJIZpgTULnG03mAKqepVISF9sB7lYaw80PiKnV2devYHKNEyxW2Do+PlbwP2NcXHOgGBwDkvbYAAAAASUVORK5CYII="
    },
    {
        command: 'context-viewimageinfo',
        /*查看图像信息*/
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXklEQVQ4jaVTQQ4AMATzFq/y/49sFxIRoWiyU9eWDaIar+FLsBrwVCgqjEcmYku1Fqya0iSKvQFkgvRrJjiBBGUP5jnk3q2ClkCDzr+QmYzmIJqsJtFjvQsep22E8AGEZDOcIlQ9sgAAAABJRU5ErkJggg=="
    },
    ];
    var menu = PageMenu({
        label: "圖像另存爲",
        accesskey: "V",
        condition: 'image',
        insertBefore: 'context-viewimage',
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR42mNkoBAwUssAByAOB2IOIvX9AeKNQLwFZsBzIJYk0fLXQCwKM+A/1DURQOwMxJ1AfIeAAfeBWBHdgN9AzALEa4A4FEkxDxBrAPEZQgYcB2ILIM4F4ilImrcDsQEQewLxEXwGgIAIEL9B02wD5X9BMgSnASDFyUBcCMSbkTQzIBmiCMSnsRlgA7URZPMHIBbAE/1YXfAZqpmY9IPVgP1EpgFHdAPeA7EgJQkJlIDcSTTgJBDPYBzw3AgApMktEXd8LEwAAAAASUVORK5CYII=",
        onpopupshowing: syncHidden
    });
    menu(items);
    items.forEach(function(it) {
        if (it.command) css('#contentAreaContextMenu[addMenu~="image"] #' + it.command + '{ display: none !important; }')
    });
};

/*——————————选中文本右鍵——————————*/
//鏈接和选中文字(同时选中)的分割线
page({
    label: 'separator',
    insertAfter: "context-sep-copylink",
    condition: 'link&select noimage',
})
//圖片和选中文字(同时选中)的分割线
page({
    label: 'separator',
    insertAfter: "context-viewimageinfo",
    condition: 'image&select',
})

//搜索选中文本
new
function() {
    var menu = PageMenu({
        condition: "select",
        label: "搜索選中文本",
        accesskey: "S",
        insertBefore: "context-copy",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAdklEQVQ4jc2SsQ3AIAwEbwGK1NmFDdIwE3OxCCOkZYAU+RSRMEFyIuUkN7Z5vwH4IxtQgKYoyk2RgQokICiScnlmcgWWTm1RbeikaJpFUo9J47RsEdTznYB7BfclwvgZGxCfBC4nvY8UgX1WxOJVkdUj4jp84wDU6yD4kZGU+wAAAABJRU5ErkJggg==",
        onpopupshowing: function(event) {
            Array.slice(event.target.children).forEach(function(elem) {
                if (elem.id == "TVC-Universal") {
                    elem.hidden = !/ic.sjlpj.cn|bi.sjlpj.cn|tvc-mall.com|seculife.com|phonepartstore.com|cellzmate.com/.test(content.location.host) //可排除多個網站
                } else if (elem.id == "TVC-Back") {
                    elem.hidden = !/ic.sjlpj.cn/.test(content.location.host) //可排除多個網站
                }
            });
        }
    });
    var items = [
    //打開方式(默认當前頁面)，通过where 更改，具體tab(前台)、tabshifted(后台)、window(窗口)
    {
        label: "Google",
        url: "https://www.google.com/search?newwindow=1&safe=off&hl=en-US&q=%s",
        image: "https://www.google.com/favicon.ico",
        where: 'tab'
    },
    {
        label: "Bing",
        url: "https://www.bing.com/search?q=%s",
        image: "https://www.bing.com/sa/simg/bing_p_rr_teal_min.ico",
        where: 'tab'
    },
    {
        label: "DuNiang",
        url: "https://www.baidu.com/baidu?wd=%s&ie=utf-8",
        image: "https://www.baidu.com/img/baidu.svg",
        where: 'tab'
    },
    {
        label: "Sou",
        url: "http://www.so.com/s?ie=utf-8&q=%s",
        image: "http://www.haosou.com/favicon.ico",
        where: 'tab'
    },
    {},
    {
        label: "TC搜索流水号",
        id: "TVC-Universal",
        oncommand: function() {
            var Path = "\\..\\Software\\totalcmd64\\TOTALCMD64.EXE";
            var Folder = "X:";
            var str = addMenu.convertText('%s');
            addMenu.copy(str);
            addMenu.exec(Path, ["-search", Folder]);
        },
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADIElEQVQ4jYXMW0xScQDH8f+q9RAVVnM4oTIrEcWmTVtrqMCRCmea1tRuyrpZGWe1cmbJRdQIK5V0heElL9hm4SRbpA92cq2yHswuonkr6X49tR5P/npoPfRAPXz2ffuSdLpRkaipb4tONBsU2+26qrobNXfu9LoYhnExDONydlx31dQ7XZ03uq41tHQ0rc2yG1XZdReikypyCSHTCZVZSUesL5sKVRb/jNxQjUJLG7q7bsLtdqO7uwu6UjvWpJWj6qIT1gttSMiqQ/xWO6TqipfCyEORRJZqocOVRZw4vghStRW6siu4zdxCT08PensZnCiug3RdBaprO1Ftb0eG1oHkPU2Qriv/FhilTSCyVAsdoSrjlskMCFOVw3imHQ/67uPe3bt4+KAPhpOXEEqdhu2SG/amTqxMsmKFuhISysIKV+RSZE2KhZYozVzw6kKIFWUoLu/A08ePMNDfj6dPBnDe3o6UnTVo62DQ4HBDqjoDCXUaIXIzKwjLocjqxBI6VG7mlseaIJGfQnL2eeSbHMgvcuCYqRVH9M3QFjQiz9iCLftsWB5nhjjejKWyElYQsosiMetNdEhsCRehPAX5JivkaVbEpVb+Jf5P0yoRm1KB0NhSLFllZBcE76JIlEJHL47Rc4dPtMLjGcPgoG8ezzju9z0BlXYWoqjjLH9RNkXCZAW0MPI4ZzA58GliBB/Gnvs2PoKxxwNQb7IgQJrP8oXbKCKOOUoHhOdxOkMTPo4O4f2Ix6cPI0MY7e/H2o0n4S8+wvKEmRQJitLS/iGHOb2xBV+9L/B5csKnL5MTePFsEKrkUswP1rI8QSZFROK99Lygg5ze2IJvb734+nrSJ/aNF96hYSQkFWNe0IHfA/+g3TR/4X5Ob2jGj3ev8P2N17e3r/B6eBhUYhHminK+8wSbKeIn2kHzAjRcnsaA8cs2jDp8G2u1YaC2CkrZAZYXkP2MH5ieQGYLMrRzAjU/NRLFVLt0Fnf1H5zSWdzlcL8pxRL1EH9hlpO/KJMiM/yUcXMEqc3RgdHnaMG0gtz/yBHMLBQvVtXPD063zRXJl/0CTUBhIrbYoBsAAAAASUVORK5CYII=",
    },
    {
        label: "外網批量管理-SKU",
        id: "TVC-Universal",
        accesskey: "1",
        url: "http://ic.sjlpj.cn/Product/BatchManagementProductList?Sku=%s&IsNormal=true&IsDownShelf=true&IsLocked=true&IsForUpShelf=true&IsInPurchase=true&IsSupplyNormal=true&IsTemporaryOutStock=true&IsPermanentOutStock=true",
        image: "http://ic.sjlpj.cn/favicon.ico",
        where: 'tab'
    },
    {
        label: "外網批量管理-品名",
        id: "TVC-Universal",
        url: "http://ic.sjlpj.cn/Product/BatchManagementProductList?Sku=&KeyWord=%s&IsNormal=true&IsDownShelf=true&IsLocked=true&IsForUpShelf=true&IsInPurchase=true&IsSupplyNormal=true&IsTemporaryOutStock=true&IsPermanentOutStock=true",
        image: "http://ic.sjlpj.cn/favicon.ico",
        where: 'tab'
    },
    {},
    {
        label: "下架原因/重新上架-SKU",
        id: "TVC-Universal",
        accesskey: "2",
        url: "http://ic.sjlpj.cn/DownShelf/DownShelfOperationMgtList?Sku=%s",
        image: "http://ic.sjlpj.cn/favicon.ico",
        where: 'tab'
    },
    {
        label: "查詢/變更價格-SKU",
        id: "TVC-Universal",
        accesskey: "3",
        url: "http://ic.sjlpj.cn/PriceChangeRequest/UnChangedProductList?Sku=%s&IsFirstRequest=false",
        image: "http://ic.sjlpj.cn/favicon.ico",
        where: 'tab'
    },
    {
        label: "查詢價格變更記录-SKU",
        id: "TVC-Universal",
        accesskey: "4",
        url: "http://ic.sjlpj.cn/PriceChangeRequest/PriceChangeRequestList?Sku=%s&ProductName=",
        image: "http://ic.sjlpj.cn/favicon.ico",
        where: 'tab'
    },
    {
        label: "產品分類列表得分-SKU",
        id: "TVC-Universal",
        accesskey: "5",
        url: "http://ic.sjlpj.cn/ProductScore/CategoryList?type=1&SiteId=1&Sku=%s&CreateBeginDate=&CreateEndDate=&UpdateBeginDate=&UpdateEndDate=&IsFirstRequest=False",
        image: "http://ic.sjlpj.cn/favicon.ico",
        where: 'tab'
    },
    {
        label: "闗聯SKU",
        id: "TVC-Universal",
        accesskey: "6",
        url: "http://ic.sjlpj.cn/Product/ProductAssociatedSpuList?SpuId=&Sku=%s&BeginDate=&EndDate=&IsFirstRequest=true",
        image: "http://ic.sjlpj.cn/favicon.ico",
        where: 'tab'
    },
    ];
    menu(items);
};

//複製文本
new
function() {
    var items = [{
        command: 'context-copy',
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVQ4jWNgoAH4jwc3EGsALvHr+AxBtgmXvDg+Q/6j0fgswKqGkAHY1OI1AFsgkmTAMHPBQnIMoMgFxGDiTCVFDdk2UwQArSlPm8iO15EAAAAASUVORK5CYII="
    },
    {
        label: "批量複製链接URL",
        //by skofkyo
        accesskey: "H",
        condition: "select noinput",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxklEQVQ4jbWTLw6DMBjFf2ZmZg5VyxGw6F0AyQWQOA6whAv0Clxgd5icmsUhd4iJPkLXEla27CVNm/R7f/q1hT/A/ELOgafmEAUwpIjUwAhkQaoROKcm6YEbcACOwB1oUskzBo0rYPeSkfOEi/4VGuAhgXoPMQdauRuWm+mB8hO5U/HIe9MsrheThDYjGxVXgbAFTrgbaUOyYXlApZzW9k2wjhwyxa+I0co9U23nb/pnjOJ5uKgmehs5rjnFBnlGKaG1/7IfLwdcLCL/I9hSAAAAAElFTkSuQmCC",
        oncommand: function(event) {
            var urls = {};
            addMenu.$$('a:not(:empty)', null, true).forEach(function(a) {
                urls[a.href] = true;
            });
            urls = Object.keys(urls);
            if (urls.length === 0) return;
            addMenu.copy(urls.join('\n'));
        }
    },

    ];

    var menu = PageMenu({
        condition: 'select',
        insertBefore: 'context-paste',
        onpopupshowing: syncHidden,
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVQ4jWNgoAH4jwc3EGsALvHr+AxBtgmXvDg+Q/6j0fgswKqGkAHY1OI1AFsgkmTAMHPBQnIMoMgFxGDiTCVFDdk2UwQArSlPm8iO15EAAAAASUVORK5CYII="
    });
    menu(items);
    //page({ condition:'select', insertBefore:'context-sep-copylink' });
    items.forEach(function(it) {
        if (it.command) css('#contentAreaContextMenu[addMenu~="select"] #' + it.command + '{ display: none !important; }')
    });
};

//选取范围內复选框的 ON/OFF
page({
    label: "複選框的ON/OFF",
    class: "checkbox",
    condition: "select noinput nomailto nocanvas nomedia",
    accesskey: "X",
    insertBefore: "context-viewpartialsource-selection",
    oncommand: function(event) {
        var win = addMenu.focusedWindow;
        var sel = win.getSelection();
        Array.slice(win.document.querySelectorAll('input[type="checkbox"]:not(:disabled)')).forEach(function(e) {
            if (sel.containsNode(e, true)) e.checked = !e.checked;
        });
    }
});

/*——————————輸入框右鍵——————————*/

//快捷回复，打造多級菜單
new
function() {
    var QuickReplySub = PageMenu({
        label: "快速回覆",
        condition: "input noselect",
        accesskey: "W",
        insertBefore: "spell-undo-add-to-dictionary",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA6klEQVQ4jc2SIW7DQBBFBwRUWu16vf9VCiwIKGykHKWgRygsyAHCCnuEwgLDHKDABygMCAgMDAgscIktuc7WNcxIQ1b73oy+xuxqStIrcASaYUs6AGszsxDCoiiK1S8YWEvamdnyn54Be0nfKaXH/vRDCGExtqH3/l5SZWa3wFnSqb9BMwH+BGqgbiXPkwQ9+KPLpCzLp2EGWUEOTim9XHzMCVp4B5xH4b8EwJdzbg68dXCM8cHMbqYKGknvkqpuMrCPMd7lBEfn3HzwtgE2vcBmkk7eey4E7RXWNnJEkipgm82gtU865eurH5ZsTgQIYhNoAAAAAElFTkSuQmCC",
        //跟进depft更新
        oncommand: function(event) {
            var input_text = event.target.getAttribute('input_text');
            if (input_text) {
                addMenu.copy(input_text);
                setTimeout(function() {
                    goDoCommand("cmd_paste");
                },
                100);
            }
        },
        onpopupshowing: function(event) {
            Array.slice(event.target.children).forEach(function(elem) {
                if (elem.id == "Physics-Symbols" | elem.id == "Math-Symbols") {
                    elem.hidden = !/ic.sjlpj.cn/.test(content.location.host) //可排除多個網站
                }
            });
        },

    });
    QuickReplySub([{
        id: "QuickReply-sep",
        style: "display:none;"
    }]);
    page({
        label: "163|QQ|Gmail",
        tooltiptext: "左鍵: 163郵箱\n中鍵: QQ郵箱\n右鍵: Gmail郵箱",
        insertBefore: "QuickReply-sep",
        onclick: function(e) {
            switch (e.button) {
            case 0:
                addMenu.copy(addMenu.convertText('dupontjoy@163.com'));
                goDoCommand('cmd_paste');
                closeMenus(this);
                break;
            case 1:
                addMenu.copy(addMenu.convertText('dupontjoy@qq.com'));
                goDoCommand('cmd_paste');
                closeMenus(this);
                break;
            case 2:
                addMenu.copy(addMenu.convertText('dupont2305@gmail.com'));
                goDoCommand('cmd_paste');
                closeMenus(this);
                break;
            }
        },
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuElEQVQ4jc3SIQ7CQBCF4S8hQWCQKBQah+sJENwAj0UiuQAGjeQEWCwai8RhUPgmRXRICpRCMTDJbHY2+/55mV3+IcZIkdXMFEO4RHZrNJ3giJOgTXFA5wPxKIS90OYL5tijXSHu44xB1HcAWGKLVom4G7ZHhbMnAKyxQaNw1gp3s4e7pYBmANZRN6JelrgqBdw67rAK0PbB0VsA+TAXka8GWwn4JDLyN02+ECehNYxN3a98Cu2P4wq1e0SOXg0ncwAAAABJRU5ErkJggg=="
    });

    page({
        label: "用戶名",
        //input_text: "dupontjoy",
        onclick: function(e) {
            switch (e.button) {
            case 0:
                addMenu.copy(addMenu.convertText('dupontjoy'));
                goDoCommand('cmd_paste');
                closeMenus(this);
                break;
            }
        },
        insertBefore: "QuickReply-sep",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAfUlEQVQ4jc2T0QnAIAwFb5IuUhco1C6ti5RS10h/FIIYqQWhgXxE8i7hYQACIIMZUCGA4324GiQDYj10KdopAA/cOXcDIEC0AKdqugxAuxgAdE08gJTTG4B5Jm55clkz5bcaYJqoxRpSA9pFQyydnh/9xJFjWqlM/HLOsdAehABlcm57OHUAAAAASUVORK5CYII=",
    });

    page({
        label: "常用回覆~~~",
        tooltiptext: "左鍵: 感謝\n右鍵: 15字補丁",
        onclick: function(e) {
            switch (e.button) {
            case 0:
                addMenu.copy(addMenu.convertText('感謝樓主分享!'));
                goDoCommand('cmd_paste');
                closeMenus(this);
                break;
            case 2:
                addMenu.copy(addMenu.convertText('~~~爲神馬要15字，『漢賊不兩立，王業不偏安』~~~'));
                goDoCommand('cmd_paste');
                closeMenus(this);
                break;
            }
        },
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAm0lEQVQ4jc2Quw2EMBBEX0ZEE9ThCsgp42LqIKYOQro5icDRVXCXDNay+GQLEfAkS/7szKwXbqQDvpWryxm8gLkiaFbtiQUYtP+XjGoWL26AD9BWdNCqtrGXPbAW0m0XqzSJCRgr0ndGaRIbEDNJFvsWpUlEIDhDew5OEKQ5uFt6CfbEN+7PXpNrucTDDPzQSvihnoZWWrmhXuMHem9Lmy9WtnwAAAAASUVORK5CYII=",
        insertBefore: "QuickReply-sep",
    });

};

//貼上 二級菜單
new
function() {
    var items = [{
        command: 'context-paste',
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbklEQVQ4jWNgoAFoZWBg+M7AwPAfir9DxUjSKIskLkusQX8YGBj48RjADzUEJ/gPpY8gOR+Gj6CpwWsAMh8bJskAdP51BgaGBkoMEMdnCDEG4PUKIQMIylFsACwdkG0AehIm2QBSFBFtAD5MHQAA8vtEFZXqsUkAAAAASUVORK5CYII=",
    },
    {
        label: "標點(中轉英)",
        condition: "input",
        accesskey: "E",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAe0lEQVQ4ja2T0Q3AIAhE3y4u4zTu40DORT+ExFqtRXsJHxAPj0PhjggkDlGA4CHIIvKOiqDEz0qM0OZuLxLVxED1YQuZOrfLRJQgzc2zJkJV+SiOCEXr5kVUhcutzA5YfenPqoGZ/dqgHyfieFy5i1FT95qly48/3H+4AA6QJ51Bic5yAAAAAElFTkSuQmCC",
        oncommand: function() {
            goDoCommand("cmd_copy");
            var sel = getBrowserSelection();
            var txt = addMenu.convertText('%p');
            addMenu.copy(txt.replace(/(\s，\s|\s，|，\s|，)+/g, ", ").replace(/(\s。\s|\s。|。\s|。)+/g, ". ").replace(/(\s？\s|\s？|？\s|？)+/g, "? ").replace(/(\s！\s|\s！|！\s|！)+/g, "! ").replace(/(\s；\s|\s；|；\s|；)+/g, "; ").replace(/(\s: \s|\s: |: \s|: )+/g, ": ").replace(/(\s（\s|\s（|（\s|（)+/g, " (").replace(/(\s）\s|\s）|）\s|）)+/g, ") ").replace(/(\s—\s|\s—|—\s|—)+/g, " - ").replace(/(\s＆\s|\s＆|＆\s|＆)+/g, " & ").replace(/(\s…\s|\s…|…\s|…)+/g, "... ").replace(/(\s、\s|\s、|、\s|、)+/g, ", ").replace(/(\s’\s|\s’|’\s|’)+/g, "'").replace(/(\s“\s|\s“|“\s|“)+/g, addMenu.convertText(' "')).replace(/(\s”\s|\s”|”\s|”)+/g, addMenu.convertText('"')));
            goDoCommand("cmd_paste");
        },
    },
    {
        label: "插入BBCode",
        id: "BBCode",
        accesskey: "B",
        tooltiptext: "左鍵: 代碼[code]\n中鍵: 鏈接[url]\n右鍵: 圖片[img]",
        onclick: function(e) {
            switch (e.button) {
            case 0:
                addMenu.copy(addMenu.convertText('[code]%P[/code]'));
                goDoCommand('cmd_paste');
                closeMenus(this);
                break;
            case 1:
                addMenu.copy(addMenu.convertText('[url]%P[/url]'));
                goDoCommand('cmd_paste');
                closeMenus(this);
                break;
            case 2:
                addMenu.copy(addMenu.convertText('[img]%P[/img]'));
                goDoCommand('cmd_paste');
                closeMenus(this);
                break;
            }
        },
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJ1BMVEUAAAAAAADd3d1EREQiIiKIiIh3d3czMzPMzMyqqqpVVVURERHu7u6A1ky6AAAAAXRSTlMAQObYZgAAADtJREFUCNdjwASCECDAIADhIzMYBQsMpRWADBaGCiO2ALCIg6EgRCTViHMBjLEILFVjKN2AxRyEFRgAAGitCNm3Ki02AAAAAElFTkSuQmCC"
    },

    ];
    var menu = PageMenu({
        condition: 'input',
        insertBefore: 'context-copy',
        icon: 'input',
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbklEQVQ4jWNgoAFoZWBg+M7AwPAfir9DxUjSKIskLkusQX8YGBj48RjADzUEJ/gPpY8gOR+Gj6CpwWsAMh8bJskAdP51BgaGBkoMEMdnCDEG4PUKIQMIylFsACwdkG0AehIm2QBSFBFtAD5MHQAA8vtEFZXqsUkAAAAASUVORK5CYII=",
        onpopupshowing: function(event) {
            Array.slice(event.target.children).forEach(function(elem) {
                if (elem.id == "BBCode") {
                    elem.hidden = !/bbs.kafan.cn|firefox.net.cn/.test(content.location.host) //可排除多個網站
                }
            });
        },
    });
    menu(items);
    items.forEach(function(it) {
        if (it.command) css('#contentAreaContextMenu[addMenu~="input"] #' + it.command + '{ display: none !important; }')
    });
};

/*——————————鏈接右鍵——————————*/
page({
    label: "用新分頁開啟鏈結",
    condition: "link",
    position: 1,
    tooltiptext: "左鍵: 用新分頁開啟鏈結\n右鍵: 複製鏈接網址",
    onclick: function(e) {
        switch (e.button) {
        case 0:
            gBrowser.addTab(addMenu.convertText("%RLINK%"));
            closeMenus(this);
            break;
        case 2:
            addMenu.copy(addMenu.convertText("%RLINK%"));
            closeMenus(this);
            break;
        }
    },
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZ0lEQVQ4jWNgGCyAjYGBYRIDA8NrBgaG/0Tg11D1bDADJjEwMOxmYGAQJ9JCcaj6VpjAaxI0IxvyGsb5j0chXjkmEm3FABQbwIJDHN3ZyHxGYjQQLTfwYUCMAVj9TDUXwEzHF1C0BQCpARnHXF2p+wAAAABJRU5ErkJggg=="
})

page({
    label: "VIP視頻雲解析",
    condition: "link",
    position: 2,
    tooltiptext: "左鍵: 紫狐\n中鍵: 无名小站\n右鍵: 迅雷",
    onclick: function(event) {
        var url = addMenu.convertText("%RLINK_OR_URL%");
        if (event.button === 0) gBrowser.selectedTab = gBrowser.addTab("http://yun.zihu.tv/play.html?url=" + url);
        if (event.button === 1) gBrowser.selectedTab = gBrowser.addTab("http://www.wmxz.wang/video.php?url=" + url);
        if (event.button === 2) gBrowser.selectedTab = gBrowser.addTab("http://vod.xunlei.com/iplay.html?uvs=luserid_5_lsessionid&from=vlist&url=" + url);
    },
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVQ4je3RIUzDQBjF8V9CMotEoTCYufopBBqLx1ZOYiZn0JVIVC0WXTuJm6mqmpmY6Dt2CYIESXjJ9a7/vn7fvTv+hJ6wRocPTNhnfg+fcMCA1/gfsIIjtmgLiC5SfIPrsCZsiz6F58cvNcInbgJKhBHPlXEd3xgPLLGTnPeBh2T7qh7tMz/GI76+VH+p4JBd1NHK+1A16Mzn5iod7n4KXGmVfy4LaALawAVus7s260W+tYn3reHS+Wom8wF1Gbtkn/AW77+iE6SaONczlmqVAAAAAElFTkSuQmCC"
})

/*——————————頁面右鍵——————————*/
//多功能菜單
new
function() {
    var items = [{
        label: "複製標題&地址",
        accesskey: "C",
        onclick: function(e) {
            switch (e.button) {
            case 0:
                addMenu.copy(addMenu.convertText("%TITLE%") + "\n" + addMenu.convertText("%RLINK_OR_URL%"));
                closeMenus(this);
                break;
            }
        },
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVQ4jWNgoAH4jwc3EGsALvHr+AxBtgmXvDg+Q/6j0fgswKqGkAHY1OI1AFsgkmTAMHPBQnIMoMgFxGDiTCVFDdk2UwQArSlPm8iO15EAAAAASUVORK5CYII="
    },
    {
        label: "Favicon|Base64",
        tooltiptext: "左鍵: Favicon地址\n右鍵: Favicon的Base64碼",
        onclick: function(e) {
            switch (e.button) {
            case 0:
                addMenu.copy(addMenu.convertText("%FAVICON%"));
                closeMenus(this);
                break;
            case 2:
                addMenu.copy(addMenu.convertText("%FAVICON_BASE64%"));
                closeMenus(this);
                break;
            }
        },
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2UlEQVQ4jb2SvUpDYRBE9ynuN3umFEQklURTBUtJtLKyFKz0HXy75AkklY0ikng7O1NdGxWJ/1/AgWnPnIWNWDfA1HZXU2AStrvacdvd/wEkjYBHSeNvAZk5zMzhJ4DxjwDbR0ALzDPz4E8nZOYx8FBKGUjaAxaSRr8CACfAHNh5p7wLtJIOIyJKKT3b18DFB4Dt+1JKb3UhM/tAa/sSWNg+B26As1WDra80M7Nv+0rSfkRE0zQbwK3t0+o/sL1p+26tR5K0/QpY1gBeTJ4CmNle1hSY1o6/5Rn8GGw2HC8ubAAAAABJRU5ErkJggg=="
    },
    {
        label: "UTF-8|Big5|GBK",
        tooltiptext: "左鍵: UTF-8\n中鍵: Big5\n右鍵: GBK",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlUlEQVQ4ja2TwQ2AIAxF3wau4QCuwCxcPTKMI7iBO7iCA3BiArxUJaSCik2a0NL/+1MK/Gg9MAMBiDcepKbXwB4Yga7QpJMan5PMcvHUnGBOC5XOmpKQJuILsIpJg5VraA7Y5OwBWyMYBHScYxb7JwSpAs1NiWDimq6RvE3ipabAiMyoKCnOoPkZmxepeZUPks+f6bPtGg1LLkKBszsAAAAASUVORK5CYII=",
        onclick: "var code = ['UTF-8', 'Big5', 'GBK']; BrowserSetForcedCharacterSet(code[event.button]);closeMenus(this);"
    },

    ];
    var menu = PageMenu({
        label: "多功能菜單",
        accesskey: "M",
        condition: 'normal',
        insertBefore: 'context-openlinkincurrent',
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAABBJREFUCNdjgID6fxCaIBcAcUwEeC1dweYAAAAASUVORK5CYII="
    });
    menu(items);
};

/*——————————書籤右鍵——————————*/
/*爲書籤右鍵添加 移動 功能*/
page({
    label: '移動...',
    accesskey: "M",
    insertAfter: "placesContext_newSeparator",
    command: "placesCmd_moveBookmarks",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAPklEQVQ4jWNgGCrAjoGB4ReUptgQf3yK/hOJyXIJUS4gpNmBHM1k20aWP/0p0WzHQHws0MYFMOBADUOGEAAAtLMgYRGzlKoAAAAASUVORK5CYII=",
})

/*——————————移動圖標和菜單——————————*/
//移動圖標，代替Movebutton.uc.js，需配合RebuildWhenStart.uc.js，可惜對有的圖標還是無力
new
function() {
    //幾個擴展圖標
    tab({
        id: "imageSearch",
        //黑螃蟹的UC脚本, 右键可上传再搜索
        label: "相似圖片",
        condition: "image",
        accesskey: "Z",
        insertAfter: "context-sep-copylink",
        clone: false,
        // 不克隆，直接改在原来的菜單上面
    });

};

/*————————————————————*/
//隱藏相同項。必須，不能刪除
function syncHidden(event) {
    Array.slice(event.target.children).forEach(function(elem) {
        var command = elem.getAttribute('command');
        if (!command) return;
        var original = document.getElementById(command);
        if (!original) {
            elem.hidden = true;
            return;
        };
        elem.hidden = original.hidden;
        elem.collapsed = original.collapsed;
        elem.disabled = original.disabled;
    });
};