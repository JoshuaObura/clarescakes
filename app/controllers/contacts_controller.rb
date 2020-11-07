class ContactsController < ApplicationController
  require 'mail_form'
  def new
    @contact = Contact.new
  end
    
  def create
    @contact = Contact.new()
    @contact.request = request
    @contact.name = params[:name]
    @contact.email = params[:email]
    @contact.message = params[:message]
    if @contact.deliver
      render json: {message: "Email sent successfully"}
    else
      render json: @contact.errors
    end
  end
end