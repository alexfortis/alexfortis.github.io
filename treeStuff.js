$(function () {
	$('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Expand this branch');
	var childs = $(this).parent('li.parent_li').find('> li > ul > li');
	for(var c = 0; c < childs.length; c++) {
	    childs[c].style.color='blue';
	}
	$(find = function(list, elem) {
		for(var i = 0; i < list.length; i++) {
		    if(list[i] === elem) return true;
		}
		return false;
	    });
	$('.tree li.parent_li > span').on('click', function (e) {
		var children = $(this).parent('li.parent_li').find(' > ul > li');
		var kids; //this is the key!
		for(var i = 0; children && (i < children.length); i++) {
		    if(!(childs.find(children[i]))) {
			kids.add(this);
		    }
		}
		$(this).toggleClass("glyphicon glyphicon-plus glyphicon glyphicon-minus");
		/*$(this).toggleClass("glyphicon glyphicon-plus-sign glyphicon glyphicon-minus-sign");
		$(this).toggleClass("glyphicon glyphicon-folder-open glyphicon glyphicon-folder-closed");
		$(this).toggleClass("glyphicon glyphicon-chevron-right glyphicon glyphicon-chevron-down");*/
		if (children.is(":visible")) { //was "children"
		    children.hide('fast');
		    $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
		} else {
		    children.show('fast');
		    $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
		}
		e.stopPropagation();
	    });
    });