# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
ProjectMayhem::Application.initialize!

# Adds a tweet button to the rails application
config.gem "tweet-button"