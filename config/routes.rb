ProjectMayhem::Application.routes.draw do
  
  resources :information_requests, :only => [:new, :create] do
    collection do
      get 'thanks' => "information_requests#thanks"
    end
  end

  %w(home program staff community videos pricing apply sandbox faq lightbox).each do |slug|
    match "/#{slug}", :to => "pages##{slug}"
  end
    
  match '/download',  :to => 'users#download'
  match "email_registration_not_found" => "pages#email_registration_not_found"


  root :to => "pages#home"
  
  match "send_email" => "email#send_it"
end
