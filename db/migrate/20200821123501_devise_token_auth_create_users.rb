class DeviseTokenAuthCreateUsers < ActiveRecord::Migration[6.0]
  def change
      ## Required
    add_column  :users, :provider, :string, :null => false, :default => "email"
    add_column  :users, :uid,      :string, :null => false, :default => ""

      ## Recoverable
    add_column :users, :allow_password_change,  :boolean , :default => false

      ## Confirmable
    # add_column :users, :confirmation_token,   :string
    # add_column :users, :confirmed_at,         :datetime
    # add_column :users, :confirmation_sent_at, :datetime
    # add_column :users, :unconfirmed_email ,   :string # Only if using reconfirmable

      ## User Info
    add_column :users,  :nickname, :string
    add_column :users,  :image,    :string

      ## Tokens
    add_column :users, :tokens,    :json

    add_index :users, [:uid, :provider],     unique: true
    # add_index :users, :confirmation_token,   unique: true
    # add_index :users, :unlock_token,       unique: true
  end
end
