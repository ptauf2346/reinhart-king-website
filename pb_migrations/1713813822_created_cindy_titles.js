/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jx6j0k8tlnpmo9e",
    "created": "2024-04-22 19:23:42.213Z",
    "updated": "2024-04-22 19:23:42.213Z",
    "name": "cindy_titles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "y5gaznh9",
        "name": "title",
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
        "id": "yoin7uki",
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
  const collection = dao.findCollectionByNameOrId("jx6j0k8tlnpmo9e");

  return dao.deleteCollection(collection);
})
