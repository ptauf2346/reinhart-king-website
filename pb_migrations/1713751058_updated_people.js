/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9t30nglpx788qy6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ej9tgmj6",
    "name": "hometown",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fsimyc17",
    "name": "picture",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9t30nglpx788qy6")

  // remove
  collection.schema.removeField("ej9tgmj6")

  // remove
  collection.schema.removeField("fsimyc17")

  return dao.saveCollection(collection)
})
