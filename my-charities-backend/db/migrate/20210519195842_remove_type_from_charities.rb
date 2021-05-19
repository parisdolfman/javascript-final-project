class RemoveTypeFromCharities < ActiveRecord::Migration[6.1]
  def change
    remove_column :charities, :type, :string
  end
end
