class UserMailer < ActionMailer::Base
  default :from => "neal@codeacademy.org"
  
  def welcome_email(user)
    @user = user
    @url = "http://codeacademy.org/subscribe"
    attachments["brochure.pdf"] = File.read("#{Rails.root}/public/pdf/brochure.pdf")
    mail(:to => user.email,
         :subject => "Code Academy Brochure")
  end
end