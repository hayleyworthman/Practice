#healthy foods
good_choice1 = "broccoli"
good_choice2= "carrot"
good_choice3 = "apple"

#unhealthy foods
uhoh_choice1 = "raw cookie dough"
uhoh_choice2 = "rotten marshmallows"
uhoh_choice3 = "cotton candy"

name = input("what your name, pal? ")
food_choice = input("{0}, pick one snack to eat while you watch tv in bed tonight: \n1) {1} \n2) {2} \n3) {3} \n4) {4} \n5) {5} \n6) {6}".format(name, uhoh_choice1, good_choice1, uhoh_choice2, good_choice2, uhoh_choice3, good_choice3))

if food_choice == good_choice1 or food_choice == good_choice2 or food_choice == good_choice3:
    print("congrats! you aren't going to get dysentery! sleep well!")
elif food_choice == uhoh_choice1 or food_choice == uhoh_choice2 or food_choice == uhoh_choice3:
    print("keep the procelin throne close by tonight, {}. i think it's safe to say that " + food_choice + " was a baaaaad choice (much like milk on a hot a day)".format(name))
else:
    print("try again.")
