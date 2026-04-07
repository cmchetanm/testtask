Transaction.destroy_all

Transaction.create!(
  description: "Grocery shopping",
  amount: 150.75,
  category: "food",
  status: "settled"
)
Transaction.create!(
  description: "Monthly bus pass",
  amount: 50.00,
  category: "transport",
  status: "pending"
)
Transaction.create!(
  description: "Electricity bill",
    amount: 120.50, 
    category: "utilities",
    status: "pending"
)
Transaction.create!(
    description: "Movie night",
    amount: 30.00,
    category: "entertainment",
    status: "settled"
)
Transaction.create!(
    description: "Doctor's appointment",
    amount: 200.00,
    category: "health",
    status: "pending"
)
Transaction.create!(
    description: "Online course subscription",
    amount: 99.99,
    category: "other",
    status: "settled"
)
Transaction.create!(
    description: "Dinner at a restaurant",
    amount: 80.00,
    category: "food",
    status: "pending"
)
Transaction.create!(
    description: "Taxi ride",
    amount: 25.00,
    category: "transport",
    status: "settled"
)
Transaction.create!(
    description: "Water bill",
    amount: 45.00,
    category: "utilities",
    status: "pending"
)
Transaction.create!(
    description: "Concert tickets",
    amount: 120.00,
    category: "entertainment",
    status: "pending"
)