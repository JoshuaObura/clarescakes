class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :cakes, :contact ]

  def home
    @contact = Contact.new
  end
end
