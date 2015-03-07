class AddGamesColumnUsers < ActiveRecord::Migration
  def change
    add_column :users, :games_won, :integer, default: 0
  end
end
