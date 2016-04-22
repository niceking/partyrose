Rails.application.routes.draw do
  root "pages#home"

  get "hi_tim", to: "friend_pages#hi_tim"
  get "hi_jared", to: "friend_pages#hi_jared"
end
