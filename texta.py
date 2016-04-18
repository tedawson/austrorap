#Texta.at songtext getter
# -*- coding: utf-8 -*-
from sys import argv
import austrorap2


script, url, target = argv

text_start = '<div class="field-item even">'
text_end = '<iframe'
lyrics = austrorap2.songtext(url, text_start, text_end)
lyrics2 = unicode(lyrics, "utf-8")
lyrics_list = lyrics2.split(' ')
frequencies = austrorap2.ordered_freq_list(lyrics_list)
unique_words, total_words, variety = austrorap2.lexical_variety(lyrics_list)

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
