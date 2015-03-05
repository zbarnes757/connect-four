
get '/' do
  erb :index
end

post '/signup' do
  user = User.new(params)
  if user.save
    session[:user_id]=user.id
  else
    flash[:errors]=user.errors.full_messages
  end
  redirect '/'
end

post '/login' do
  @user = User.find_by(email: params[:email])
  if @user && @user.authenticate(params[:password])
    session[:user_id] = @user.id
    redirect '/'
  else
    flash[:errors] = ["Try again"]
    redirect '/'
  end

end

get '/logout' do
  session[:user_id]=nil
  redirect '/'
end
