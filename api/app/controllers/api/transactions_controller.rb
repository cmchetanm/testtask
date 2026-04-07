class Api::TransactionsController < ApplicationController

  def index
    transactions = Transaction.all
    if params[:category].present?
      transactions = transactions.where(category: params[:category])
    end
    render json: transactions
  end
end
