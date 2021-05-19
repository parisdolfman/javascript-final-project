# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'AAA')

Charity.create(name: 'United Way Worldwide', type: 'Domestic Needs', image: 'https://www.unitedway.org/assets/img/new-logo.svg')
Charity.create(name: 'Feeding America', type: 'Domestic Needs', image: 'https://www.feedingamerica.org/themes/custom/ts_feeding_america/images/svgs/logo-2020.svg')
Charity.create(name: 'Animal Welfare Institute', type: 'Animal Protection', image: 'https://awionline.org/themes/awi/logo.svg')
Charity.create(name: 'Direct Relief', type: 'International Needs', image: 'https://www.qlik.com/blog/assets/uploads/images/direct-relief.jpg')
Charity.create(name: 'Salvation Army', type: 'Domestic Needs', image: 'https://www.salvationarmyusa.org/templates/usa_nhq_symphony/static_resources/images/global/shield.svg')
Charity.create(name: 'Bat Conservation International', type: 'Animal Protection', image: 'https://www.batcon.org/wp-content/uploads/2020/07/19_BCI_LOGO_ALTERNATE_CIRCULAR_WEBSITE_RGB_FULL_COLOR.svg')
Charity.create(name: 'St. Jude Childrens Research Hospital', type: 'Medical', image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fgojohnnies.com%2Fimages%2F2018%2F4%2F12%2FJude.jpg%3Fwidth%3D1416%26height%3D797%26mode%3Dcrop%26quality%3D80%26format%3Djpg&imgrefurl=https%3A%2F%2Fgojohnnies.com%2Fnews%2F2018%2F4%2F12%2Fgeneral-sju-student-athletes-raise-nearly-40-000-for-st-jude-childrens-research-hospital.aspx&tbnid=1u60nbxq30MAWM&vet=12ahUKEwiktOOMntbwAhUGGVMKHbt7CtUQMygBegUIARCvAQ..i&docid=CmpwRDFK-uewgM&w=851&h=556&q=St.%20Jude%20Childrens%20Research%20Hospital&ved=2ahUKEwiktOOMntbwAhUGGVMKHbt7CtUQMygBegUIARCvAQ')
Charity.create(name: 'YMCA of the USA', type: 'Youth', image: 'https://s3.amazonaws.com/ymca-ynet-prod/files/seo/ymca-logo-orange.png')
Charity.create(name: 'Wildlife Conservation Society', type: 'Animal Protection', image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fc532f75abb9c1c021b8c-e46e473f8aadb72cf2a8ea564b4e6a76.ssl.cf5.rackcdn.com%2F2020%2F04%2F18%2F41l4itg1sx_WCS_identity_logo.jpg&imgrefurl=https%3A%2F%2Fwww.wcs.org%2Fstrategy&tbnid=K_-IyH6F1p0KLM&vet=12ahUKEwjZ-uGMn9bwAhUN0VMKHRW2Ce8QMygBegUIARCuAQ..i&docid=M0l7KQqRs7XwRM&w=1200&h=800&q=wildlife%20conservation%20society&hl=en&ved=2ahUKEwjZ-uGMn9bwAhUN0VMKHRW2Ce8QMygBegUIARCuAQ')
Charity.create(name: 'Compassion International', type: 'International Needs', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/CompassionInternationalLogo.png/220px-CompassionInternationalLogo.png')
Charity.create(name: 'Boys & Girls Clubs of America', type: 'Youth', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Boys_%26_Girls_Clubs_of_America_%28logo%29.svg/200px-Boys_%26_Girls_Clubs_of_America_%28logo%29.svg.png')
Charity.create(name: 'American Cancer Society', type: 'Health', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/American_Cancer_Society_Logo.svg/250px-American_Cancer_Society_Logo.svg.png')
Charity.create(name: 'PetSmart Charities', type: 'Animal Protection', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/16/PetSmart_Charities_US.jpg/220px-PetSmart_Charities_US.jpg')
Charity.create(name: 'Nature Conservancy', type: 'Environment/Animal', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Nature_Conservancy.svg/250px-Nature_Conservancy.svg.png')
Charity.create(name: 'Mount Sinai Health Systems', type: 'Medical', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Mount_Sinai_Health_System_logo.svg/150px-Mount_Sinai_Health_System_logo.svg.png')
Charity.create(name: 'Planned Parenthood Federation of America', type: 'Domestic Needs', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Planned_Parenthood_logo.svg/220px-Planned_Parenthood_logo.svg.png')
Charity.create(name: 'Dian Fossey Gorilla Fund International', type: 'Animal Protection', image: 'https://gorillafund.org/wp-content/uploads/2018/01/Logo.png')

puts data loaded success