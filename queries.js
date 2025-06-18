//  Извличане на всички клиенти
db.customers.find()

//  Филтриране на клиенти по град
db.customers.find({ "address.city": "София" })

//  Филтриране на клиенти по таг и възраст
db.customers.find({ tags: "редовен", age: { $gt: 25 } })

//  Актуализиране на клиент – добавяне на нов таг
db.customers.updateOne(
  { email: "ivan.petrov@example.com" },
  { $push: { tags: "лоялен" } }
)

//  Изтриване на клиент с конкретен имейл
db.customers.deleteOne({ email: "georgi.georgiev@example.com" })

//  Извличане на всички поръчки
db.orders.find()

//  Филтриране на поръчки със статус "в процес"
db.orders.find({ status: "в процес" })

//  Поръчки за клиент от "maria.ivanova@example.com" със статус "в процес"
db.orders.find({ customerEmail: "maria.ivanova@example.com", status: "в процес" })

//  Обновяване на статус на поръчка
db.orders.updateOne(
  { customerEmail: "nikolay.dimitrov@example.com" },
  { $set: { status: "завършена" } }
)

// Изтриване на поръчка по статус
db.orders.deleteOne({ status: "нова" })

// Агрегиране: сума на всички поръчки по клиент
db.orders.aggregate([
  { $unwind: "$items" },
  {
    $group: {
      _id: "$customerEmail",
      totalSpent: { $sum: { $multiply: ["$items.quantity", "$items.price"] } }
    }
  }
])

// Агрегиране: брой поръчки по статус
db.orders.aggregate([
  {
    $group: {
      _id: "$status",
      count: { $sum: 1 }
    }
  }
])

// Агрегиране: сортиране по дата
db.orders.aggregate([
  { $sort: { date: -1 } }
])
