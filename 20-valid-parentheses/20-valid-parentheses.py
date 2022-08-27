class Solution:
    def isValid(self, s: str) -> bool:
        validChars = {
                        "{": "}",
                        "[": "]",
                        "(": ")",
                     }
        
        queue = []
        
        for char in s: 
            if char in validChars:
                queue.append(validChars[char])
            else:
                if len(queue) == 0: 
                    return False
                
                if queue[len(queue) - 1] == char: 
                    del queue[-1]
                else: 
                    return False
                
        return False if len(queue) > 0 else True