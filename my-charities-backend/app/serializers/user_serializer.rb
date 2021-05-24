class UserSerializer
  include FastJsonapi::ObjectSerializer

  attributes :name, :email
  attribute :charities do |user|
    user.charities
  end
end