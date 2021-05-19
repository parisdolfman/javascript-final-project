class AddTypeToCharities < ActiveRecord::Migration[6.1]
  def change
    add_column :charities, :type, :string
  end
end
