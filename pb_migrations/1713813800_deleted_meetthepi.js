/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("182k9yl0nsq3b26");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "182k9yl0nsq3b26",
    "created": "2024-04-22 19:21:23.138Z",
    "updated": "2024-04-22 19:21:23.138Z",
    "name": "meetthepi",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "p7qcafnt",
        "name": "titles",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bvccfhci",
        "name": "description",
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
})
