class ContactsController < ApplicationController
  skip_before_action :authenticate_user!
  def create
    @contact = Contact.new(contact_params)

    if @contact.save
      ContactMailer.with(contact: @contact).contact_form_email.deliver
      flash[:notice] = "Message Sent Successfully! Thank you."
      redirect_to contact_us_path
    else
      render 'pages/contact'
    end
  end

  private
  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end
