let data = [];
let W = 800;
let H = 400;
let bar_padding = 5;

for (var i = 0; i < 20; i++) {
	var num = Math.floor(d3.randomUniform(1,60)());
	data.push(num);
}

//create an SVG element
var svg = d3.select("#barchart")
		.append("svg")
		.attr("width", W)
		.attr("height", H)

//Bind data and create the bars
svg.selectAll("rect")
	.data(data)
	.enter()
	.append("rect")
	.attr('x', function(d, i){
		console.log(i*(W/data.length));
		return i*(W/data.length);
	})
	.attr('y', 0)
	.attr('width', W/data.length -bar_padding)
	.attr('height', function(d){
		return d;
	});
