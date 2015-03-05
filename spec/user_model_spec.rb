require 'spec_helper'

describe User do
  describe "at creation" do

    let(:user) do
      User.new(
        name: "Person",
        email: "person@gmail.com",
        password: "1234"
        )

    end

    it "should not accept an empty name, email, or password" do
    user.name = nil
    expect(user).to_not be_valid
    end

    it "should only accept valid emails" do
      user.email = "notanemail"
      expect(user).to_not be_valid
    end

    it "should not accept duplicate emails" do
      user2 = User.create(name: "person2", email: "person@gmail.com", password: "1234")
      expect(user).to_not be_valid
    end
  end
end
