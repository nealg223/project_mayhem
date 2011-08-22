class PagesController < ApplicationController  
  def home
    respond_to do |format|
      format.html
      format.mobile
    end
  end
  
  def lightbox
    render :layout => nil
  end
end
