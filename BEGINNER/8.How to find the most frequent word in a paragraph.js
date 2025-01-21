function mostUsedWord(text, bannedWords) {
    //   /*\
    // 1. replace(/[^\w\s]/g, "")
    // This part removes unwanted characters (punctuation marks and special symbols) from the input text. Let’s dive into the regular expression:
    
    // Explanation of the Regex:
    // /: Delimits the start and end of the regular expression.
    // [^\w\s]:
    // ^: Negation operator, meaning "not."
    // \w: Matches any word character (letters, digits, and underscore _).
    // \s: Matches any whitespace character (spaces, tabs, or newlines).
    // Together, [^\w\s] means "anything that is NOT a word character or whitespace."
    // g: Global flag, meaning it will replace all occurrences, not just the first one.
    // How It Works:
    // Any character that is not a letter, digit, whitespace, or underscore will be replaced with an empty string (""), effectively removing it.
    
    // Eg. const text = "Bob hit a ball, the hit ball flew far after it was hit!";
    // console.log(text.replace(/[^\w\s]/g, ""));
    // // Output: "Bob hit a ball the hit ball flew far after it was hit"
    
    
    // 2. split(/\s+/)
    // This part splits the cleaned string into an array of words.
    
    // Explanation of the Regex:
    // /: Delimits the start and end of the regular expression.
    // \s+:
    // \s: Matches any whitespace character (spaces, tabs, or newlines).
    // +: Matches one or more occurrences of the preceding pattern.
    // How It Works:
    // The split function breaks the string into parts wherever one or more spaces (or other whitespace) occur.
    // Even if there are multiple spaces between words, they will be treated as a single delimiter.
      
    //   Eg.const cleanedText = "Bob hit a ball the hit ball flew far after it was hit";
    // console.log(cleanedText.split(/\s+/));
    // // Output: ["Bob", "hit", "a", "ball", "the", "hit", "ball", "flew", "far", "after", "it", "was", "hit"]
    
       // Input validation
      
      if(text.length > 0){
        if (typeof text !== 'string' ) {
            throw new TypeError(`${text} is not of type string`);
        }
        if ( (bannedWords !== undefined && !Array.isArray(bannedWords))) {
            throw new TypeError(`${bannedWords} is not an array`);
        }
    
        // Default value for bannedWords
        bannedWords = bannedWords || [];
    
        // Normalize the text (convert to lowercase and remove punctuation)
        const words = text.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/);
    
        // Create a Set for banned words for quick lookup
        const bannedSet = new Set(bannedWords); //has se check..\\array m includes se check*
    
        // Count the frequency of each word
        const countMap = {};
        for (const word of words) {
            if (bannedSet.has(word)) {
                countMap[word] = 0;//no entry in map*
                
            }
             if(countMap[word] ){
                countMap[word] = countMap[word]  + 1;
            }else{
                countMap[word] =1;//new entry ban rhi*
            }
    
            
        }
    
        // Find the word with the highest frequency
        let maxCount = 0;
        let mostFrequentWord = "";
        for (const [word, count] of Object.entries(countMap)) {
            if (count > maxCount) {
                maxCount = count;
                mostFrequentWord = word;
            }
        }
       
        // Return the most frequent word
        return mostFrequentWord;}
    else{
        throw new TypeError('Input text is empty')
    }
    
    }
    
    
    
    
    