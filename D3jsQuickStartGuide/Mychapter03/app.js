let WIDTH = 600;
let HEIGHT = 400;

let runs = [
  {
    id: 1,
    date: 'October 1, 2018 at 4:00PM',
    distance: 5.2
  },
  {
    id: 2,
    date: 'October 1, 2018 at 5:00PM',
    distance: 7.02
  },
  {
    id: 3,
    date: 'October 1, 2018 at 6:00PM',
    distance: 8.7
  }
]

d3.select('#container')
.style('width', WIDTH)
.style('height', HEIGHT);
//タイムスケーラー
let parseTime = d3.timeParse("%B%e, %Y at %-I:%M%p")
console.log("parseTime:", parseTime);
let formatTime = d3.timeFormat("%B%e, %Y at %-I:%M%p");
console.log("formatTime:", formatTime);
let xScale = d3.scaleTime();
xScale.range([0, WIDTH]);
let xDomain = d3.extent(runs, function(d, i) {
   // console.log(d.date);
   // console.log(parseTime(d.date));
   return parseTime(d.date);
 });
xScale.domain(xDomain);
//リニアスケーラー
let yScale = d3.scaleLinear();
yScale.range([HEIGHT, 0]);
let yDomain = d3.extent(runs, function(d, i) {
  return d.distance;
});
yScale.domain(yDomain);//(distance min, distance max)

const render = () => {
  let circles = d3.select('#points')
    .selectAll('circle')
    .data(runs, function (d) {
      console.log(d.id);
      return d.id;
    });
  console.log("circles",circles);
  circles.enter().append('circle');
  //データに添付されていない余分な円をすべて削除する
  circles.exit().remove();
  console.log("circles remove", circles.exit().remove());

  d3.selectAll('circle')
      .attr('cy', function (d, i) {
        console.log(d.distance, yScale(d.distance));
        return yScale(d.distance);
      });

  d3.selectAll('circle')
     .attr('cx', function (d, i) {
       console.log(d.date, xScale(parseTime(d.date)));
       return xScale(parseTime(d.date));
     });

   d3.selectAll('circle').on('click', function (d, i) {
     d3.event.stopPropagation();
     runs = runs.filter(function (r, i) {
       return r.id != d.id;
     });
     render();
     createTable();
   });

   let drawEnd = function (d) {
     let x = d3.event.x;
     let y = d3.event.y;

     let date = xScale.invert(x);
     let distance = yScale.invert(y);

     d.date = formatTime(date);
     d.distance = distance;
     createTable();//re-render the table
   }

  let dragStart = function (d) {

     let x = d3.event.x;
     let y = d3.event.y;
     d3.select(this).attr('cx', x);
     d3.select(this).attr('cy', y);
  }

  let dragBehavior = d3.drag()
      .on('drag', dragStart)
      .on('end', drawEnd);
  d3.selectAll('circle').call(dragBehavior);
}

render();

let bottomAxis = d3.axisBottom(xScale);
d3.select('#container')
  .append('g')
    .attr('id', 'x-axis')
  .call(bottomAxis)
    .attr('transform', 'translate(' + 0 + ',' + HEIGHT + ')')

let leftAxis = d3.axisLeft(yScale);
d3.select('#container')
  .append('g')
    .attr('id', 'y-axis')
  .call(leftAxis);

let createTable = function () {
  d3.select('tbody').html('');
  for (var i = 0; i < runs.length; i++) {
    let row = d3.select('tbody').append('tr');

    row.append('td').html(runs[i].id);
    row.append('td').html(runs[i].date);
    row.append('td').html(runs[i].distance);
  }
}

createTable();

d3.select('#container').on('click', function () {
  let x = d3.event.offsetX;
  let y = d3.event.offsetY;

  if(lastTransform !== null) {
    console.log(lastTransform);
    x = lastTransform.invertX(d3.event.offsetX);
    y = lastTransform.invertY(d3.event.offsetY);
  }

  let date = xScale.invert(x);
  let distance = yScale.invert(y);

  let newRun = {
    id: ( runs.length > 0 ) ? runs[runs.length-1].id+1: 1,
    date: formatTime(date),
    distance : distance
  }
  runs.push(newRun);
  createTable();
  render();
})

let lastTransform = null;

let zoomCallback = function()  {
  lastTransform = d3.event.transform;
  d3.select('#points').attr('transform', d3.event.transform);
  d3.select('#x-axis')
    .call(bottomAxis.scale(d3.event.transform.rescaleX(xScale)));
  d3.select('#y-axis')
    .call(leftAxis.scale(d3.event.transform.rescaleY(yScale)));
}

var zoom = d3.zoom()
    .on('zoom', zoomCallback);
d3.select('#container').call(zoom);
