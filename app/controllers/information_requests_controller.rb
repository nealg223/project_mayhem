class InformationRequestsController < ApplicationController
  respond_to :html

  def thanks
    @email = params[:email]
  end

  def new
    @information_request = InformationRequest.new
  end

  def create
    @information_request = InformationRequest.new(params[:information_request])
    if @information_request.save
      InformationRequestMailer.welcome_email(@information_request).deliver
      redirect_to thanks_information_requests(:email => @information_request.email)
    else
      render :action => "new"
    end
  end
end
