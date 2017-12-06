import Vue from 'vue'

var base = {
  "formatImageUrl": function(url_str){
    var hostUrl = 'http://statics.oulafen.com/my_eleme_seller/img/';
    if(!url_str) return '';
    var is_png = url_str.indexOf('png') > -1;
    return hostUrl + url_str.slice(3) + (is_png ? '.png' : '.jpeg');
  }
};

Vue.filter('formatImageUrl', function (value) {
  return base.formatImageUrl(value);
});
