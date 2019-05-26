const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "I Am You",
        artist: 'Kim Taylor',
        url: 'https://m10.music.126.net/20190526095235/02f618bb1508adf527d8c1327c602e96/ymusic/8e33/74d6/aabc/f233a6d51cb638f6400b35c33b6ce9b9.mp3',
        cover: 'http://p2.music.126.net/cCw5Kr5C52bYbV-AOp6IUA==/109951163073357482.jpg?param=130y130',
		lrc: 'I Am You.lrc'
      },
	  {
        name: "Silver Scrapes",
        artist: 'Danny McCarthy',
        url: 'https://m10.music.126.net/20190526101503/2be7e4a5f5d6cd77b8907e88d0b00354/ymusic/421b/2b10/8111/1746ee35bd94e42354f5cb4b458456e9.mp3',
        cover: 'http://p1.music.126.net/MaUx2Rx92sBuE_5n8KfTog==/528865094249209.jpg?param=130y130',
      },
	  {
        name: "RISE",
        artist: 'The Glitch Mob / Mako / The Word Alive',
        url: 'https://m10.music.126.net/20190526101805/8705236725ba4f9de39cfba2837df2d1/ymusic/c294/128b/252a/b0f50df2d56049b247c9ac00feda19b1.mp3',
        cover: 'http://p1.music.126.net/XLulJwVbfowNQhATCt809g==/109951163573081067.jpg?param=130y130',
      },
      {
        name: '杏花弦外雨',
        artist: 'CRITTY / 司夏',
        url: 'https://m10.music.126.net/20190526102220/ce6cc5204680cd2aa39ffdde5c3a4000/ymusic/2d13/e025/dd38/6264b9199d1f0a2e87f2795bcd2f98c9.mp3',
        cover: 'http://p1.music.126.net/iwZ6w7D5C8WXgnjcohHb0Q==/7799935488436943.jpg?param=130y130',
      },
	   {
        name: 'Legends Never Die',
        artist: 'Against the Current',
        url: 'https://m10.music.126.net/20190526101922/c36334699ede63df7ab49cde79b47752/ymusic/c8ad/0d88/96ed/2269cdca46ae2d2d37a1026a4b55a51b.mp3',
        cover: 'http://p1.music.126.net/2aTrg-Zz72Ms6ySsjPcKCg==/109951163918904060.jpg?param=130y130',
      },
	  {
        name: 'color-X 3D',
        artist: '徐梦圆',
        url: 'https://m10.music.126.net/20190526102513/b3d66d735fa099702fa5a12e0b69d90a/ymusic/5453/5559/0209/c94d9c6f72b3e6ffecd05c212491918e.mp3',
        cover: 'http://p1.music.126.net/EzP-01fkE9gzu9Tlj09d0A==/18315664695526776.jpg?param=130y130',
      },
	  {
        name: 'Marry You',
        artist: 'Bruno Mars',
        url: 'https://m10.music.126.net/20190526102806/4fe67cec5a97a8b7bd2faa50b13c8532/ymusic/38c9/b2ea/483e/3959904c439fe3254497aa207336cfd3.mp3',
        cover: 'http://p2.music.126.net/sLF1cDb7UmYMCSvi2W2nkQ==/17862665905224639.jpg?param=130y130',
      },
    ]
});