Rails.application.routes.draw do
  root "pages#home"

  get "hi_tim", to: "pages#hi_tim"
end
