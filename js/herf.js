function CarJump(title, url) {
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	var param = title + "," + url;
	if (isAndroid) {
		window.getJump.CarJump(param);
	}
	if (isiOS) {
		window.webkit.messageHandlers.CarJump.postMessage({
			"body": param
		});
	}
}