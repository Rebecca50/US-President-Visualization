
function d3Project(data){
// console.log(data.days);
var svg = d3.select('svg');
  // debugger;
var circles = svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle');

var circles = svg.selectAll('circle')
    .data(data)
    .transition()
      .duration(600)
        .attr('r', function(d){ return (d.days/100)+'px'})
        .attr('cx', function(){ return (Math.random()*100) + '%'})
        .attr('cy', function(){ return (Math.random()*100) + '%'})
        .style('opacity', function(){ return (Math.random()*100)})
        .style('fill', 'blue');





}

//Load them up//

window.onload = function(){

  svg = d3.select('body')
  .append('svg')
    .attr('width', '90%')
    .attr('height', '90%');

 //   data = loadFile('/presidents.js');
 var pres = [
{name: "Washington "   , days: 2864},
{name: "Adams      "   , days: 1460},
{name: "Jefferson  "   , days: 2921},
{name: "Madison    "   , days: 2921},
{name: "Monroe     "   , days: 2921},
{name: "Adams      "   , days: 1460},
{name: "Jackson    "   , days: 2921},
{name: "VanBuren   "   , days: 1460},
{name: "Harrison   "   , days:   31},
{name: "Tyler      "   , days: 1427},
{name: "Polk       "   , days: 1460},
{name: "Taylor     "   , days:  491},
{name: "Filmore    "   , days:  967},
{name: "Pierce     "   , days: 1460},
{name: "Buchanan   "   , days: 1460},
{name: "Lincoln    "   , days: 1503},
{name: "Johnson    "   , days: 1418},
{name: "Grant      "   , days: 2921},
{name: "Hayes      "   , days: 1460},
{name: "Garfield   "   , days:  199},
{name: "Arthur     "   , days: 1260},
{name: "Cleveland  "   , days: 1460},
{name: "Harrison   "   , days: 1460},
{name: "Cleveland  "   , days: 1460},
{name: "McKinley   "   , days: 1655},
{name: "Roosevelt  "   , days: 2727},
{name: "Taft       "   , days: 1460},
{name: "Wilson     "   , days: 2921},
{name: "Harding    "   , days:  881},
{name: "Coolidge   "   , days: 2039},
{name: "Hoover     "   , days: 1460},
{name: "Roosevelt  "   , days: 4452},
{name: "Truman     "   , days: 2810},
{name: "Eisenhower "   , days: 2922},
{name: "Kennedy    "   , days: 1036},
{name: "Johnson    "   , days: 1886},
{name: "Nixon      "   , days: 2027},
{name: "Ford       "   , days:  895},
{name: "Carter     "   , days: 1461},
{name: "Reagan     "   , days: 2922},
{name: "Bush       "   , days: 1461},
{name: "Clinton    "   , days: 2922},
{name: "Bush       "   , days: 1110},
];

for (var i = pres.length - 1; i >= 0; i--) {
  pres[i].name = pres[i].name.trim();
};




    setInterval(function(){
      d3Project(pres);
    }, 500)

}
