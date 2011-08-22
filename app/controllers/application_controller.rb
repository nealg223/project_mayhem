class ApplicationController < ActionController::Base
  before_filter :detect_mobile_device
  protect_from_forgery

private  
  def detect_mobile_device
    request.format = :mobile if request.user_agent =~ /Mobile|Android/
  end  
end
