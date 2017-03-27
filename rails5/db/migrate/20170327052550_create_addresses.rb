class CreateAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :addresses do |t|
      t.string :name
      t.references :organization, foreign_key: true

      t.timestamps
    end
  end
end
