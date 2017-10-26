// Our labels along the x-axis
var years = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015];
// For drawing the lines
var america = [841002,1058902,1059356,703542,957883,1122257,1266129,1052415,1107126,1130818,1042625,1062040,1031631,990553,1016518,1051031];
var canada = [227455,250640,228919,221349,235822,262244,251641,236751,247242,	252170,	280686,	248701,	257763,	259034,	260283,	271808];
var germany = [648846,	685259,	658341,	601759,	602182,	579301,	558467,	574752,	573815,	606314,	683529,	841695,	965908,	1108068,	1342529,	2016241];
var sweden = [42216,	43833,	47603,	47988,	47580,	51297,	80398,	83536,	83318,	83763,	79036,	75852,	82597,	95361,	106100,	113868];
var england = [260424,	262239,	288770,	327405,	434322,	405111,	451702,	455000,	456000,	430000,	459000,	453000,	383000,	406000,	504000,	479000];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: america,
        label:'United States',
        fill:false,
       
        borderColor:'#4286f4',
      },
      { 
        data: canada,
        label:'Canada',
        fill:false,
        borderColor:'#ca41f4',
      },
      { 
        data: germany,
       label:'Germany',
        fill:false,
        borderColor:'#f44149',
      },
       { 
        data: sweden,
        label:'Sweden',
        fill:false,
        borderColor:'#f49741',
      },
       { 
        data: england,
        label:'United Kingdom',
        fill:false,
        borderColor:'#82f441',
      }
    ]
  }
});

