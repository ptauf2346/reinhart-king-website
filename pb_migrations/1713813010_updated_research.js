/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v6121ckigj324uv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ce9vdhwu",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v6121ckigj324uv")

  // remove
  collection.schema.removeField("ce9vdhwu")

  return dao.saveCollection(collection)
})
