var img = [
	{
		url:'images/bg.png',
		x:0,
		y:0,
		z:-201,
		width:512,
		height:1024,
		scale: 5,
	},
	{
		url:'images/01.png',
		x:0,
		y:-200,
		z:-200,
		width:512,
		height:512,
	},
	{
		url:'images/c1.png',
		x:0,
		y:-500,
		z:-170,
		width:1112,
		height:515,
	},
	{
		url:'images/c2.png',
		x:0,
		y:65,
		z:-199,
		width:913,
		height:351,
	},
	// {
	// 	url:'images/c3.png',

	// 	x:0,
	// 	y:-150,
	// 	z:-150,
	// 	width:512,
	// 	height:256,
	// },
	// {
	// 	url:'images/c4.png',
	// 	x:0,
	// 	y:0,
	// 	z:-130,
	// 	width:1112,
	// 	height:1075,
	// },
	{
		url:"images/08-1.png",
	},
	{
		url:'images/left_l.png',
		x:-490,
		y:-150,
		z:200,
		width:836,
		height:694,
	},
	{
		url:'images/left_l.png',
		x:490,
		y:-150,
		z:200,
		width:836,
		height:694,
		scale:-1,
	},
	{
		url:'images/plane.png',
		x:40,
		y:45,
		z:800,
		width:747,
		height:299,
	},
	{
		url:'images/door.png',
		x:-0,
		y:-40,
		z:900,
		width:512,
		height:256,
	},
	// {
	// 	url:'images/c1.png',
	// 	x:0,
	// 	y:0,
	// 	z:-196,
	// 	width:1112,
	// 	height:515,
	// },
	

]

var s = new C3D.Stage();
console.log(s.camera);
s.size(window.innerWidth,window.innerHeight).material({
	color:'#cccccc'
}).update()

document.getElementById('container').appendChild(s.el);
// var p = new C3D.Plane();  
// p.size(512).position(0, 0, -s.fov).rotation(0, 0, 0).material({  
//     image : 'images/01.png'  
// }).update();  
// s.addChild(p); 
console.log(123)
create()
function create(){
	for (var i = 0; i < img.length; i++) {
	console.log(s.fov)
		var p = new C3D.Plane();
		if (img[i].scale < 0) p.scale(-1,1,1);
		if (img[i].scale > 0) p.scale(img[i].scale,img[i].scale,img[i].scale);
		p.size(img[i].width,img[i].height).position(img[i].x,img[i].y,img[i].z).material({
			image : img[i].url
		}).update();
		s.addChild(p)
	}
}
    //刷新场景
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
            function (callback) {
                setTimeout(callback, 1000 / 60);
            };

    function go() {

        // s.camera.move(0, 0, .9).updateT();

        requestAnimationFrame(go);
    }

    requestAnimationFrame(go);
    document.addEventListener('touchmove',function(e){
        s.camera.move(0, 0, .9).updateT();

    })