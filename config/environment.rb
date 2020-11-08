# Load the Rails application.
require_relative 'application'
ActionMailer::Base.smtp_settings = {
  user_name: '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',
  password: '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',
  domain: 'clarescakesyourdesign.com',
  address: 'smtp.sendgrid.net',
  port: 587,
  authentication: :plain,
  enable_starttls_auto: true
}
#  user_name: ENV['SENDGRID_USERNAME'],
#  password: ENV['SENDGRID_PASSWORD'],
# Initialize the Rails application.
Rails.application.initialize!
