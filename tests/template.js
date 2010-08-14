
{% if True %}
	$(document).ready(function(){
		$("#test").text({{ text }});
	});
{% endif %}

function test(){

	document.write({{ data }});
}

## kate: syntax Jinja2/JavaScript