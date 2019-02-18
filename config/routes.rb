Rails.application.routes.draw do
  get "chats" => "messages#index"
end
