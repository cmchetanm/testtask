Rails.application.routes.draw do
  namespace :api do
    resources :transactions, only: [:index]
  end
end
