class CreateTransactions < ActiveRecord::Migration[8.0]
  def change
    create_table :transactions do |t|
      t.string :description
      t.decimal :amount, default: 0
      t.string :category
      t.string :status, default: 'pending'

      t.timestamps
    end
  end
end
