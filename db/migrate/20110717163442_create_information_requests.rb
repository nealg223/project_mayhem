class CreateInformationRequests < ActiveRecord::Migration
  def self.up
    create_table :information_requests do |t|
      t.string :name
      t.string :email
      t.string :login
      t.boolean :mailing_list, :default => false

      t.timestamps
    end
  end

  def self.down
    drop_table :information_requests
  end
end
