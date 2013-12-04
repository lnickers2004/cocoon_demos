
var content = {
    "packs": {
        "3be9226b-682d-4fc8-bed2-bad7195e7e7b": {
            "hierarchy": {
                "resource_id": "3be9226b-682d-4fc8-bed2-bad7195e7e7b",
                "name": "Gangnam",
                "parent": null,
                "children": [{"scale": [1, 1, 1], "name": "Ground", "parent": "3be9226b-682d-4fc8-bed2-bad7195e7e7b", "resource_id": "dd4c3efe-1815-43d9-a687-da6708257720", "labels": [], "components": {"model": {"receiveShadows": true, "asset": "587a29ca-59d8-11e2-814f-12313b0a7a3e", "castShadows": false}, "script": {"urls": ["anisotropy.js"]}}, "position": [0, -4.366510391235352, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Skybox", "parent": "3be9226b-682d-4fc8-bed2-bad7195e7e7b", "resource_id": "24f1a39f-9844-4e4f-bcce-1fae2428a483", "labels": [], "components": {"skybox": {"negz": "7db6c306-21c1-11e1-9971-fefdb24fbd4d", "negx": "68a9e9ca-21c1-11e1-b79e-fefdb24fbd4d", "negy": "9e8addc4-21c1-11e1-84b1-fefdb24fbd4d", "posz": "87e68faa-21c1-11e1-8546-fefdb24fbd4d", "posx": "71643b24-21c1-11e1-8897-fefdb24fbd4d", "posy": "910e47da-21c1-11e1-9b5b-fefdb24fbd4d"}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Directional Light", "parent": "3be9226b-682d-4fc8-bed2-bad7195e7e7b", "resource_id": "61e49ac2-8c72-4119-8d10-97038ebc068c", "labels": [], "components": {"directionallight": {"color": "0xffffff", "shadowResolution": 2048.0, "enable": true, "intensity": 1.1, "castShadows": true}}, "position": [0, 10.119085311889648, 0], "rotation": [55.028472900390625, 115, 8.005091667175293], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Music", "parent": "3be9226b-682d-4fc8-bed2-bad7195e7e7b", "resource_id": "592f4672-f623-4a8e-9a40-77bfff42bfc1", "labels": [], "components": {"audiosource": {"activate": true, "assets": ["a552f116-59db-11e2-883d-12313b0a7a3e"], "volume": 0.0, "rollOffFactor": 1.0, "minDistance": 1.0, "maxDistance": 10000.0, "loop": true, "3d": false}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Monsters", "parent": "3be9226b-682d-4fc8-bed2-bad7195e7e7b", "resource_id": "82a5b240-598c-477c-b67f-8dca1481c256", "labels": [], "components": {}, "position": [0, 0, 0], "rotation": [0, 90, 0], "children": [{"scale": [1, 1, 1], "name": "Imp Left", "parent": "82a5b240-598c-477c-b67f-8dca1481c256", "resource_id": "bbc55990-37df-4ebd-9a5b-2baf5ddf497a", "labels": [], "components": {"model": {"receiveShadows": true, "asset": "9f215cd2-5a04-11e2-9976-12313b0a7a3e", "castShadows": true}, "animation": {"activate": true, "speed": 1.0, "assets": ["905351ec-59d7-11e2-9223-12313b0a7a3e"], "loop": true}}, "position": [-1.5, 0, 0.7011005282402039], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Imp Right", "parent": "82a5b240-598c-477c-b67f-8dca1481c256", "resource_id": "6c9bea0c-436e-4173-b68b-88ae9ba81057", "labels": [], "components": {"model": {"receiveShadows": true, "asset": "9f215cd2-5a04-11e2-9976-12313b0a7a3e", "castShadows": true}, "animation": {"activate": true, "speed": 1.0, "assets": ["905351ec-59d7-11e2-9223-12313b0a7a3e"], "loop": true}}, "position": [1.5, 0, 0.7011005282402039], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Hell Knight", "parent": "82a5b240-598c-477c-b67f-8dca1481c256", "resource_id": "e95fc2eb-1c37-4401-885e-99c874ea22e9", "labels": [], "components": {"model": {"receiveShadows": true, "asset": "97c307e2-5a04-11e2-afe6-12313b0a7a3e", "castShadows": true}, "animation": {"activate": true, "speed": 1.0, "assets": ["ac9e6f44-59d7-11e2-9cbb-12313b0a7a3e"], "loop": true}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}, {"scale": [1, 1, 1], "name": "Camera", "parent": "82a5b240-598c-477c-b67f-8dca1481c256", "resource_id": "87cb8259-9fb3-447b-b054-84f4775a20e8", "labels": [], "components": {"camera": {"fov": 48.0, "activate": true, "projection": 0.0, "clearColor": "0xbabab1ff", "offscreen": false, "orthoHeight": 100.0, "farClip": 80.0, "nearClip": 1.0}, "script": {"urls": ["first_person_camera.js"]}}, "position": [0, 1.556302547454834, 4.768274307250977], "rotation": [0, 0, 0], "children": [], "template": null}], "template": null}, {"scale": [1, 1, 1], "name": "UI", "parent": "3be9226b-682d-4fc8-bed2-bad7195e7e7b", "resource_id": "f49e7f90-6891-4f81-8197-d7a58fb506f3", "labels": [], "components": {"script": {"urls": ["ui.js"]}}, "position": [0, 0, 0], "rotation": [0, 0, 0], "children": [], "template": null}],
                "labels": [],
                "position": [0, 0, 0],
                "rotation": [0, 0, 0],
                "scale": [1, 1, 1],
                "components": {"script": {"urls": ["scene_settings.js"]}, "pack": {}}
            }
        }
    },
    "application_properties": {
        "resolution_mode": "FIXED",
        "fill_mode": "KEEP_ASPECT",
        "width": 1280,
        "height": 720,
        "engine_version": "stable",
        "libraries": []
    },
    toc: {
    "default": {
        "assets": {
            "587a29ca-59d8-11e2-814f-12313b0a7a3e": {
                "file": {
                    "filename": "apocalypse_backdrop_environment.model",
                    "hash": "8e4bcd5743752527b5c33f1caccd30c7",
                    "size": 1520808,
                    "type": "model",
                    "url": "apocalypse_backdrop_environment.model"
                },
                "name": "apocalypse_backdrop_environment.model",
                "subfiles": [
                    {
                        "filename": "play_area_n.jpg",
                        "hash": "1a6caa56c28fdec7eb317102e39637a3",
                        "size": 117542,
                        "type": "image",
                        "url": "play_area_n.jpg"
                    },
                    {
                        "filename": "rock_ground_transition_d.jpg",
                        "hash": "e325e2757dfde73e61e101e8b0f7f46e",
                        "size": 146052,
                        "type": "image",
                        "url": "rock_ground_transition_d.jpg"
                    },
                    {
                        "filename": "tree_bark_d.jpg",
                        "hash": "451dc1f6e326d455c151fda03efef2a3",
                        "size": 52877,
                        "type": "image",
                        "url": "tree_bark_d.jpg"
                    },
                    {
                        "filename": "close_rocks_1_d.jpg",
                        "hash": "8375cbd79d5370f4089e00d3c9a5df38",
                        "size": 113864,
                        "type": "image",
                        "url": "close_rocks_1_d.jpg"
                    },
                    {
                        "filename": "rock_ground_transition_n.jpg",
                        "hash": "aa03d920922f7162f63126f00dc9b09a",
                        "size": 103911,
                        "type": "image",
                        "url": "rock_ground_transition_n.jpg"
                    },
                    {
                        "filename": "close_rocks_1_n.jpg",
                        "hash": "5de97cc406cf1a9cf772b962d00c6b77",
                        "size": 124762,
                        "type": "image",
                        "url": "close_rocks_1_n.jpg"
                    },
                    {
                        "filename": "tree_bark_n.jpg",
                        "hash": "0900dd208f5a11487e163a46e2309355",
                        "size": 66518,
                        "type": "image",
                        "url": "tree_bark_n.jpg"
                    },
                    {
                        "filename": "play_area_d.jpg",
                        "hash": "fa0eea4d143c171a49dcbaa9dd9b5ea1",
                        "size": 104121,
                        "type": "image",
                        "url": "play_area_d.jpg"
                    },
                    {
                        "filename": "main_ground_1_n.jpg",
                        "hash": "e60606e6369a39e613c7971482405741",
                        "size": 41178,
                        "type": "image",
                        "url": "main_ground_1_n.jpg"
                    },
                    {
                        "filename": "main_ground_1_d.jpg",
                        "hash": "acde02b6736e3fccf772afd8b645c694",
                        "size": 147622,
                        "type": "image",
                        "url": "main_ground_1_d.jpg"
                    }
                ]
            },
            "68a9e9ca-21c1-11e1-b79e-fefdb24fbd4d": {
                "file": {
                    "filename": "rusted_east.jpg",
                    "hash": "4e308a896cb72291ce5d238ee93546b3",
                    "size": null,
                    "type": "image",
                    "url": "rusted_east.jpg"
                },
                "name": "rusted_east",
                "subfiles": []
            },
            "71643b24-21c1-11e1-8897-fefdb24fbd4d": {
                "file": {
                    "filename": "rusted_west.jpg",
                    "hash": "a895c1427f82c7f37a0c8f3f63f88bad",
                    "size": null,
                    "type": "image",
                    "url": "rusted_west.jpg"
                },
                "name": "rusted_west",
                "subfiles": []
            },
            "7db6c306-21c1-11e1-9971-fefdb24fbd4d": {
                "file": {
                    "filename": "rusted_north.jpg",
                    "hash": "60a5d06c231c08535627af14fd4e3591",
                    "size": null,
                    "type": "image",
                    "url": "rusted_north.jpg"
                },
                "name": "rusted_north",
                "subfiles": []
            },
            "87e68faa-21c1-11e1-8546-fefdb24fbd4d": {
                "file": {
                    "filename": "rusted_south.jpg",
                    "hash": "39dc6677ca5f4aa1d0538921e3628f85",
                    "size": null,
                    "type": "image",
                    "url": "rusted_south.jpg"
                },
                "name": "rusted_south",
                "subfiles": []
            },
            "905351ec-59d7-11e2-9223-12313b0a7a3e": {
                "file": {
                    "filename": "imp_gangnam_style.json",
                    "hash": "1a7f6f4b93b149fc32c0b212b4e2537b",
                    "size": 857729,
                    "type": "animation",
                    "url": "imp_gangnam_style.json"
                },
                "name": "gangnam_imp_dance",
                "subfiles": []
            },
            "910e47da-21c1-11e1-9b5b-fefdb24fbd4d": {
                "file": {
                    "filename": "rusted_up.jpg",
                    "hash": "77fea0a249ffe52ea248e4a0191e8f13",
                    "size": null,
                    "type": "image",
                    "url": "rusted_up.jpg"
                },
                "name": "rusted_up",
                "subfiles": []
            },
            "97c307e2-5a04-11e2-afe6-12313b0a7a3e": {
                "file": {
                    "filename": "hellknight_gangnam_style.model",
                    "hash": "23dfbbd1665820e68f5c717aafff3b85",
                    "size": 147852,
                    "type": "model",
                    "url": "hellknight_gangnam_style.model"
                },
                "name": "hellknight_gangnam_style.model",
                "subfiles": [
                    {
                        "filename": "hellknight_local_yinv.jpg",
                        "hash": "99dc80b0a2ce7d6863eb9b115cac984b",
                        "size": 56500,
                        "type": "image",
                        "url": "hellknight_local_yinv.jpg"
                    },
                    {
                        "filename": "hellknight.jpg",
                        "hash": "3a253dcdd328ccd33ace16b370fbf033",
                        "size": 43299,
                        "type": "image",
                        "url": "hellknight.jpg"
                    },
                    {
                        "filename": "tongue_local_yinv.jpg",
                        "hash": "d91f0500080613fd4ae65a22911435b8",
                        "size": 1595,
                        "type": "image",
                        "url": "tongue_local_yinv.jpg"
                    },
                    {
                        "filename": "hellknight_s.jpg",
                        "hash": "591807efce2536fbc432f1a3e9572232",
                        "size": 11687,
                        "type": "image",
                        "url": "hellknight_s.jpg"
                    },
                    {
                        "filename": "tongue.jpg",
                        "hash": "2d98a18cc006625f71623e5742764aa6",
                        "size": 1308,
                        "type": "image",
                        "url": "tongue.jpg"
                    }
                ]
            },
            "9e8addc4-21c1-11e1-84b1-fefdb24fbd4d": {
                "file": {
                    "filename": "rusted_down.jpg",
                    "hash": "a3021f274497f38b541a15314c43c42c",
                    "size": null,
                    "type": "image",
                    "url": "rusted_down.jpg"
                },
                "name": "rusted_down",
                "subfiles": []
            },
            "9f215cd2-5a04-11e2-9976-12313b0a7a3e": {
                "file": {
                    "filename": "imp_gangnam_style.model",
                    "hash": "10dd8653e02f368a947e54c477b6b524",
                    "size": 82288,
                    "type": "model",
                    "url": "imp_gangnam_style.model"
                },
                "name": "imp_gangnam_style.model",
                "subfiles": [
                    {
                        "filename": "imp_d.jpg",
                        "hash": "e5051ffa70b5ae4f35eaa6e3638eeb4a",
                        "size": 31308,
                        "type": "image",
                        "url": "imp_d.jpg"
                    },
                    {
                        "filename": "imp_local_yinv.jpg",
                        "hash": "389120e90f0a532017c3d9619a27ab5c",
                        "size": 43291,
                        "type": "image",
                        "url": "imp_local_yinv.jpg"
                    },
                    {
                        "filename": "imp_s.jpg",
                        "hash": "64318f09b354c3d16a81e6704753362e",
                        "size": 24252,
                        "type": "image",
                        "url": "imp_s.jpg"
                    }
                ]
            },
            "a552f116-59db-11e2-883d-12313b0a7a3e": {
                "file": {
                    "filename": "gangnam_style.ogg",
                    "hash": "ad33c4a3065b1507483221faf100ae18",
                    "size": 1664213,
                    "type": "audio",
                    "url": "gangnam_style.ogg"
                },
                "name": "gangnam_style.ogg",
                "subfiles": []
            },
            "ac9e6f44-59d7-11e2-9cbb-12313b0a7a3e": {
                "file": {
                    "filename": "hellknight_gangnam_style.json",
                    "hash": "4a927d97c760a4b01a3e1e4c51c57459",
                    "size": 851210,
                    "type": "animation",
                    "url": "hellknight_gangnam_style.json"
                },
                "name": "gangnam_hellknight_dance",
                "subfiles": []
            }
        },
        "packs": [
            "3be9226b-682d-4fc8-bed2-bad7195e7e7b"
        ]
    }
}
};
pc.content = new pc.fw.ContentFile(content);