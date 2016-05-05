Rails.application.routes.draw do
  root "pages#home"

  get "party_1", to: "pages#alternate"
  get "party_2", to: "pages#party"
  get "dancefloor", to: "pages#rose"


  get "hi_tim", to: "friend_pages#hi_tim"
  get "hi_jared", to: "friend_pages#hi_jared"
  get "hi_matthew", to: "friend_pages#hi_matthew"
  get "hi_merrin", to: "friend_pages#hi_merrin"
end
