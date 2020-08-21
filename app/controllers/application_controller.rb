class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  before_action :configure_permitted_parameters, if: :devise_controller?

  #curl http://localhost:3000/auth --data "email=test123@example.com&password=test123&first_name=test&user_type=buyer"



  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:user_type, :first_name])
  end
end
