class Transaction < ApplicationRecord

  CATEGORIES = %w[food transport utilities entertainment health other].freeze
  STATUSES = %w[pending settled].freeze

  validates :description, presence: true
  validates :amount, presence: true
  validates :category, inclusion: {in: CATEGORIES}
  validates :status, inclusion: {in: STATUSES}
end
