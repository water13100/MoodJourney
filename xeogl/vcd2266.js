function showBillboard (_pos, _image) {
	var geometry = new xeogl.Geometry({
		primitive: "triangles",
		positions: [3, 3, 0, -3, 3, 0, -3, -3, 0, 3, -3, 0],
		normals: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
		uv: [1, -1, 0, -1, 0, 0, 1, 0],
		indices: [0, 1, 2, 0, 2, 3] // Ensure these will be front-faces
	});
	var material = new xeogl.PhongMaterial({
		ambient: [0.0, 0.0, 0.0],
		//shininess: 30,
		//diffuse: [0.1,0.1,0.1],
		diffuseMap: {
			type: "xeogl.Texture",
			src: _image
		},
		alpha: 1.0,
		alphaMap: {
			type: "xeogl.Texture",
			src: _image
		},
		alphaMode: "blend"
	});
	new xeogl.Mesh({
		geometry: geometry,
		material: material,
		billboard: "spherical",
		position: _pos
	});
}
