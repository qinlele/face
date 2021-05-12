var apiUrl = {
  trainning: {
    url: 'http://peixun.oucjxjy.cn/index.php/',//27.221.51.85:8072/jxjy
    detail: 'api/items/item_detail',
    apply: 'api/items/apply_sub',
    sign_in: 'api/items/my_item_course',
    questionnaire: 'api/items/my_questionnaire_detail',
    questionnaireSubmit: 'api/items/my_questionnaire_sub',
    questionnaireB: 'api/items/my_questionnaire_detail_00',
    questionnaireSubmitB: 'api/items/my_questionnaire_sub_00',
    expirenceDetail: 'api/items/my_summarize_items_detail',
    expirenceSubmit: 'api/items/my_summarize_items_sub',
    completeCourse:'api/items/my_certification',
    honorCard:'api/items/my_certification',
  },
  others:{
    //用车Ip
    // url: 'http://10.133.85.73:4005',//服务器地址
    url: 'http://144.123.47.148:4005',//外网服务器地址
    // 10.133.85.73:8088 10.138.22.228:8088
    // url: 'http://10.138.22.228:8088',  //测试地址
    app:'Course.asmx/GetCouserInfo',
  }
}
var config = {
  others: {
    imgUrl: '',
    headers:apiUrl.others.sign_up,
    sign_up:{
      api:apiUrl.others.url +apiUrl.others.sign_up,
    }
  }
}
