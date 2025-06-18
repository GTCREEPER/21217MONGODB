// Вмъкване на клиенти в колекцията "customers"
db.customers.insertMany([
  {
    name: "Иван Петров",
    email: "ivan.petrov@example.com",
    age: 28,
    address: {
      city: "София",
      street: "Бул. България 100"
    },
    tags: ["редовен", "онлайн"],
    registeredAt: new Date("2023-01-15")
  },
  {
    name: "Мария Иванова",
    email: "maria.ivanova@example.com",
    age: 34,
    address: {
      city: "Пловдив",
      street: "Ул. Васил Левски 23"
    },
    tags: ["VIP"],
    registeredAt: new Date("2022-11-03")
  },
  {
    name: "Георги Георгиев",
    email: "georgi.georgiev@example.com",
    age: 41,
    address: {
      city: "Варна",
      street: "Ул. Отец Паисий 15"
    },
    tags: ["нов"],
    registeredAt: new Date("2024-02-10")
  },
  {
    name: "Николай Димитров",
    email: "nikolay.dimitrov@example.com",
    age: 22,
    address: {
      city: "Русе",
      street: "Ул. Тича 8"
    },
    tags: ["онлайн", "редовен"],
    registeredAt: new Date("2024-05-01")
  },
  {
    name: "Даниела Николова",
    email: "daniela.nikolova@example.com",
    age: 29,
    address: {
      city: "Бургас",
      street: "Ул. Славянска 12"
    },
    tags: ["VIP", "нов"],
    registeredAt: new Date("2023-07-19")
  }
])

// Вмъкване на поръчки в колекцията "orders"
db.orders.insertMany([
  {
    customerEmail: "ivan.petrov@example.com",
    date: new Date("2024-01-01"),
    items: [
      { product: "Лаптоп", quantity: 1, price: 1500 },
      { product: "Мишка", quantity: 2, price: 20 }
    ],
    status: "завършена"
  },
  {
    customerEmail: "maria.ivanova@example.com",
    date: new Date("2024-03-12"),
    items: [
      { product: "Телефон", quantity: 1, price: 800 }
    ],
    status: "в процес"
  },
  {
    customerEmail: "georgi.georgiev@example.com",
    date: new Date("2024-05-05"),
    items: [
      { product: "Монитор", quantity: 2, price: 300 }
    ],
    status: "завършена"
  },
  {
    customerEmail: "nikolay.dimitrov@example.com",
    date: new Date("2024-05-28"),
    items: [
      { product: "Клавиатура", quantity: 1, price: 70 },
      { product: "USB кабел", quantity: 3, price: 10 }
    ],
    status: "нова"
  },
  {
    customerEmail: "daniela.nikolova@example.com",
    date: new Date("2024-06-01"),
    items: [
      { product: "Таблет", quantity: 1, price: 400 }
    ],
    status: "в процес"
  }
])
// Вмъкване на клиенти в колекцията "customers"
db.customers.insertMany([
  {
    name: "Иван Петров",
    email: "ivan.petrov@example.com",
    age: 28,
    address: {
      city: "София",
      street: "Бул. България 100"
    },
    tags: ["редовен", "онлайн"],
    registeredAt: new Date("2023-01-15")
  },
  {
    name: "Мария Иванова",
    email: "maria.ivanova@example.com",
    age: 34,
    address: {
      city: "Пловдив",
      street: "Ул. Васил Левски 23"
    },
    tags: ["VIP"],
    registeredAt: new Date("2022-11-03")
  },
  {
    name: "Георги Георгиев",
    email: "georgi.georgiev@example.com",
    age: 41,
    address: {
      city: "Варна",
      street: "Ул. Отец Паисий 15"
    },
    tags: ["нов"],
    registeredAt: new Date("2024-02-10")
  },
  {
    name: "Николай Димитров",
    email: "nikolay.dimitrov@example.com",
    age: 22,
    address: {
      city: "Русе",
      street: "Ул. Тича 8"
    },
    tags: ["онлайн", "редовен"],
    registeredAt: new Date("2024-05-01")
  },
  {
    name: "Даниела Николова",
    email: "daniela.nikolova@example.com",
    age: 29,
    address: {
      city: "Бургас",
      street: "Ул. Славянска 12"
    },
    tags: ["VIP", "нов"],
    registeredAt: new Date("2023-07-19")
  }
])

// Вмъкване на поръчки в колекцията "orders"
db.orders.insertMany([
  {
    customerEmail: "ivan.petrov@example.com",
    date: new Date("2024-01-01"),
    items: [
      { product: "Лаптоп", quantity: 1, price: 1500 },
      { product: "Мишка", quantity: 2, price: 20 }
    ],
    status: "завършена"
  },
  {
    customerEmail: "maria.ivanova@example.com",
    date: new Date("2024-03-12"),
    items: [
      { product: "Телефон", quantity: 1, price: 800 }
    ],
    status: "в процес"
  },
  {
    customerEmail: "georgi.georgiev@example.com",
    date: new Date("2024-05-05"),
    items: [
      { product: "Монитор", quantity: 2, price: 300 }
    ],
    status: "завършена"
  },
  {
    customerEmail: "nikolay.dimitrov@example.com",
    date: new Date("2024-05-28"),
    items: [
      { product: "Клавиатура", quantity: 1, price: 70 },
      { product: "USB кабел", quantity: 3, price: 10 }
    ],
    status: "нова"
  },
  {
    customerEmail: "daniela.nikolova@example.com",
    date: new Date("2024-06-01"),
    items: [
      { product: "Таблет", quantity: 1, price: 400 }
    ],
    status: "в процес"
  }
])
