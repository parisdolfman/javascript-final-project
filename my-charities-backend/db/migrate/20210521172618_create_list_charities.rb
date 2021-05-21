class CreateListCharities < ActiveRecord::Migration[6.1]
  def change
    create_table :list_charities do |t|
      t.integer :list_id
      t.integer :charity_id

      t.timestamps
    end
  end
end
