import random
import string

print("Random Password Generator")

length = int(input("Enter password length: "))

use_upper = input("Include uppercase letters? (y/n): ")
use_lower = input("Include lowercase letters? (y/n): ")
use_numbers = input("Include numbers? (y/n): ")
use_symbols = input("Include symbols? (y/n): ")

characters = ""

if use_upper == "y":
    characters += string.ascii_uppercase

if use_lower == "y":
    characters += string.ascii_lowercase

if use_numbers == "y":
    characters += string.digits

if use_symbols == "y":
    characters += string.punctuation

if characters == "":
    print("Error: Select at least one character type")
else:

    password = ""

    for i in range(length):
        password += random.choice(characters)

    print("Generated Password:", password)
