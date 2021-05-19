# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'AAA')

Charity.create(name: 'United Way Worldwide', type: 'Domestic Needs')
Charity.create(name: 'Feeding America', type: 'Domestic Needs')
Charity.create(name: 'Animal Welfare Institute', type: 'Animal Protection')
Charity.create(name: 'Direct Relief', type: 'International Needs')
Charity.create(name: 'Salvation Army', type: 'Domestic Needs')
Charity.create(name: 'Bat Conservation International', type: 'Animal Protection')
Charity.create(name: 'St. Jude Childrens Research Hospital', type: 'Medical')
Charity.create(name: 'YMCA of the USA', type: 'Youth')
Charity.create(name: 'Wildlife Conservation Society', type: 'Animal Protection')
Charity.create(name: 'Compassion International', type: 'International Needs')
Charity.create(name: 'Boys & Girls Clubs of America', type: 'Youth')
Charity.create(name: 'American Cancer Society', type: 'Health')
Charity.create(name: 'PetSmart Charities', type: 'Animal Protection')
Charity.create(name: 'Nature Conservancy', type: 'Environment/Animal')
Charity.create(name: 'Mount Sinai Health Systems', type: 'Medical')
Charity.create(name: 'Planned Parenthood Federation of America', type: 'Domestic Needs')
Charity.create(name: 'Dian Fossey Gorilla Fund International', type: 'Animal Protection')

puts data loaded success