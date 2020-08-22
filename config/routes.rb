Rails.application.routes.draw do
  root :to => "home#index"
  match '*path', to: 'home#index', via: :all
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    sessions: 'overrides/sessions'
  }
  # devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
