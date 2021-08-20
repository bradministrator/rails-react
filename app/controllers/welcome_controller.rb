class WelcomeController < ApplicationController
  def index
  end

  def tictactoe
  end

  def react
    # flash[:primary] = 'check it out'
    # flash[:danger] = 'omg watch out'
    @backend_data=[{id: 1, title: 'Hello Backend 2', content: 'Welcome to backend stuff!'}, {id: 2, title: 'controller thing', content: 'more stuff from the backend'}]
  end

  def react_forms
    
  end

  def cvi

  end
end
