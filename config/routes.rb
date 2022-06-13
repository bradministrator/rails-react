Rails.application.routes.draw do
  root 'welcome#index'

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/tictactoe', to: 'welcome#tictactoe'
  get '/react', to: 'welcome#react'
  get '/react-forms', to: 'welcome#react_forms'
  get '/cvi', to: 'welcome#cvi'

  get 'canvas_tutorial', to: 'welcome#canvas_tutorial'
  get '/hexgrid', to: 'welcome#hexgrid'
end
