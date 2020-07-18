var APP_DATA = {
  "scenes": [
    {
      "id": "0-1_fore-court",
      "name": "1_fore court",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.06293687528122227,
        "pitch": 0.09487585973048596,
        "fov": 1.3729094996294073
      },
      "linkHotspots": [
        {
          "yaw": 0.00012424728910787053,
          "pitch": 0.011894945295811254,
          "rotation": 0,
          "target": "2-panorama1"
        },
        {
          "yaw": 1.4491582030320025,
          "pitch": 0.07214410933766402,
          "rotation": 0,
          "target": "1-3_maze"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-3_maze",
      "name": "3_maze",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.8360487790744262,
        "pitch": 0.10028324986560833,
        "fov": 1.3729094996294073
      },
      "linkHotspots": [
        {
          "yaw": 2.130112532391359,
          "pitch": 0.09159572669931038,
          "rotation": 0,
          "target": "0-1_fore-court"
        },
        {
          "yaw": -2.6024853474436878,
          "pitch": 0.0454578361328668,
          "rotation": 0,
          "target": "2-panorama1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-panorama1",
      "name": "Panorama1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7022788670078395,
        "pitch": 0.21522224623974573,
        "fov": 1.3729094996294073
      },
      "linkHotspots": [
        {
          "yaw": 2.3132991267124057,
          "pitch": 0.01912247089157404,
          "rotation": 0,
          "target": "0-1_fore-court"
        },
        {
          "yaw": -0.16367332653917543,
          "pitch": 0.015407822735351573,
          "rotation": 0,
          "target": "1-3_maze"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
