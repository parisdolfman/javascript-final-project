class DropListCharities < ActiveRecord::Migration[6.1]
  def up
    drop_table :list_charities
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
