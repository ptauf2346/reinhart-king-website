/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "pi48jph52qc8do0",
    "created": "2024-04-22 19:27:12.150Z",
    "updated": "2024-04-22 19:27:12.150Z",
    "name": "cindy_education",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qgg5ehtu",
        "name": "degree",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pi48jph52qc8do0");

  return dao.deleteCollection(collection);
})
