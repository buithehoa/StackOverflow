class CreateTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :evaluation_id, null: false

      t.timestamps
    end

    # add_reference :teams, :evaluations, foreign_key: true
  end
end
