import java.util.HashMap;
import java.util.ArrayList;

class Solution {
    public boolean isValid(String s) {
        HashMap<Character, Character> validChars = new HashMap<Character, Character>();
        ArrayList<Character> queue = new ArrayList<Character>();
        
        validChars.put('(', ')');
        validChars.put('{', '}');
        validChars.put('[', ']');
        
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            
            if (validChars.get(c) != null) {
                queue.add(validChars.get(c));
            } else {
                if (queue.size() == 0) {
                    return false;
                }
                
                if (queue.get(queue.size() - 1) == c) {
                    queue.remove(queue.size() - 1);
                } else {
                    return false;
                }
            }
        }
        
        return queue.size() > 0 ? false : true;
        
    }
}