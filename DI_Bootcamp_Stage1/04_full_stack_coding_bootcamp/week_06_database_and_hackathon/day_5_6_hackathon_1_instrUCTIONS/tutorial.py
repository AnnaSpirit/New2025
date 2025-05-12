# tutorial.py
#  Module pour le mode TUTORIEL du projet Pawn to King

import random
from pawn_cli import show_board, transform_input, valid_moove, Ansi

#  Fonction principale pour lancer plusieurs tutoriels
def run_tutorials():
    PIECES = ['rook', 'knight', 'bishop', 'queen', 'king']
    random.shuffle(PIECES)

    for piece in PIECES:
        play_tutorial(piece)
        again = input("Next tutorial? (y/n): ")
        if again.lower() != 'y':
            return  #  On quitte si l'utilisateur ne veut pas continuer

#  Fonction qui gère un tutoriel pour une seule pièce
def play_tutorial(piece):
    #  Créer un plateau vide
    board = [['' for _ in range(8)] for _ in range(8)]

    #  Placer un pion à capturer en D5
    board[3][3] = 'p'

    #  Position de départ de la pièce
    starting_positions = {
        'rook': (0, 0),    # A8
        'knight': (0, 1),  # B8
        'bishop': (0, 2),  # C8
        'queen': (0, 3),   # D8
        'king': (0, 4),    # E8
    }
    start_row, start_col = starting_positions[piece]

    #  Ajouter la pièce
    symbols = {'rook': 'R', 'knight': 'N', 'bishop': 'B', 'queen': 'Q', 'king': 'K'}
    board[start_row][start_col] = symbols[piece]

    #  Nombre de coups maximum autorisés
    limits = {
        'rook': 4,
        'knight': 5,
        'bishop': 4,
        'queen': 3,
        'king': 3
    }
    moves_allowed = limits[piece]

    #  Message d'objectif stylé
    print(f"\n{Ansi.BOLD}{Ansi.GREEN}🎯 GOAL:{Ansi.RESET} Capture the pawn at {Ansi.YELLOW}D5{Ansi.RESET} using your {Ansi.CYAN}{piece.upper()}{Ansi.RESET} in {Ansi.MAGENTA}{moves_allowed}{Ansi.RESET} moves maximum!\n")

    #  Boucle principale du tutoriel
    while moves_allowed > 0:
        show_board(board)
        move = input(f"({moves_allowed} moves left) Your move (ex: e2 e4): ")

        try:
            (fr, fc), (tr, tc) = transform_input(move)
            playing_piece = board[fr][fc]

            if not playing_piece:
                print("Empty square! Try again.")
                continue

            if not valid_moove(board, ((fr, fc), (tr, tc)), playing_piece):
                print("Invalid move! Try again.")
                continue

            #  Déplacer la pièce
            board[tr][tc] = playing_piece
            board[fr][fc] = ''

            moves_allowed -= 1

            #  Vérifier si la pièce capture le pion
            if (tr, tc) == (3, 3):
                show_board(board)
                print(f"✅ Well done! You captured the pawn with your {piece.upper()}! 🎉")
                return
        except Exception:
            print("Invalid input. Format should be like 'e2 e4'.")

    #  Si échec (plus de mouvements)
    show_board(board)
    print(f"❌ Out of moves! You didn't capture the pawn with your {piece.upper()}...")

    #  Menu après échec : Replay / Solution / Next
    choice = input("What do you want to do? (r = retry / s = show solution / n = next): ")
    if choice.lower() == 'r':
        play_tutorial(piece)
    elif choice.lower() == 's':
        show_solution(piece)
    else:
        print("Moving to next tutorial...\n")

#  Fonction pour afficher une solution théorique
def show_solution(piece):
    solutions = {
        'rook': ['a8 a5', 'a5 d5'],
        'knight': ['b8 c6', 'c6 e5', 'e5 d7', 'd7 f6', 'f6 d5'],
        'bishop': ['c8 e6', 'e6 d5'],
        'queen': ['d8 d5'],
        'king': ['e8 e7', 'e7 e6', 'e6 d5']
    }

    print(f"\n{Ansi.BOLD}{Ansi.BLUE}🧠 Suggested solution for {piece.upper()}:{Ansi.RESET}")
    moves = solutions.get(piece, [])
    for move in moves:
        print(f" - {move}")
    print()
