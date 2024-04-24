/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9t30nglpx788qy6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ktsrutko",
    "name": "position",
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
  const collection = dao.findCollectionByNameOrId("9t30nglpx788qy6")

  // remove
  collection.schema.removeField("ktsrutko")

  return dao.saveCollection(collection)
})
