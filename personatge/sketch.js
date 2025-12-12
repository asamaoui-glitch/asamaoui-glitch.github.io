let mic;
function setup() {
  createCanvas(500, 430);
mic=new p5.AudioIn();
  mic.start();
  
 
}

function draw() {
  let pinklevel=80*sin(frameCount*0.02);
  let s= 1+0.003* sin (frameCount*0.2);
   let vol=mic.getLevel();
  let h=map(vol,0,1,0,200,true)
  let sinus=sin(frameCount*0.1)*5;
  let cosinus=cos(frameCount*0.1)*5;
  background(220);
  beginShape();//exterior
  fill (0, 0, 0)
curveVertex(131.5, 66.609375);
curveVertex(157.5, 48.609375);
curveVertex(186.5, 36.609375);
curveVertex(225.5, 28.609375);
curveVertex(261.5, 28.609375);
curveVertex(298.5, 32.609375);
curveVertex(330.5, 46.609375);
curveVertex(369.5, 69.609375);
curveVertex(371.5, 65.609375);
curveVertex(378.5, 58.609375);
curveVertex(390.5, 44.609375);
curveVertex(407.5, 34.609375);
curveVertex(430.5, 29.609375);
curveVertex(454.5, 33.609375);
curveVertex(475.5, 44.609375);
curveVertex(493.5, 70.609375);
curveVertex(497.5, 103.609375);
curveVertex(491.5, 120.609375);
curveVertex(483.5, 134.609375);
curveVertex(466.5, 150.609375);
curveVertex(449.5, 156.609375);
curveVertex(437.5, 159.609375);
curveVertex(419.5, 158.609375);
curveVertex(414.5, 163.609375);
curveVertex(413.5, 174.609375);
curveVertex(413.5, 187.609375);
curveVertex(404.5, 216.609375);
curveVertex(390.5, 238.609375);
curveVertex(367.5, 254.609375);
curveVertex(342.5, 267.609375);
curveVertex(319.5, 274.609375);
curveVertex(293.5, 279.609375);
curveVertex(248.5, 282.609375);
curveVertex(200.5, 279.609375);
curveVertex(154.5, 270.609375);
curveVertex(124.5, 252.609375);
curveVertex(106.5, 236.609375);
curveVertex(88.5, 208.609375);
curveVertex(83.5, 183.609375);
curveVertex(81.5, 167.609375);
curveVertex(82.5, 163.609375);
curveVertex(76.5, 157.609375);
curveVertex(59.5, 158.609375);
curveVertex(46.5, 154.609375);
curveVertex(35.5, 152.609375);
curveVertex(22.5, 143.609375);
curveVertex(13.5, 133.609375);
curveVertex(5.5, 122.609375);
curveVertex(1.5, 107.609375);
curveVertex(1.5, 86.609375);
curveVertex(1.5, 107.609375);
curveVertex(1.5, 88.609375);
curveVertex(6.5, 65.609375);
curveVertex(14.5, 52.609375);
curveVertex(24.5, 42.609375);
curveVertex(44.5, 33.609375);
curveVertex(58.5, 30.609375);
curveVertex(74.5, 30.609375);
curveVertex(91.5, 32.609375);
curveVertex(95.5, 36.609375);
curveVertex(104.5, 41.609375);
curveVertex(112.5, 47.609375);
curveVertex(118.5, 54.609375);
curveVertex(124.5, 61.609375);
curveVertex(125.5, 65.609375);
endShape(CLOSE);
  beginShape();//interior
  let c=44*sin(frameCount*0.02);
fill(187+c,30,12)
 curveVertex(152.5, 102.609375);
curveVertex(179.5, 86.609375);
curveVertex(213.5, 75.609375);
curveVertex(243.5, 72.609375);
curveVertex(275.5, 73.609375);
curveVertex(307.5, 82.609375);
curveVertex(330.5, 89.609375);
curveVertex(341.5, 99.609375);
curveVertex(365.5, 115.609375);
curveVertex(376.5, 130.609375);
curveVertex(387.5, 157.609375);
curveVertex(389.5, 189.609375);
curveVertex(383.5, 211.609375);
curveVertex(373.5, 231.609375);
curveVertex(345.5, 255.609375);
curveVertex(322.5, 264.609375);
curveVertex(277.5, 271.609375);
curveVertex(234.5, 272.609375);
curveVertex(184.5, 267.609375);
curveVertex(150.5, 253.609375);
curveVertex(134.5, 243.609375);
curveVertex(121.5, 226.609375);
curveVertex(111.5, 199.609375);
curveVertex(107.5, 175.609375);
curveVertex(113.5, 148.609375);
curveVertex(120.5, 131.609375);
curveVertex(149.5, 103.609375);
endShape(CLOSE);
beginShape();//cella esquerra
  fill(10, 7, 7)
curveVertex(137.5, 114.609375+sinus);
curveVertex(152.5, 111.609375+sinus);
curveVertex(168.5, 112.609375+sinus);
curveVertex(177.5, 114.609375+sinus);
curveVertex(180.5, 110.609375+sinus);
curveVertex(177.5, 106.609375+sinus);
curveVertex(170.5, 104.609375+sinus);
curveVertex(162.5, 101.609375+sinus);
curveVertex(151.5, 103.609375+sinus);
endShape(CLOSE);
  beginShape();//cella dreta
curveVertex(345.5, 104.609375+sinus);
curveVertex(330.5, 103.609375+sinus);
curveVertex(319.5, 106.609375+sinus);
curveVertex(318.5, 111.609375+sinus);
curveVertex(323.5, 112.609375+sinus);
curveVertex(334.5, 110.609375+sinus);
curveVertex(345.5, 110.609375+sinus+sinus);
curveVertex(354.5, 112.609375+sinus);
curveVertex(362.5, 112.609375+sinus);
endShape(CLOSE);
  
  
beginShape();//ull esquerra
curveVertex(128.5, 176.609375+cosinus);
curveVertex(197.5, 194.609375+cosinus);
curveVertex(197.5, 200.609375+cosinus);
curveVertex(126.5, 183.609375+cosinus);
curveVertex(126.5, 175.609375+cosinus);
endShape(CLOSE);  
 fill(255,117+pinklevel,255);
  beginShape();//galta esquerra
   

vertex(150, 226.609375);
vertex(158, 219.609375);
vertex(168, 219.609375);
vertex(175, 221.609375);
vertex(180, 229.609375);
vertex(180, 232.609375);
vertex(180, 240.609375);
vertex(180, 240.609375);
vertex(177, 244.609375);
vertex(171, 250.609375);
vertex(161, 250.609375);
vertex(152, 246.609375);
vertex(150, 239.609375);
vertex(149, 232.609375);
vertex(149, 226.609375);
endShape(CLOSE);
 fill(255,117+pinklevel,255); 
beginShape();//galta dreta
  
curveVertex(323, 223.609375);
curveVertex(319, 226.609375);
curveVertex(318, 231.609375);
curveVertex(317, 235.609375);
curveVertex(317, 241.609375);
curveVertex(319, 244.609375);
curveVertex(322, 247.609375);
curveVertex(327, 250.609375);
curveVertex(333, 251.609375);
curveVertex(339, 250.609375);
curveVertex(344, 247.609375);
curveVertex(347, 243.609375);
curveVertex(349, 239.609375);
curveVertex(349, 233.609375);
curveVertex(347, 227.609375);
curveVertex(344, 223.609375);
curveVertex(339, 220.609375);
curveVertex(331, 219.609375);
curveVertex(323, 221.609375);
endShape(CLOSE);
  beginShape();//boca
  fill(0, 0, 0)
curveVertex(236.5-h, 227.609375+h);
curveVertex(239.5-h, 230.609375+h);
curveVertex(239.5-h, 233.609375+h);
curveVertex(240.5-h, 237.609375+h);
curveVertex(244.5-h, 238.609375+h);
curveVertex(248.5-h, 239.609375+h);
curveVertex(252.5-h, 239.609375+h);
curveVertex(256.5-h, 236.609375+h);
curveVertex(258.5-h, 231.609375+h);
curveVertex(260.5-h, 227.609375+h);
curveVertex(263.5, 228.609375+h);
curveVertex(264.5, 230.609375+h);
curveVertex(265.5, 235.609375+h);
curveVertex(262.5, 239.609375+h);
curveVertex(258.5, 243.609375+h);
curveVertex(252.5, 246.609375+h);
curveVertex(246.5, 246.609375+h);
curveVertex(238.5, 243.609375+h);
curveVertex(234.5, 239.609375+h);
curveVertex(231.5, 229.609375+h);
curveVertex(232.5, 224.609375+h);
curveVertex(235.5, 226.609375+h);
endShape(CLOSE);
  beginShape();//goma de cabell
 fill (255, 36, 2)
  curveVertex(389, 90.609375);
curveVertex(388, 92.609375);
curveVertex(392, 96.609375);
curveVertex(396, 104.609375);
curveVertex(401, 113.609375);
curveVertex(405, 125.609375);
curveVertex(409, 134.609375);
curveVertex(411, 144.609375);
curveVertex(413, 146.609375);
curveVertex(414, 144.609375);
curveVertex(414, 134.609375);
curveVertex(414, 124.609375);
curveVertex(412, 115.609375);
curveVertex(408, 106.609375);
curveVertex(401, 96.609375);
curveVertex(392, 91.609375);
curveVertex(387, 87.609375);
endShape(CLOSE);
  beginShape();//goma del cabell
  fill(255, 36, 2)
curveVertex(110.5, 91.609375);
curveVertex(97.5, 113.609375);
curveVertex(84.5, 145.609375);
curveVertex(82.5, 123.609375);
curveVertex(87.5, 107.609375);
curveVertex(108.5, 85.609375);
curveVertex(110.5, 87.609375);
endShape(CLOSE);
fill(0,0,0);
  beginShape();//ull dret
curveVertex(370.5, 175.609375+cosinus);
curveVertex(302.5, 194.609375+cosinus);
curveVertex(300.5, 198.609375+cosinus);
curveVertex(301.5, 201.609375+cosinus);
curveVertex(311.5, 200.609375+cosinus);
curveVertex(326.5, 195.609375+cosinus);
curveVertex(358.5, 187.609375+cosinus);
curveVertex(371.5, 181.609375+cosinus);
curveVertex(371.5, 175.609375+cosinus);
endShape(CLOSE);
 
}
  
