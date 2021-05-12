var loadingtem='<div id="loadingToast"><div class="weui-mask_transparent"></div><div class="weui-toast"><i class="weui-loading weui-icon_toast"></i><p class="weui-toast__content">{{>msg}}</p></div></div>';
var toastoktem='<div id="toast"><div class="weui-mask_transparent"></div><div class="weui-toast"><i class="weui-icon-success-no-circle weui-icon_toast"></i><p class="weui-toast__content">{{if msg}}{{>msg}}{{else}}已完成{{/if}}</p></div></div>';
var dialogtem1='<div class="js_dialog" id="iosDialog1"><div class="weui-mask"></div><div class="weui-dialog">{{if title}}<div class="weui-dialog__hd"><strong class="weui-dialog__title">{{>title}}</strong></div>{{/if}}<div class="weui-dialog__bd">{{:content}}</div><div class="weui-dialog__ft"><a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">{{>btn1}}</a><a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">{{>btn2}}</a></div></div></div>';
var dialogtem2='<div class="js_dialog" id="iosDialog2"><div class="weui-mask"></div><div class="weui-dialog"><div class="weui-dialog__bd">{{>msg}}</div><div class="weui-dialog__ft"><a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">{{if btn}}{{>btn}}{{else}}知道了{{/if}}</a></div></div></div>';
var dialogtem3='<div class="js_dialog" id="iosDialog2"><div class="weui-mask"></div><div class="weui-dialog"><div class="weui-dialog__bd">{{>msg}}</div></div></div>';
var actionsheettemp='<div id="actionsheet"><div class="weui-mask" id="iosMask"></div><div class="weui-actionsheet" id="iosActionsheet"><div class="weui-actionsheet__menu">{{for options}}<div class="weui-actionsheet__cell" data="{{>value}}">{{>name}}</div>{{/for}}</div><div class="weui-actionsheet__action"><div class="weui-actionsheet__cell" id="iosActionsheetCancel">取消</div></div></div></div>';
var loadingmoretemp='<div class="weui-loadmore"><i class="weui-loading"></i><span class="weui-loadmore__tips">正在加载</span></div>';
var windowtemp='<div class="mobius-modal modal-open" style="background: rgba(0,0,0,.6);" _v-05a6251c="" ><div class="mobius-modal-container"><div class="mobius-modal-header titleShow"><span>{{>title}}</span> <span class="modal-close">x</span></div><div class="mobius-modal-content"><div class="mt10" _v-05a6251c=""> <div class="mb20" _v-05a6251c="" style="padding:10px;padding-bottom:0px"><div style="text-align:center;" id="qrcode"></div><div style="text-align:center;" >{{:temp}}</div></div>{{if btnname}}<div class="modal-footer justify-end" ><button class="mobius-btn btn-primary" _v-05a6251c="" > {{>btnname}} </button> </div>{{/if}}</div></div></div>';
var Haier={
	showLoading:function(msgstr){
		  $("#loadingToast").remove();
		  var html = $.templates(loadingtem).render({msg:msgstr});   
		  $("body").append(html);
	},
	hideLoading:function(){
		 setTimeout(function () {
			 $("#loadingToast").fadeOut(100);
			 $("#loadingToast").remove();
         }, 300);
	},
	showOk:function(msgstr,fun){
		  $("#toast").remove();
		  var html = $.templates(toastoktem).render({msg:msgstr});   
		  $("body").append(html);
		  var $toast = $('#toast');
		  setTimeout(function () {
              $toast.fadeOut(100);
              if(fun&&typeof(fun)=="function")
            	  fun();
          }, 1300);
	},
	toast:function(msgstr,btnstr){
		  $(".js_dialog").remove();
		  var html = $.templates(dialogtem2).render({msg:msgstr,btn:btnstr});   
		  $("body").append(html);
		  $('.js_dialog').find('.weui-dialog__btn').click(function(){
	            $(this).parents('.js_dialog').fadeOut(200);
	      });
	},
	showTip:function(msgstr,fun){
		  $(".js_dialog").remove();
		  var html = $.templates(dialogtem2).render({msg:msgstr});   
		  $("body").append(html);
		  setTimeout(function () {
			  $(".js_dialog").remove();
              if(fun&&typeof(fun)=="function")
            	  fun();
          },1300)
	},
	showTipWithoutBtn:function(msgstr,fun){
		  $(".js_dialog").remove();
		  var html = $.templates(dialogtem3).render({msg:msgstr});   
		  $("body").append(html);
		  setTimeout(function () {
			  $(".js_dialog").remove();
            if(fun&&typeof(fun)=="function")
          	  fun();
        }, 1300);
	},
	confirm:function(msgstr,btnstr1,btnstr2,title,fun,fun1){
		  $(".js_dialog").remove();
		  var html = $.templates(dialogtem1).render({content:msgstr,btn1:btnstr1,btn2:btnstr2,title:title});   
		  $("body").append(html);
		  $('.js_dialog').find('.weui-dialog__btn').click(function(){
	            $(this).parents('.js_dialog').fadeOut(200);
	      });
		  $('.js_dialog').find(".weui-dialog__btn_primary").click(function(){
	            if(fun&&typeof(fun)=="function")
	            	  fun();
	      });
		  $('.js_dialog').find('.weui-dialog__btn_default').click(function(){
			    if(fun1&&typeof(fun1)=="function")
          	      fun1();
	      });
	},
	actionsheet:function(options){
		  $("#iosMask").remove();
		  var html = $.templates(actionsheettemp).render({options:options});   
		  $("body").append(html);
		  var $iosActionsheet = $('#iosActionsheet');
	      var $iosMask = $('#iosMask');
          function hideActionSheet() {
	            $iosActionsheet.removeClass('weui-actionsheet_toggle');
	            $iosMask.fadeOut(200);
	      }
          $iosMask.bind('click', hideActionSheet);
	      $('#iosActionsheetCancel').bind('click', hideActionSheet);
	      $iosActionsheet.addClass('weui-actionsheet_toggle');
          $iosMask.fadeIn(200);
	},
	loadingMore:function(id){
		  $(".weui-loadmore").remove();
		  if(id== undefined){
			  $("body").append(loadingmoretemp);
		  }else{
			  $(id).append(loadingmoretemp);
		  }
	},
	hideLoadingMore:function(id){
		  setTimeout(function () {
			  $(".weui-loadmore").fadeOut(100);
				 $(".weui-loadmore").remove();
	         }, 300);
	},showwindow:function(str,title,fun,btnname){
		var html = $.templates(windowtemp).render({temp:str,title:title,btnname:btnname});   
		$("body").append(html);
		var _this=$(this);
		$(".modal-close").click(function(){
			$(".mobius-modal").remove();
		});
		$(".mobius-modal .btn-primary").click(function(){
			 $(".mobius-modal").css("z-index","10");
			 if(fun&&typeof(fun)=="function"){
				 fun(this);
			 }
		});
	}
};
var common ={
		showDownloadDialog : function(b) {
		    var c = $("#download-dialog");
		    if ("undefined" == typeof c || 0 == c.length) {
		        var d = '<div id="download-dialog" class="display-none"><div class="mask"></div><div class="main"><p class="title">提示</p><div class="msg">' + b + '</div><div class="confirm-btn-box clearfix "><a class="cancel-btn float-left-box" href="javascript:void(0);">取消</a><a class="confirm-btn float-left-box download-link" target="_blank" href="javascript:void(0);">免费下载</a></div></div></div>';
		        document.body.insertAdjacentHTML("beforeEnd", d),
		        c = $("#download-dialog"),
		        superJs.addEvent($("#download-dialog .cancel-btn"), "click",
		        function() {
		        	var b = $("#download-dialog");
		            b.hide();
		        }),
		        $(".download-link").attr("href",superVersion.getLink("talkMobile").link)
		    }
		    b && ($(".msg").innerHTML = b),c.show(),c.attr("class","");
		    
		    var e = $(".main"),f = e.clientHeight;
		   
		    e.css("margin-top","-" + f / 2 + "px");
		},
		getIssueTimeDesc: function(dateStr) {
			var minute = 1000 * 60;
		    var hour = minute * 60;
		    var day = hour * 24;
		    var halfamonth = day * 15;
		    var month = day * 30;
		    function getDateTimeStamp(dateStr){
		        return Date.parse(dateStr.replace(/-/gi,"/"));
		    }

		    function getDateDiff(dateTimeStamp) {
		        var now = new Date().getTime();
		        var diffValue = now - dateTimeStamp;
		        if (diffValue < 0) {
		            //若日期不符则弹出窗口告之
		            //alert("结束日期不能小于开始日期！");
		        }
		        var monthC = diffValue / month;
		        var weekC = diffValue / (7 * day);
		        var dayC = diffValue / day;
		        var hourC = diffValue / hour;
		        var minC = diffValue / minute;
		        var result = '';
		        if (monthC >= 1) {
		            //result = parseInt(monthC) + "个月前";
		            result = '';
		        }
		        else if (weekC >= 1) {
		            //result = parseInt(weekC) + "周前";
		            result = '';
		        }
		        else if (dayC >= 1) {
		            result = parseInt(dayC) + "天前";
		        }
		        else if (hourC >= 1) {
		            result = parseInt(hourC) + "小时前";
		        }
		        else if (minC >= 1) {
		            result = parseInt(minC) + "分钟前";
		        } else if (minC < 1) {
		            result = "刚刚";
		        }
		        return result;
		    }

		    var result = getDateDiff(getDateTimeStamp(dateStr));
		    if(result==''){
		        result = moment(dateStr).format('YYYY-MM-DD hh:mm');
		        if(result == 'Invalid date'){
		            return '';
		        }
		    }
		    return result;
		},
		unix_to_datetime:function (unix) {
			 var date = new Date(unix*1000); //实例化一个Date对象
			    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
			    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
			    var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
			    var mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
			    var ss = date.getSeconds() < 10 ? "0"+date.getSeconds():date.getSeconds();
			    return date.getFullYear() + "-" + month + "-" + currentDate+" "+hh+":"+mm+":"+ss;
			    //返回格式：yyyy-MM-dd hh:mm:ss
		},
		getReadCountDesc : function(a) {
		    var b;
		    return b = a > 1e8 ? Math.floor(a / 1e8) + "亿": a > 1e4 ? Math.floor(a / 1e4) + "万": a
		}
		}
//添加cookie
var setCookie = function(c_name, value, expiredays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	cookieVal = c_name + "=" + escape(value)
			+ ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())+";path=/";//   
	//alert(cookieVal);
	document.cookie = cookieVal;
};//获取cookie
function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1)
				c_end = document.cookie.length;//   
			//document.write(unescape(document.cookie.substring(c_start, c_end)) + "<br>");
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
}
// /删除cookie
function delCookie(NameOfCookie) {
	// 该函数检查下cookie是否设置，如果设置了则将过期时间调到过去的时间;
	// 剩下就交给操作系统适当时间清理cookie啦
	if (getCookie(NameOfCookie)) {
		document.cookie = NameOfCookie + "="
				+ "; expires=Thu, 01-Jan-70 00:00:01 GMT"+";path=/";
	}
}
localData = {//本地存储引擎
        hname:location.hostname?location.hostname:'localStatus',
        isLocalStorage:window.localStorage?true:false,
        dataDom:null,
 
        initDom:function(){ //初始化userData
            if(!this.dataDom){
                try{
                    this.dataDom = document.createElement('input');//这里使用hidden的input元素
                    this.dataDom.type = 'hidden';
                    this.dataDom.style.display = "none";
                    this.dataDom.addBehavior('#default#userData');//这是userData的语法
                    document.body.appendChild(this.dataDom);
                    var exDate = new Date();
                    exDate = exDate.getDate()+30;
                    this.dataDom.expires = exDate.toUTCString();//设定过期时间
                }catch(ex){
                    return false;
                }
            }
            return true;
        },
        set:function(key,value){
            if(this.isLocalStorage){
                window.localStorage.setItem(key,value);
            }else{
                if(this.initDom()){
                    this.dataDom.load(this.hname);
                    this.dataDom.setAttribute(key,value);
                    this.dataDom.save(this.hname)
                }
            }
        },
        get:function(key){
            if(this.isLocalStorage){
                return window.localStorage.getItem(key);
            }else{
                if(this.initDom()){
                    this.dataDom.load(this.hname);
                    return this.dataDom.getAttribute(key);
                }
            }
        },
        remove:function(key){
            if(this.isLocalStorage){
                localStorage.removeItem(key);
            }else{
                if(this.initDom()){
                    this.dataDom.load(this.hname);
                    this.dataDom.removeAttribute(key);
                    this.dataDom.save(this.hname)
                }
            }
        }
}

//两个浮点数求和
function acjia(num1,num2){
	
 var r1,r2,m;
 try{
	   r1 = num1.toString().split('.')[1].length;
 }catch(e){
	   r1 = 0;
 }
 try{
	   r2=num2.toString().split(".")[1].length;
 }catch(e){
	   r2=0;
 }
 m=Math.pow(10,Math.max(r1,r2));
 // return (num1*m+num2*m)/m;
 return Math.round(num1*m+num2*m)/m;
}
//两个浮点数相减
function acjian(num1,num2){
 var r1,r2,m;
 try{
	   r1 = num1.toString().split('.')[1].length;
 }catch(e){
	   r1 = 0;
 }
 try{
	   r2=num2.toString().split(".")[1].length;
 }catch(e){
	   r2=0;
 }
 m=Math.pow(10,Math.max(r1,r2));
 n=(r1>=r2)?r1:r2;
 return (Math.round(num1*m-num2*m)/m).toFixed(n);
}
/** 
 *　方法:Array.remove(index) 
 *　功能:删除数组元素. 
 *　参数:index删除元素的下标. 
 *　返回:在原数组上修改数组 
 */  
Array.prototype.remove=function(index)  
{  
	if(isNaN(index)||index>this.length){return false;}  
	for(var i=0,n=0;i<this.length;i++){  
	    if(this[i]!=this[index]){  
           this[n++]=this[i];
        }
	 }
	this.length-=1;
};
/** 
 *　方法:Array.baoremove(index) 
 *　功能:删除数组元素.我们也可以用splice来实现 
 *　参数:index删除元素的下标 
 *　返回:在原数组上修改数组 
 */  
Array.prototype.baoremove = function(index)  
{  
  if(isNaN(index)||index>this.length){return false;}  
  this.splice(index,1);  
}  
/* 
 *  方法:Array.remove(dx) 
 *  功能:根据元素值删除数组元素. 
 *  参数:元素值 
 *  返回:在原数组上修改数组 
 *  作者：pxp 
 */  
Array.prototype.indexOf = function (val) {  
    for (var i = 0; i < this.length; i++) {  
        if (this[i] == val) {  
            return i;  
        }  
    }  
    return -1;  
};  
Array.prototype.removevalue = function (val) {  
    var index = this.indexOf(val);  
    if (index > -1) {  
        this.splice(index, 1);  
    }  
};  
  
  
/* 
 *  方法:Array.remove(dx) 
 *  功能:根据元素位置值删除数组元素. 
 *  参数:元素值 
 *  返回:在原数组上修改数组 
 *  作者：pxp 
 */  
Array.prototype.remove = function (dx) {  
    if (isNaN(dx) || dx > this.length) {  
        return false;  
    }  
    for (var i = 0, n = 0; i < this.length; i++) {  
        if (this[i] != this[dx]) {  
            this[n++] = this[i];  
        }  
    }  
    this.length -= 1;  
}; 