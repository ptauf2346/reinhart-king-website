/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "foyc05hosm9crjz",
    "created": "2024-04-22 19:25:56.561Z",
    "updated": "2024-04-22 19:25:56.561Z",
    "name": "cindy_about",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ubkt4nct",
        "name": "paragraph",
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
        "id": "gbctbuud",
        "name": "order",
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
  const collection = dao.findCollectionByNameOrId("foyc05hosm9crjz");

  return dao.deleteCollection(collection);
})
