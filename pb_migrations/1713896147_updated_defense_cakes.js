/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("quhfgsxq9wltr4n")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("quhfgsxq9wltr4n")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
