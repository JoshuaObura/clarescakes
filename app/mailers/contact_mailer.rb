class ContactMailer < ApplicationMailer
  def contact_form_email
   @contact = params[:contact]
  #  @url  = 'http://example.com/login'
    mail(to: "joshobura@gmail.com", subject: 'interest in cakes')
  end
end
