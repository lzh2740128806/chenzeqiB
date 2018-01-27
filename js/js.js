// JavaScript Document
(function(global){
/*背景图data*/
var bgdata1='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAADbCAMAAADj0QVTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAylpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEUzQkFBNUMwMjc2MTFFODgxMzU5OERGNDRERTU2NkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEUzQkFBNUIwMjc2MTFFODgxMzU5OERGNDRERTU2NkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOmUwYzUwOTc1LWI3NjMtM2Q0MC05MWFiLWI0NjU2YjRkNmYyMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplMGM1MDk3NS1iNzYzLTNkNDAtOTFhYi1iNDY1NmI0ZDZmMjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Lh9FvAAADAFBMVEVnLBCnlZP9kEZtRjavMTLbRUHpOjr8tlpvUEjNjzP/hIa5q6mTaTT6tVRvb2/cdwrjeQ1TJhPTCwv0enpuNyL0s0T/x1T2s0uQ0/9xRhn5mXfLlUhjEQ3q5uWMTxBJFArRamjRQEH+xUfVrFZyt/KqV03CtrSRZxuKTkazi0j9pEf9ihLxsT7zlSuQLSxYMijtdHT/43Hk3t3/1Gudi4myZkyRjv6Gq/7oDQ6DZVp43P8yDAS6hSjDOjv/63XTycjnexCCAwH/7M/e19Vga5L/qIX/zWaNc+OpUgT2iQyDOQP/7VL+QEL/2W2hbR39/f382Iz+t1/+bkcAAAD/3m9MSUz/+5z/y2XjtVp/eHiEamWleTyUe3b4PD329PPFdFeIVijiiWmldiL8tUnukXDOxcTOcDH9vEm5fTr8yzj/wGKjZyfrhxv+6b2mBAPKWjTkoUL/vlqzeChaMlKEQjX8u0HtqDzYFhamj//rggvrP0D/zmr/1LAvLzH4ozj/v1HCZAfeIiLrcj6Wgn9dgZ7vsTrhpVGUXCLZpDiLcGrkLS7/8+DXMzHpw2IwJAnWgGJ7XlauVSl+SyLQs2ORdW6eqf/4tU//0Wf6tkT7rUpXQBH+Tjn/+4D+1Ffw7e2hbzb90UmDXDrFBgacU0MXAwH0uUpVU2H0w2H7kBliZGVxHhrwu1z/xYD/V0qTSUD4u1PY0M/9fn/cjIr7+fj9XVH2zGbJv76xoZ//zVzHchbdcG9xmNH/oH2JHh31IySiJCLSawbXdBHpvF/0s1i9+P8bFAX5uSfygRL4Z2L+gFa/KSbzzEjCXQVoRHgXFhi+YgzzuD//xmf/lQn/x2Czbyv6zmU7Rln//F6dSB/QcgVhPzjwy2VIICrEMC99XBj20WblnTSeh4G8NDf59/f/73fsj24hJCb4yWP+TUz3oJ/9hWv/k2Y7Oz7s2Ybizn1/WzD/8O0WFiDncXEzGRp/XLX/53O70//GoVT50mn423PCYV3/4E7psS6uGxzesT7///+GhFnUAAABAHRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AU/cHJQAAJXFJREFUeNrsnQ9ck3X+wJ85lPHH9MlHbWzwdBojongcf9I5GHgEATGNmDdkEwkjJlymiHZIpcUF4hnuJolwdyAyK1chHsU8gyg7z0vr1LBfuZQTxbL71fn7aTvKfrXf5/s8+/NsbCh/ZvJ6+WEoDNjzeX8//7/PtgezjHfBbhHcIrhFcIvgFsEtghtGUKDlVeeOZ4K20w/OfYA7nglyvn3pP399uWMcE2gffGnuXx8IGMcEojX3z317cft4jmQeSUlzxnEcBPM+euCB3z5AJYxXglzq25deemnu/LtOJ41TgoqPfnP//XPn/mf+29zxSdC+5kGaYNH8+YvbxiVB0prfPIgIGu+Y/9uA8UpwPyK4a/78B8YnQS7FeNFdd83fUzA+IznnW4Zg/l3UOM1Fwachm86FbPpMwTglsLSbPvrt/W8/QInGZ0XLTeD08UicwkmsupqTNN4Izou0hK748bP3PPvss8tnrvIr5nNjgscRQXCFSff4hPrJk+vvqV++fHnhhp1/2vmTilgSNV4IOPjvJ9wDQv9TX18/c/n2DYUrdh6Nw2PGB4GEmHDPBBA7wY4dy8uffuL7FT8czdOOBwLeZ7T+CMFug5lrv3z4d7/bv+KhJt7NT5Dz2X9PsFlgAg1Qv2P5jsLjfyv85aJ/rvg0/7abnUBETJjwwSAb7NhdWLj2b08sOrrzIX7AzUqQxAxi+PM2AEckIxsUFs5a+7dfPrHioaP4eZStOm46gmCKQDOA8TMAGGyD5YW7Z+2eteJPTxxd8WkTJKR2LhFwsxFwtg0Y4T/qeYf+TDKy2mB34ayjs45///3RH45SiyyNzd/wbjYCyb8lUK8K0id88MFhuxtBOdtQuGHWjBkzoKTtnDXr6NGdO3c+1AsexPuGt+jmIjjP/QbNwtVPWp0ItIc4OPu85vGTJ0+WlGj8/NbtnvHDDz8AwaeCHBiht4WLbi6CgPBtqN5yn2fW//nHf68jcKlUr9dnZcEN/tGTDXklP+186KGH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';
	var isNotupload=true;
	/*创建canvas画布*/
	var stage = new createjs.Stage("demoCanvas"); //创建画布
	var bg = new createjs.Bitmap(bgdata1); //创建背景图
	
	bg.regX = 0, bg.regY = 0, bg.x = 0, bg.y = 0; //设置背景图位置
	stage.addChild(bg); //放置背景图到canvas画布
	stage.update();
	createjs.Ticker.setFPS(5);
	createjs.Ticker.addEventListener("tick", tick);

	function tick(event) {
		stage.update(event);
	}

    	/*上传图片*/
	document.getElementById('inputimg').onchange = function() {		 
	    var fileObj = document.getElementById('inputimg').files[0];
		if (document.getElementById('inputimg').files.length === 0) {
			return;
		}
		
		var oFile = document.getElementById('inputimg').files[0];

		//var oFile =json.url;
		if (!rFilter.test(oFile.type)) {
			alert("You must select a valid image file!");
			return;
		}
		oFReader.readAsDataURL(oFile);		
	};

	/*上传图片的初始位置 放大倍数及旋转角度*/
	var elePos = {
		x: 80,
		y: 500,
		s: 1,
		a: 0,
		w:100,
		h:100
	}
	var scale = 1,
		angle = 0,
		gestureArea = document.getElementById('gesture-area'); //手势区域
	var stageplay=1;

	/*调整图片位置*/
	interact(gestureArea).gesturable({
		onstart: function(event) {

		},
		onmove: function(event) {
			if (typeof imgthis == 'undefined') {
				return;
			}
			scale = scale * (1 + event.ds);
			angle += event.da;
			x = (parseFloat(elePos.x) || 0) + event.dx, y = (parseFloat(elePos.y) || 0) + event.dy;
			elePos.x = x;
			elePos.y = y;
			elePos.s = scale;
			elePos.a = angle;
			imgthis.scaleX = elePos.s, imgthis.scaleY = elePos.s, imgthis.rotation = elePos.a, imgthis.x = elePos.x, imgthis.y = elePos.y;

			stage.update();
		},
		onend: function(event) {}
	}).draggable({
		onmove: dragMoveListener
	});


	function dragMoveListener(event) {
		if (typeof imgthis == 'undefined') {
			return
		}
		x = (parseFloat(elePos.x) || 0) + event.dx, y = (parseFloat(elePos.y) || 0) + event.dy;
		s = (parseFloat(elePos.s) || 1), a = (parseFloat(elePos.a) || 0);
		imgthis.scaleX = elePos.s, imgthis.scaleY = elePos.s, imgthis.rotation = elePos.a, imgthis.x = elePos.x, imgthis.y = elePos.y;
		elePos.x = x;
		elePos.y = y;
		console.log('*************'+elePos.x)
		console.log('*************'+elePos.y)
		stage.update();
	}

	// 上传图片
	var imgthis;
	var oFReader = new FileReader(),
		rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
	oFReader.onload = function(oFREvent) {
		stage.removeChild(imgthis);
		imgthis = new createjs.Bitmap(oFREvent.target.result);
		//document.getElementById('show').src=oFREvent.target.result;
		var image=new Image();
		setTimeout(function(){
		image.src=oFREvent.target.result;
		console.log('img width:'+image.width+'  img height:'+image.height)
		var imgWidth=image.width;
		var imgHeight=image.height;

		var imgFaceWidth=imgWidth*elePos.w/100;
		var imgFaceHeight=imgHeight*elePos.h/100;
		var sizescale=448/imgFaceWidth/2;
		scale=sizescale;
		console.log('imgWidth:'+imgWidth+';elePos.w:'+elePos.w+';scale:'+sizescale);

		/*图片初始位置*/
		var fx=360/2;
		var fy=152/2;

		/*注：上传图片，放大缩小倍数需要除以2；设计稿中头像左上角，距内容区左上角距离，依然也需要除以2（横坐标除以2，纵坐标除以2）*/

		console.log(fx,fy);
		elePos.s=sizescale;
		elePos.x=fx;
		elePos.y=fy;

		imgthis.scaleX =sizescale, imgthis.scaleY = sizescale, imgthis.rotation = elePos.a, imgthis.x = fx, imgthis.y = fy;
		stage.addChild(imgthis);
		stage.swapChildren(bg, imgthis);
		stage.update();
		},200)
	};

	// 生成图片
	document.getElementById('upload').onclick = function() {
		var getCanvas = document.getElementById('demoCanvas');	
		var context=getCanvas.getContext('2d');
		var inputwd = document.getElementById('inputwd').value;
		var inputimg = document.getElementById('inputimg').value;
		if(inputwd != '' && inputimg!=''){
			context.font='24px 微软雅黑';
			context.textAlign='center';
			context.textBaseline='middle';
			context.fillStyle='#333';
			context.fillText('我爱',158,18);
			context.fillText(inputwd,458,18);

			document.getElementById('content1').style.display='none';
			document.getElementById('content2').style.display='block';

		   var imgDatadahe = getCanvas.toDataURL().replace("image/png", "image/octet-stream");
	       document.getElementById('show').src=imgDatadahe;
	       console.log('imgDatadahe：'+imgDatadahe);
		}else{
			alert('请上传图片，为相框起个昵称，例如：童话相框~~~');
		}
		
	}

	document.getElementById('close').onclick=function(){
     setTimeout(function(){
        document.getElementById('content1').style.display='block';
        document.getElementById('content2').style.display='none';        
     },300);
	};

	function isAndroid(){
	  var u = navigator.userAgent;
	  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
	  return isAndroid;
	}
})(window);