;(function(){
    "use strict";
    var Cookie = function(){
        this.cookieList = document.cookie;
        this.cookieToObject = function($str){
                if(!$str.length){
                    return [];
                }

                if($str.indexOf(';') === -1){
                    var _cookie = $str.split('=');
                    return [_cookie[0].trim(),_cookie[1]];
                }

                var cookieArr = $str.split(';'),
                    len = cookieArr.length,
                    result = [],
                    i = 0;
                for(; i<len; ++i){
                    var item = cookieArr[i].split('=');
                    result.push([item[0].trim(),item[1]]);
                }

                return result;
            };
        this.list = this.cookieToObject(this.cookieList);
        this.length = this.list.length;
    };

    Cookie.prototype.get = function(name){
        for (var i=0; i<this.length; ++i){
            console.log(this.list[i][0] == name);
            if(this.list[i][0] != name){
                continue;
            }

            return this.list[i][1];
        }
    };

    Cookie.prototype.set = function(key,value){
        document.cookie = key + '=' + value;
    };

    window.Coockie = new Cookie();
})();
