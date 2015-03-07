get '/' do
  erb :index
end

get '/find_user' do
 user = User.where(email: params[:email]).first
 content_type :json
 user.to_json
end

post '/signup' do
  user = User.new(params)
  if user.save
    content_type :json
    user.to_json
  else
    flash[:errors]=user.errors.full_messages
    # redirect '/'
  end
end



# post '/login' do
#   @user = User.find_by(email: params[:email])
#   if @user && @user.authenticate(params[:password])
#     session[:user_id] = @user.id
#     redirect '/'
#   else
#     flash[:errors] = ["Try again"]
#     redirect '/'
#   end

# end

# get '/logout' do
#   session[:user_id]=nil
#   redirect '/'
# end

