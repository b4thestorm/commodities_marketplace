module Overrides
  class SessionsController < ::DeviseTokenAuth::SessionsController
    def resource_data(opts = {})
      opts[:resource_json] || @resource.as_json
    end

    def render_create_success
       render json: { data: ActiveModelSerializers::SerializableResource.new(@resource).as_json }
    end
  end
end
