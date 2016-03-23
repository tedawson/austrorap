# python module for working with Austrian Rap texts

# stopwords list goes here...

def songtext_texta(url):
    '''Takes a url from texta.at as input, and returns just the song text'''
    from urllib2 import urlopen
    target = urlopen(url)
    whole_page = target.read()
    text_start = whole_page.find('<div class="field-item even">')
    text_end = whole_page.find('<iframe')
    tagged_text = whole_page[text_start: text_end]
    x = 0
    songtext = ''
	
    for char in tagged_text:
        if char == '<':
            x = 1
        elif x == 1 and char == '>':
            x = 0
        elif x == 1:
            continue
        else:
            songtext += char

    return songtext
	
	
def ordered_freq_list(wordlist):
    '''takes a list of words and returns an ordered list with frequencies'''
    word_freq = [wordlist.count(p) for p in wordlist]
    freq_list0 = zip(word_freq, wordlist)
    freq_list = []
    for pair in freq_list0:
        if pair not in freq_list:
            freq_list.append(pair)
        else:
            pass
    freq_list.sort()
    freq_list.reverse()
    return freq_list
	
def lexical_variety(wordlist):
    '''Takes a list of words and returns the ratio of unique words to total words'''
    unique_words = float(len(ordered_freq_list(wordlist)))
    total_words = float(len(wordlist))
    variety = unique_words/total_words
    return unique_words, total_words, variety