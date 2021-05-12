function loadings(status) {
	if(status==true){
		var loadHtml = '<div class="demoBox" id="google">' +
		'<section class="demoList">' +
		'<section class="demoItem">' +
		'<section class="container google-animation-2">' +
		'<section class="shape shape-1"></section>' +
		'<section class="shape shape-2"></section>' +
		'<section class="shape shape-3"></section>' +
		'<section class="shape shape-4"></section>' +
		'</section>' +
		'</section>' +
		'</section>' + '</div>'
	console.log(loadHtml)
	$("body").append(loadHtml)
	}else {
		$("#google").remove()
	}
	
}