const pointerData = [
    { time: 4993, event: 12, data: { target: 146, x: 1141, y: 473 } },
    { time: 4999, event: 12, data: { target: 146, x: 1147, y: 472 } },
    { time: 5014, event: 12, data: { target: 146, x: 1162, y: 470 } },
    { time: 5028, event: 12, data: { target: 146, x: 1183, y: 466 } },
    { time: 5042, event: 12, data: { target: 146, x: 1216, y: 462 } },
    { time: 5064, event: 12, data: { target: 55, x: 1294, y: 457 } },
    { time: 5078, event: 12, data: { target: 55, x: 1348, y: 455 } },
    { time: 5092, event: 12, data: { target: 55, x: 1397, y: 455 } },
    { time: 5114, event: 12, data: { target: 55, x: 1446, y: 458 } },
    { time: 5128, event: 12, data: { target: 55, x: 1461, y: 461 } },
    { time: 5149, event: 12, data: { target: 55, x: 1469, y: 463 } },
    { time: 5472, event: 12, data: { target: 55, x: 1458, y: 468 } },
    { time: 5478, event: 12, data: { target: 55, x: 1440, y: 472 } },
    { time: 5493, event: 12, data: { target: 55, x: 1351, y: 473 } },
    { time: 5514, event: 12, data: { target: 146, x: 1176, y: 463 } },
    { time: 5528, event: 12, data: { target: 146, x: 1083, y: 463 } },
    { time: 5542, event: 12, data: { target: 145, x: 1041, y: 459 } },
    { time: 5565, event: 12, data: { target: 145, x: 1002, y: 453 } },
    { time: 5578, event: 12, data: { target: 145, x: 988, y: 450 } },
    { time: 5599, event: 12, data: { target: 145, x: 979, y: 448 } },
    { time: 5821, event: 12, data: { target: 145, x: 965, y: 439 } },
    { time: 5828, event: 12, data: { target: 75, x: 946, y: 427 } },
    { time: 5849, event: 12, data: { target: 98, x: 819, y: 353 } },
    { time: 5864, event: 12, data: { target: 97, x: 727, y: 302 } },
    { time: 5878, event: 12, data: { target: 96, x: 656, y: 252 } },
    { time: 5892, event: 12, data: { target: 96, x: 583, y: 184 } },
    { time: 5914, event: 12, data: { target: 94, x: 482, y: 69 } },
    { time: 5928, event: 12, data: { target: 140, x: 458, y: 38 } },
    { time: 5949, event: 12, data: { target: 140, x: 449, y: 27 } },
    { time: 6178, event: 12, data: { target: 140, x: 456, y: 35 } },
    { time: 6185, event: 12, data: { target: 140, x: 462, y: 45 } },
    { time: 6192, event: 12, data: { target: 140, x: 466, y: 55 } },
    { time: 6213, event: 12, data: { target: 94, x: 477, y: 93 } },
    { time: 6228, event: 12, data: { target: 55, x: 482, y: 119 } },
    { time: 6242, event: 12, data: { target: 55, x: 485, y: 145 } },
    { time: 6263, event: 12, data: { target: 55, x: 485, y: 177 } },
    { time: 6278, event: 12, data: { target: 55, x: 485, y: 193 } },
    { time: 6292, event: 12, data: { target: 55, x: 484, y: 203 } },
    { time: 6306, event: 12, data: { target: 55, x: 483, y: 208 } },
    { time: 6564, event: 12, data: { target: 55, x: 471, y: 200 } },
    { time: 6578, event: 12, data: { target: 55, x: 416, y: 165 } },
    { time: 6592, event: 12, data: { target: 55, x: 338, y: 115 } },
    { time: 6613, event: 12, data: { target: 3, x: 227, y: 29 } },
    { time: 6620, event: 12, data: { target: 3, x: 196, y: 4 } },
  ];

  const heatmapInstance = h337.create({
    container: document.getElementById("heatmapContainer"),
    radius: 10, // size of each heat point
    maxOpacity: 1,
    minOpacity: 0.6,
    blur: 0,
    gradient: {
      0.2: "blue",
      0.1: "yellow",
      0.3: "red",
    },
  });

  // Adjust the pointer data to fit the viewport
  const heatmapData = {
    max: 10, // Adjust maximum intensity
    data: pointerData.map((p) => {
      return { x: p.data.x, y: p.data.y, value: 1 };
    }),
  };

  heatmapInstance.setData(heatmapData);