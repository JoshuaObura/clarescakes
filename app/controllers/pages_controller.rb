class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :cakes, :classes, :contact ]

  def home
  end
  
  def contact
    @contact = Contact.new
  end
end
