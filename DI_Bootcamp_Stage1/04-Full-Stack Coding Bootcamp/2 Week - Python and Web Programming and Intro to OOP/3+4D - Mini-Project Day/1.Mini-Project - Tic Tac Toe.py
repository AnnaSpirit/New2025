# NOTE: Drawing the board
def Draw_board(board):
    for line in board:
        print(" | ".join(line))
        print("-" * 5)

#NOTE: Check if a player has won
def winner(board, player):
    #INFO: Vérifie les lignes
    for line in board:
        if all([case == player for case in line]):
            return True
    #INFO: Vérifie les colonnes
    for col in range(3):
        if all([board[row][col] == player for row in range(3)]):
            return True
    #INFO: Vérifie les diagonales
    if all([board[i][i] == player for i in range(3)]) or \
	all([board[i][2-i] == player for i in range(3)]):
        return True
    return False

#NOTE: Main function
def Tic_Toe():
    board = [[" " for _ in range(3)] for _ in range(3)]
    actif_player = "X"

    for turn in range(9):
        Draw_board(board)
        print(f"Player {actif_player}, your turn. Choose a position (line column (0-3)): ")

        while True:
            try:
                l, c = map(int, input().split())
                if 0 <= l < 3 and 0 <= c < 3 and board[l][c] == " ":
                    break
                else:
                    print("Position not valid or already occupied.")
            except ValueError:
                print("Invalid entry. Use 'line column'.")

        board[l][c] = actif_player
        if winner(board, actif_player):
            Draw_board(board)
            print(f"🔥🔥🔥Player {actif_player} win!"🔥🔥🔥)
            return
        actif_player = "O" if actif_player == "X" else "X"
    
    Draw_board(board)
    print("zero match")

Tic_Toe()