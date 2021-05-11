import string


def triple_threat(letter: str) -> str:
    """
    Play Triple Threat

    :param letter: letter to check
    :param number: number to check
    :return: The correct word ("Trick", "Treat", or "Triple threat")
    or number if it's not divisible by 3 or 10.
    """
    if number % 3 == 0:
        return("Trick")
    elif number % 10 == 0:
        return("Treat")
    elif number % 30 == 0:
        return("Triple Threat")
    return str(number)


input("Play Triple Threat.    Press ENTER to begin:")
print()

next_number = 0
while next_number < 99:
    next_number += 1
    print(triple_threat(next_number))
    next_number += 1
    correct_answer = triple_threat(next_number)
    players_answer = input("Your turn: ")
    if players_answer != correct_answer.casefold():
        print("Wrong, Buddy. The correct answer was {}".format(correct_answer))
        break
else:
    print("Congrats, Friend! You reached {}.".format(next_number))
