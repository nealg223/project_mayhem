class InformationRequest < ActiveRecord::Base
  attr_accessible :name, :email
  
  EMAIL_PATTERN = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  MAXIMUM_NAME_LENGTH = 50
  
  validates :name,  :presence => true,
                    :length	  => { :maximum => MAXIMUM_NAME_LENGTH }
                    
  validates :email, :presence => true,
                    :format	  => { :with => EMAIL_PATTERN },
                    :uniqueness => { :case_sensitive => false }
end
