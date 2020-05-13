const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";
const fields = ["var1", "var2", "var3", "var4", "var5", "var6", "speach"]

function getFormValues() {
	let obj = {};

	fields.forEach(function(field) {
		obj[field] = $("input[name=" + field + "]")[0].value
});

	return obj;	
}

function handleButton() {
	$.getJSON(dataURL, handleData);
 
}

function handleData(data) {
	let finalMessage = "";

	let obj = getFormValues();

	data["text"].forEach(function(item) {
		for (key in obj) {
			item = item.replace("{" + key + "}", obj[key]);
		}

		finalMessage = finalMessage + item + "<br>";
	});

	$("div#result").html(finalMessage);	
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
