func isValid(s string) bool {
    /*
        We need to store some sort of queue
        of the open brackets
        
        Last in last out to maintain order 
        
        if we find another opening bracket push it
        
        if the closing bracket we find corresponds
        to an opening bracket we are free to push it out
        of this queue
        
        if we have anything remaining in the queue, 
        or ever parse through a closing bracket while 
        the queue is empty, we can return false. 
    */
    
    var validChars = 
    map[string]string{"{":"}", "(":")", "[":"]"}
    
    var queue []string 
    
    for i, char := range s {
        char := string(char)
        
        if validChars[char] != "" {
            queue = append(queue, validChars[char])
        } else {
            // If we don't get an opening bracket: 
            if len(queue) == 0 || i == 0 {
                return false
            }
            if queue[len(queue) - 1] == char {
                queue = queue[:len(queue) - 1]
            } else {
                return false
            }
        }
    }
    
    if len(queue) > 0 {
        return false 
    } 
    
    return true
    
}