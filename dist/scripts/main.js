"use strict";$(".carousel").carousel({interval:2e3}),$("#mc-embedded-subscribe-form").submit(function(s){var e=$(this);return $.ajax({type:"POST",url:"//rimella.us15.list-manage.com/subscribe/post?u=991bff77fc9adcf8678ad2f1a&amp;id=531016102f",data:e.serialize(),dataType:"jsonp",contentType:"application/json; charset=utf-8",error:function(s){$("#mce-success-response").css("display","block")},success:function(s){"success"!=s.result?$("#mce-error-response").css("display","block"):$("#mce-success-response").css("display","block")}}),!1});