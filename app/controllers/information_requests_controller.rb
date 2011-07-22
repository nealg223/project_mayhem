class InformationRequestsController < ApplicationController

  def thanks
    @email = params[:email]

    respond_to do |format|
      format.html # show.html.erb
    end
  end


  def new
    @information_request = InformationRequest.new

    respond_to do |format|
      format.html # new.html.erb
    end
  end


  def create
    @information_request = InformationRequest.new(params[:information_request])

    respond_to do |format|
      if @information_request.save
        InformationRequestMailer.welcome_email(@information_request).deliver
        
        format.html { redirect_to(:controller => :information_requests, :action => :thanks, :email => @information_request.email) }
      
      else
        format.html { render :action => "new" }
      end
    end
  end

end
