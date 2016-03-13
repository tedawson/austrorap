# -*- coding: utf-8 -*-
from sys import argv
from austrorap import *


script, url, target = argv

lyrics = songtext_texta(url)
lyrics2 = unicode(lyrics, "utf-8")
lyrics_list = lyrics2.split(' ')
frequencies = ordered_freq_list(lyrics_list)
unique_words, total_words, variety = lexical_variety(lyrics_list)

f = open(target, 'w')

f.write("Lyrics = \n" + lyrics + "\n")
f.write("List of words = \n" + str(lyrics_list).decode("utf-8") + "\n")
for pair in frequencies:
	f.write(str(pair) + "\n")

f.close()
#unicode(bytestr, "utf-8")
print "Words in Corpus: ",
print total_words
print "Unique Words in Corpus: ",
print unique_words
print "Lexical Variety in Corpus (Type-Token-Ratio): ",
print variety
print "Lyrics, word list, and frequencies saved as " + str(target)
print lyrics_list
