var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/**
 * stacktable.js
 * Author & copyright (c) 2012: John Polacek
 * CardTable by: Justin McNally (2015)
 * Dual MIT & GPL license
 *
 * Page: http://johnpolacek.github.com/stacktable.js
 * Repo: https://github.com/johnpolacek/stacktable.js/
 *
 * jQuery plugin for stacking tables on small screens
 * Requires jQuery version 1.7 or above
 *
 */
!function(t){t.fn.cardtable=function(a){var d=this,e={id:"stacktable small-only",hideOriginal:!0,headIndex:0},s=t.extend({},e,a);return a&&a.headIndex?headIndex=a.headIndex:headIndex=0,d.each(function(){if($table=t(this),!$table.hasClass("stacktable")){var a=t(this).prop("class"),d=t("<div></div>");"undefined"!=typeof s.myClass&&d.addClass(s.myClass);var e="";$table.addClass("stacktable large-only"),$caption=$table.find("caption").clone(),$topRow=$table.find("tr").eq(0),$table.find("tbody tr").each(function(d,l){headMarkup="",bodyMarkup="",tr_class=t(this).prop("class"),t(this).find("td,th").each(function(a,d){""!==t(this).html()&&(bodyMarkup+='<tr class="'+tr_class+'">',$topRow.find("td,th").eq(a).html()?bodyMarkup+='<td class="st-key">'+$topRow.find("td,th").eq(a).html()+"</td>":bodyMarkup+='<td class="st-key"></td>',bodyMarkup+='<td class="st-val '+t(this).prop("class")+'">'+t(this).html()+"</td>",bodyMarkup+="</tr>")}),e+='<table class=" '+a+" "+s.id+'"><tbody>'+headMarkup+bodyMarkup+"</tbody></table>"}),$table.find("tfoot tr td").each(function(d,l){""!==t.trim(t(l).text())&&(e+='<table class="'+a+" "+s.id+'"><tbody><tr><td>'+t(l).html()+"</td></tr></tbody></table>")}),d.prepend($caption),d.append(t(e)),$table.before(d),s.hideOriginal||$table.show()}})},t.fn.stacktable=function(a){var d=this,e={id:"stacktable small-only",hideOriginal:!0,headIndex:0},s=t.extend({},e,a);return a&&a.headIndex?headIndex=a.headIndex:headIndex=0,d.each(function(){var a=t(this).prop("class"),d=t('<table class="'+a+" "+s.id+'"><tbody></tbody></table>');"undefined"!=typeof s.myClass&&d.addClass(s.myClass);var e="";$table=t(this),$table.addClass("stacktable large-only"),$caption=$table.find("caption").clone(),$topRow=$table.find("tr").eq(0),$table.find("tr").each(function(a,d){headMarkup="",bodyMarkup="",tr_class=t(this).prop("class"),0===a?e+='<tr class=" '+tr_class+' "><th class="st-head-row st-head-row-main" colspan="2">'+t(this).find("th,td").eq(headIndex).html()+"</th></tr>":(t(this).find("td,th").each(function(a,d){a===headIndex?headMarkup='<tr class="'+tr_class+'"><th class="st-head-row" colspan="2">'+t(this).html()+"</th></tr>":""!==t(this).html()&&(bodyMarkup+='<tr class="'+tr_class+'">',$topRow.find("td,th").eq(a).html()?bodyMarkup+='<td class="st-key">'+$topRow.find("td,th").eq(a).html()+"</td>":bodyMarkup+='<td class="st-key"></td>',bodyMarkup+='<td class="st-val '+t(this).prop("class")+'">'+t(this).html()+"</td>",bodyMarkup+="</tr>")}),e+=headMarkup+bodyMarkup)}),d.prepend($caption),d.append(t(e)),$table.before(d),s.hideOriginal||$table.show()})},t.fn.stackcolumns=function(a){var d=this,e={id:"stacktable small-only",hideOriginal:!0},s=t.extend({},e,a);return d.each(function(){$table=t(this);var a=$table.find("tr").eq(0).find("td,th").length;if(!(3>a)){var d=t('<table class="'+s.id+'"></table>');"undefined"!=typeof s.myClass&&d.addClass(s.myClass),$table.addClass("stacktable large-only");for(var e=t("<tbody></tbody>"),l=1;a>l;)$table.find("tr").each(function(a,d){var s=t("<tr></tr>");0===a&&s.addClass("st-head-row st-head-row-main"),first=t(this).find("td,th").eq(0).clone().addClass("st-key");var n=l;if(t(this).find("*[colspan]").length){var i=0;t(this).find("td,th").each(function(a,d){var e=t(this).attr("colspan");return e?(e=parseInt(e,10),n-=e-1,i+e>l&&(n+=i+e-l-1),i+=e):i++,i>l?!1:void 0})}second=t(this).find("td,th").eq(n).clone().addClass("st-val").removeAttr("colspan"),s.append(first,second),e.append(s)}),++l;d.append(t(e)),$table.before(d),s.hideOriginal||$table.show()}})}}(jQuery);

}
/*
     FILE ARCHIVED ON 18:18:52 Aug 17, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:05:19 Jan 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 3.98
  PetaboxLoader3.resolve: 46.323
  exclusion.robots.policy: 0.193
  exclusion.robots: 0.207
  captures_list: 146.576
  LoadShardBlock: 120.964 (3)
  PetaboxLoader3.datanode: 119.422 (4)
  esindex: 0.016
  CDXLines.iter: 18.159 (3)
  load_resource: 180.725
*/