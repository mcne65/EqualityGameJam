var characters = {
  "default":{
    "poses":{
    },
    "name":"Narrator"
  },

  "legohead":{
    "poses":{
      "default":"img/characters/legohead/default.png",
      "not_upset":"img/characters/legohead/not_upset.png",
      "angry":"img/characters/legohead/angry.png"
    },
    "name":"LegoHead"
  },

  "embroidery_face":{
    "poses":{
      "default":"img/characters/embroidery_face/default.png",
      "happy":"img/characters/embroidery_face/happy.png",
      "angry":"img/characters/embroidery_face/angry.png"
    },
    "name":"Embroidery Face"
  },

  "blobby":{
    "poses":{
      "default":"img/characters/blobby/default.png",
      "happy":"img/characters/blobby/happy.png",
      "angry":"img/characters/blobby/angry.png"
    },
    "name":"Blobby"
  },

  "komodo":{
    "poses":{
      "default":"img/characters/Komodo/default.png",
      "happy":"img/characters/Komodo/happy.png",
      "happy2":"img/characters/komodo/happy2.png"
    },
    "name":"Komodo"
  }
};
var places = {
	"blob": {
		"name":"Blob",
		"image":"img/scene/blobenterstram.jpg"
	},

	"tram" : {
		"name":"The Tram",
    "image":"img/scene/tram.jpg"
  },

	"tram_blur": {
		"name":"The Tram",
		"image":"img/scene/tram_blur.jpg"
	}
};
var story = [
	{
        "title": "Start",
        "tags": "",
        "body": "<<place tram>>\n\n{{embroidery_face,default}} This is you. You are Blob\n\n{{embroidery_face}} Your name is Blob because you are a Blob.
        \n\n{{embroidery_face}} You are new to Melbourne, and you want to get around and meet some friendly faces.  \n\n{{embroidery_face}} Let's go.\n\n{{embroidery_face}} Here's somebody new. They look well-presented. And busy.\n\n{{embroidery_face}} You are new to Melbourne, and you want to get around and meet some friendly faces.\n\n{{embroidery_face}} Let's go.\n\n[[Are you headed to the arts and crafts fair?|embroidery_face_1]]\n\n[[Can you point me in the direction of the nearest Op Shop?|embroidery_face_2]]",
        "position": {
            "x": 615,
            "y": 109
        },
        "colorID": 0
    },
	 {
			 "title": "embroidery_face_1",
			 "tags": "",
			 "body": "{{embroidery_face,happy}} ...Oh I love the arts and crafts fair! It's so fabulous. But no, I'm off to work.",
			 "position": {
					 "x": 928,
					 "y": 324
			 },
			 "colorID": 0
	 },
	 {
			 "title": "embroidery_face_2",
			 "tags": "",
			 "body": "{{embroidery_face,angry}} ...Do I *look* like I shop at op shops to you?",
			 "position": {
					 "x": 928,
					 "y": 324
			 },
			 "colorID": 0
	 },
	{
		"title": "LegoHead",
		"tags": "",
		"body": "<<place tram_blur>>\n\n{{lego_head,default}}Here's someone new.\n\n[[{{lego_head.not_upset}}You look like you know your way around, do you know the way to the nearest park?|LegoHead1]]\n\n[[{{lego_head.angry}}Excuse me, are you able to help me?|LegoHead2]]",
		"position": {
			"x": 891,
			"y": 377
		},
		"colorID": 0
	},
	{
		"title": "LegoHead1",
		"tags": "",
		"body": "No. I'm too busy to waste my time on parks.\n\n[[Well that was short|LegoHeadReflection]]",
		"position": {
			"x": 1143,
			"y": 376
		},
		"colorID": 0
	},
	{
		"title": "LegoHead2",
		"tags": "",
		"body": "Do I look like a friggen tour guide to you?\n\n[[What just happened?|LegoHeadReflection]]",
		"position": {
			"x": 890,
			"y": 610
		},
		"colorID": 0
	},
	{
		"title": "LegoHeadReflection",
		"tags": "",
		"body": "Did this reaction surprise you?\n\nHow do you feel? Why do you think that happened?\n\nPop up: This morning their toilet blew up. They're irritated already, so whatever you say, they're going to be grumpy. Sometimes past and recent experiences can affect the way that people respond. It's not you.\n\n[[Okay. Let's keep trying.|KomodoDragon]]",
		"position": {
			"x": 1146,
			"y": 612
		},
		"colorID": 0
	},
	{
		"title": "KomodoDragon",
		"tags": "",
		"body": "Komodo looks a bit toothy. Also they are a dragon.\n\n[[Hey mate why doesn't my Myki work?|KomodoDragon1]]\n\n[[Anywhere near by that makes good craft beer?|KomodoDragon2]]",
		"position": {
			"x": 1379,
			"y": 611
		},
		"colorID": 0
	},
	{
		"title": "KomodoDragon1",
		"tags": "",
		"body": "LOL Mate Mykis never work\n\n[[Well okay|KomodoDragonReflection]]",
		"position": {
			"x": 1619,
			"y": 611
		},
		"colorID": 0
	},
	{
		"title": "KomodoDragon2",
		"tags": "",
		"body": "I hate beer mate I have no idea LOL\n\n[[Fair enough!|KomodoDragonReflection]]",
		"position": {
			"x": 1380,
			"y": 836
		},
		"colorID": 0
	},
	{
		"title": "KomodoDragonReflection",
		"tags": "",
		"body": "How did that make you feel? Why do you think that happened?\n\nPop up: ... and sometimes conversations just happen if you are open to what happens. You are not alone, a friendly non-judgemental mind can lead to many conversations.",
		"position": {
			"x": 1619,
			"y": 836
		},
		"colorID": 0
	}
];
