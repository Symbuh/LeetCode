func isValid(s string) bool {
    
    var validChars = map[string]string{
        "{":"}", 
        "(":")", 
        "[":"]",
    }
    
    var queue []string 
    
    for i, char := range s {
        char := string(char)
        
        if validChars[char] != "" {
            queue = append(queue, validChars[char])
        } else {
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