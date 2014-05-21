require 'spec_helper'

feature 'User Management' do
  scenario 'adds a new user' do
    visit root_path
    
    expect { click_link 'sign up'
      fill_in 'Name', with: "Tyrion"
      fill_in 'Email', with: "ty@ty.com"
      fill_in 'Password', with: "secretpass"
      fill_in 'Password confirmation', with: "secretpass"
      click_button 'Create User'
    }.to change(User, :count).by(1)

    expect(current_path).to eq root_path
    expect(page).to have_content 'user successfully created'

  end
end
