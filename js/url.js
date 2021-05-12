var utils = {
  isLog: true,
  //调试打印，根据isLog的值打印调试信息
  log: function (data) {
    if (this.isLog) {
      console.log(data)
    }
  },
  get: function (url, data, headers, success, err) {
    $.ajax({
      url: url,
      type: "GET",
      headers: headers,
      dataType: "JSON",
      contentType: 'application/json;charset=UTF-8',
      data: data,
      success: success,
      error: err,
    })
      .fail(function (data) {
        console.log(data)
      })
  },
  Xget: function (url, data, headers, success, qwe, err) {
    $.ajax({
      url: url,
      type: "GET",
      headers: headers,
      dataType: "JSON",
      contentType: 'application/json;charset=UTF-8',
      data: data,
      success: success,
      error: err,
      async: qwe
    })
      .fail(function (data) {
        console.log(data)
      })
  },
  post: function (url, data, headers, success, err) {
    $.ajax({
      url: url,
      type: "POST",
      dataType: "JSON",
      data: data,
      headers: headers,
      success: success,
      error: err,
      // contentType: 'application/json;charset=UTF-8',
    })
    // .fail(function () {
    //   console.log('请检查网络')
    // })
  },
  xpost: function (url, data, headers, success, err) {
    $.ajax({
      url: url,
      type: "POST",
      headers: headers,
      // dataType: "JSON",
      data: data,
      success: success,
      error: err,
      contentType: 'application/json;charset=UTF-8',
    })
      .fail(function () {
        console.log('请检查网络')
      })
  },
  CXMpost: function (url, data, headers, success, err) {
    $.ajax({
      url: url,
      type: "POST",
      headers: headers,
      //dataType: "JSON",
      data: data,
      contentType: false,
      processData: false,
      success: success,
      error: err,
    })
      .fail(function () {
        console.log('请检查网络')
      })
  },
  //格式化url
  formatUrl: function () {
    //decodeURIComponent  unescape
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") !== -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
      }
    }
    return theRequest;
  },
  //重载页面
  pageReload: function () {
    window.location.reload()
  },



}
