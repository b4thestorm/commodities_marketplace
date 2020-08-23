Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :users do
    resources :commodities, only: [:new, :create, :index]
  end
  # devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
#, controllers: {sessions: 'overrides/sessions'}
