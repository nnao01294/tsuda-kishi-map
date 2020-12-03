var currentWindow = null;
var Center = {lat:35.710332,lng:139.813297};
function initialize() {
       map = new google.maps.Map(document.getElementById('map_canvas'),{
        center: Center,
        zoom:13
       });
var markers = [
       {
       name: '錦糸町駅 ',
       lat: 35.696739,
        lng: 139.814484,
        ave:'84,630円',
       icon:'./train4.png'
    
 }, {
        name: '押上駅',
      lat: 35.710332,
        lng:139.813297,
       ave:'82,764円',
     icon:'./train4.png'
 }, {
        name: '菊川駅',
      lat: 35.688379,
      lng: 139.806123,
      ave:'87,543円',
     icon:'./train4.png'
 } , {
       name: '東向島駅 ',
       lat: 35.724894,
        lng: 139.81947,
        ave: '67,364円',
      icon:'./train3.png' 
    
 }, {
        name: '京成曳舟駅',
        lat: 35.718101,
        lng: 139.819632,
        ave: '70,777円',
        icon:'./train2.png',
     
 }, {
        name: '小村井駅',
       lat: 35.710136,
       lng: 139.828019,
       ave: '72,785円',
      icon:'./train2.png',
 }, {
       name: '両国駅 ',
       lat: 35.696133,
        lng: 139.79272, 
        ave: '85,699円',
     icon:'./train4.png'
 }, {
        name: 'とうきょうスカイツリー駅',
      lat: 35.709545,
        lng: 139.809049,
        ave: '80,543円',
     icon:'./train4.png'
 }, {
        name: '曳舟駅',
       lat: 35.718372,
       lng:　139.816915,
       ave: '77,761円',
       icon:'./train2.png',
 },{
        name: '本所吾妻橋駅',
       lat: 35.708598,
       lng: 139.804567,
        ave: '84,325円',
     icon:'./train4.png'
 }, {
       name: '八広駅 ',
       lat: 35.727248,
       lng:　139.828359,
       ave: '74,694円',
       icon:'./train2.png',
    
 }, {
        name: '鐘ヶ淵駅',
        lat: 35.733427,
        lng: 139.820002,
        ave: '70,088円',
        icon:'./train2.png',
 }, {
     name: '東あずま駅',
      lat: 35.7071,
       lng:　139.831902,
       ave: '76,559円',
       icon:'./train2.png',
 }
];

 
for(var i=0;i<markers.length;i++){
    var name = markers[i].name;
    var ave = markers[i].ave;
    var latlng = new google.maps.LatLng(markers[i].lat,markers[i].lng);
    var icons = markers[i].icon;
    createMarker(name,latlng,icons,map,ave);
    }
}
function createMarker(name,latlng,icons,map,ave){

    var infoWindow = new google.maps.InfoWindow({
         content: '家賃相場 : '+ave,
    }); //情報ウィンドウ生成
    var marker = new google.maps.Marker({
        position: latlng,
        icon:{
            url:icons,
            scaledSize : new google.maps.Size(60, 50)},
       　   map: map});//マーカーを作成
    google.maps.event.addListener(marker, 'click', function() {//地図上のmarkerがクリックされると｛｝内の処理を実行
        if (currentWindow) {
            currentWindow.close();
    }     
        //infoWindow.setContent(name); //InfoWindowOptionsオブジェクトを指定
        infoWindow.open(map,marker); //マーカーに情報ウィンドウを表示
        currentWindow = infoWindow;
        map.panTo(latlng); //地図の中心
});
}
