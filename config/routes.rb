Rails.application.routes.draw do
     root to: 'messages#index'
     get "chats" => "messages#index"
end
