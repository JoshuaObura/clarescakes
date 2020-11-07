class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :cakes, :classes ]

  def home
  end
end
