class AddImageToCharities < ActiveRecord::Migration[6.1]
  def change
    add_column :charities, :image, :string
  end
end
