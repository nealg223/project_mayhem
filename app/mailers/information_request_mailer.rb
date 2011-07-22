class InformationRequestMailer < ActionMailer::Base
  default :from => "neal@codeacademy.org"
  
  def welcome_email(information_request)
    @information_request = information_request
    @url = "http://codeacademy.org/subscribe"
    attachments["brochure.pdf"] = File.read("#{Rails.root}/public/pdf/brochure.pdf")
    mail(:to => information_request.email,
         :subject => "Code Academy Brochure")
  end
end