from game import Game

def get_user_menu_choices():
    # Demande à l'utilisateur son choix dans le menu principal
    return input("What do you want to do?\n(p) Play a new game\n(sq) Show score and exit\n> ")

def print_result(total_result={}):
    # Affiche les scores finaux
    print("The scores are:")
    for key, value in total_result.items():
        print(f"{key} : {value}")
    print("Thank you for playing!")

def main():
    # Initialise le dictionnaire des résultats
    total_result = {'won': 0, 'lost': 0, 'drew': 0}
    user_choice_menu = ''
    
    # Vérifie que le choix initial est valide
    while user_choice_menu not in ['p', 'sq']:
        user_choice_menu = get_user_menu_choices()
    
    # Boucle principale de jeu
    while user_choice_menu == 'p':
        game = Game()
        result = game.play()
        total_result[result] += 1
        user_choice_menu = get_user_menu_choices()
        if user_choice_menu == 'sq':
            print_result(total_result)
            break

if __name__ == '__main__':
    main()
