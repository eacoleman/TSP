#! /usr/bin/python

## Signature
# input.txt -> dictionary

import os, json

## Description 
# This script will read a .txt file (a textbook), with each bulk of text appropriately marked as 
# "#TYPE", where TYPE can be an EXERCISE, a PARAGRAPH, a SECTION, a DEMONSTRATION, or an EQUATION 
# (it should be possible to add or modify types at any time). 
# ON THE LAST LINE, THE FILE SHOULD HAVE A '#'. OTHERWISE THE TEXT OF THE LAST ENRRY
# The script will parse through such a file, creating a dictionary, where each entry will have a 
# key for type and text. That dictionary will be the output of the script. 

## Plan of Procedure
# 0. Declare variables
type_list = ['SECTION', 'EXERCISE', 'PARAGRAPH', 'EQUATION', 'DEMONSTRATION']
output_dict = {"type": "", "text": ""}

print "type list is: "
print (type_list)

# PUTs the current dictionary in the database if the type key is in type_list

def push(entry, counter):
	os.system("curl -XPUT 'http://localhost:9200/quantum/" + str(counter) + "' " + "-d " + "'" + json.dumps(entry, ensure_ascii=False) + "'")

# Input: .txt file name with bulks of text marked w``ith '#TYPE', and '#' at the end of the file.
# Runs through the file line-by-line. If a` new line starts with '#', puts the current dictionary 
# in the database with push(`dictionary), updates the type of the dictionary, and builds up the 
# text key for the next entry. 


def parser(input, types):
	text_entry = ""
	id_counter = 1
	for line in input:
		if line[0] == "#":
			if output_dict['type'] in type_list:
				push(output_dict, id_counter)
				id_counter += 1
			output_dict['text'] = ""
			parsed_line = line[1:].split(' ', 1) 
			output_dict['type'] = parsed_line[0].strip()
			if len(parsed_line) > 1: 
				output_dict['text'] = parsed_line[1]
				continue
			else: 	
				continue
		else:
			output_dict['text'] += line


# 1. Read in a text file 
input_file = input("Enter the name of the input file (in quotation marks): ")
input_text = open(input_file, "r") # opening the input text in read-only mode

# 2. Read in an array of TYPEs (optional, have a default option) 
# 3. Parse through the text
parser(input_text, type_list)
