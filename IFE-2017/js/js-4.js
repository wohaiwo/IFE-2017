		var text = document.getElementById( "text" ),
		second = document.getElementById( "secondChild" ),
		inleft = document.getElementById( "inleft" ),
		inright = document.getElementById( "inright" ),
		outleft = document.getElementById( "outleft" ),
		outright = document.getElementById( "outright" );
		inleft.addEventListener( "click", function() {
			if ( !isNaN(text.value) && !text.value == "" ) {
			var div = document.createElement( "div" );
			var textNode = document.createTextNode( text.value );
			div.style = "display: inline-block; padding: 10px; margin: 5px; font-size: 14px; font-weight: bold; color: #fff; background-color: red;"
			div.appendChild( textNode );
			second.insertBefore( div, second.firstChild );
		} else {
			alert( "请输入数字" );
		}
		}, false );
		inright.addEventListener( "click", function() {
			if ( !isNaN( text.value ) && !text.value == "" ) {
			var div = document.createElement( "div" );
			var textNode = document.createTextNode( text.value );
			div.style = "display: inline-block; padding: 10px; margin: 5px; font-size: 14px;font-weight: bold; color: #fff; background-color: red;"
			div.appendChild( textNode );
			second.appendChild( div, second.firstChild );
		} else {
			alert( "请输入数字" );
		}
		}, false );
		outleft.addEventListener( "click", function() {
			var a = second.removeChild( second.firstChild );
			alert(a.firstChild.nodeValue);
		}, false );
		outright.addEventListener( "click", function() {
			var a = second.removeChild( second.lastChild );
			alert(a.firstChild.nodeValue);
		}, false );